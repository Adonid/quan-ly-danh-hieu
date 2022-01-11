import React, { useEffect, useState } from "react";
// Fetch
import fetch from "node-fetch"
// components
import CardNotification from "components/Cards/CardNotification.js";
// Redux
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { toggerReportAction, promotionWinAction } from "services/actions";
// layout for page
import Admin from "layouts/Admin.js";

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
export async function getStaticProps() {
  // Fetching data phia BACKEND
  try {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const {data, statusText} = await fetch(process.env.NEXT_PUBLIC_END_POINT_NOTIFICATION)
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
    // Back to pre-page
    else
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
  } catch (error) {
    console.log(error)
    // Back to login-page
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}
