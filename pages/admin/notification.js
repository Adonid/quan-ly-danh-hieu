import React, { useEffect, useState } from "react";
// components
import CardNotification from "components/Cards/CardNotification.js";
// Redux
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { toggerReportAction, promotionWinAction } from "services/actions";
// layout for page
import Admin from "layouts/Admin.js";
// API
import {getDetailAUserApi, getNotification} from 'apis/Auth'

function Notification({notifyUser, wins, currentUser, toggerReportCreators, promotionWinCreators}) {
  const [notifications, setNotifications] = useState(notifyUser)
  // Thay doi USER khi co cap nhat moi tu CSR
  useEffect(() => {
     // Cap nhat cho bang notifies
     const newNotifies = [...notifications].map(item => {
          if(item.id === currentUser.id)
            return currentUser
          return item
      }).filter(i => i.to_quota)
      setNotifications(newNotifies)
  }, [currentUser])

  // Cac thao tac
  const promotionUser = data => promotionWinCreators(data)
  const toggerAlert = data => toggerReportCreators(data)

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardNotification 
            color="dark" 
            notification={notifications} 
            wins={wins}
            promotion={promotionUser}
            toggerAlertUser={toggerAlert}
          />
        </div>
      </div>
    </>
  );
}

Notification.layout = Admin;

const mapStateToProps = state => {
  return {
    currentUser: state.common.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggerReportCreators: bindActionCreators(toggerReportAction, dispatch),
    promotionWinCreators: bindActionCreators(promotionWinAction, dispatch),
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Notification)


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(ctx) {
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
    const {data, statusText} = await getNotification(token)
                        .then(res => {
                          return {data: res, statusText: res.statusText}
                        })
                        .catch(err => console.log(err))
    const datasSSR = await data.json()
    // By returning { props: { datasSSR } }
    if(datasSSR && !datasSSR.error)
      return {
        props: {
          notifyUser: datasSSR.datas.notifyUser,
          wins: datasSSR.datas.wins,
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
