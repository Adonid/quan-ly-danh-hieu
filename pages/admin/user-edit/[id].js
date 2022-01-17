import React, { useEffect, useState } from "react";
// Redux
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { updateAccountAction, updateOrtherInfoAction } from "services/actions";
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
// layout for page
import Admin from "layouts/Admin.js";
// Validate
import {isNumber} from "general/validate/commonValiate"
// API
import {getDetailAUserApi} from 'apis/Auth'

function Settings({user, currentUser, updateAccountCreators, updateOrtherInfoCreators}) {
  const [userData, setUserData] = useState(user)
  useEffect(() => {
      setUserData(currentUser)
  }, [currentUser])
  useEffect(() => {
      setUserData(user)
  }, [user])
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings user={user} updateAccount={updateAccountCreators} updateOrtherinfo={updateOrtherInfoCreators} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile user={userData} />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;

const mapStateToProps = state => {
  return {
    currentUser: state.common.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAccountCreators: bindActionCreators(updateAccountAction, dispatch),
    updateOrtherInfoCreators: bindActionCreators(updateOrtherInfoAction, dispatch)
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Settings)


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(ctx) {
  const id = ctx.query.id
  // Back to HOME if id undefined
  const isID = isNumber("userId", id)
  if(isID){
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
  // Route truoc do de redirect ve khi SSR loi
  const redirectBack = ctx.req?ctx.req.headers.referer:false
  // Token neu co
  const token = ctx.req?ctx.req.headers.cookie:false
  // Back to login page neu token trong cookie ko con gia tri
  if(!token||!redirectBack){
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    }
  }
  // Fetching data phia BACKEND
  try {
    const {data, statusText} = await getDetailAUserApi(token, id)
                        .then(res => {
                          return {data: res, statusText: res.statusText}
                        })
                        .catch(err => console.log(err))
    const datasSSR = await data.json()
    // By returning { props: { datasSSR } }
    if(datasSSR && !datasSSR.error)
      return {
        props: {
          user: datasSSR.datas,
        },
      }
    // Back to login-page
    if(statusText==="Unauthorized" || statusText === "Too Many Requests")
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      }
    // Back to pre-page
    else
      return {
        redirect: {
          destination: redirectBack,
          permanent: false,
        },
      }
  } catch (error) {
    // Back to login-page
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    }
  }
}
