import React, { useEffect, useRef, useState } from "react";

// Core nextjs
import { useRouter } from 'next/router'
// toast
import { useToasts } from 'react-toast-notifications'
// Redux
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { addAUserAction, logoutAction, toggerReportAction, promotionWinAction } from "services/actions";
// components
import IndexNavbar from "components/Navbars/IndexNavbar";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

function Admin({ children, toaster, users, addAUserCreators, logoutCreators, toggerReportCreators, promotionWinCreators, notifying, wins }) {
  const router = useRouter()
  // Show hide toaster
  const { addToast } = useToasts()
  const index = useRef(0)
  useEffect(() => {
    if(index.current > 0)
      addToast(toaster.alert, {
        appearance: toaster.type,
        autoDismiss: true,
      })
    index.current++
  }, [toaster])
  // Cap nhat thong bao
  const [notifies, setNotifies] = useState(notifying)
  useEffect(() => {
    setNotifies(notifying)
  }, [notifying])
  // Cap nhat cac chi so thong ke
  const [usersInApp, setUsersInApp] = useState(users)
  useEffect(() => {
    setUsersInApp(users)
  }, [users])

  return (
    <>
      <div className="relative bg-blueGray-100">
        <IndexNavbar pathName={router.pathname} addAUser={addAUserCreators} logoutAdmin={logoutCreators} notifying={notifies} wins={wins} toggerAlertUser={toggerReportCreators} promotionLevel={promotionWinCreators}/>
        {/* Header */}
        <HeaderStats users={usersInApp} wins={wins} />
        <div className="px-0 md:px-6 lg:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}


const mapStateToProps = state => {
  return {
    toaster: state.common.toaster,
    users: state.dashboard.users,
    notifying: state.login.notifying,
    wins: state.login.wins,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAUserCreators: bindActionCreators(addAUserAction, dispatch),
    logoutCreators: bindActionCreators(logoutAction, dispatch),
    toggerReportCreators: bindActionCreators(toggerReportAction, dispatch),
    promotionWinCreators: bindActionCreators(promotionWinAction, dispatch),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Admin)