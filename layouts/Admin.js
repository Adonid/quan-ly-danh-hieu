import React from "react";

// Core nextjs
import { useRouter } from 'next/router'
// toast
import { useToasts } from 'react-toast-notifications'
// Redux
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { addAUserAction, logoutAction } from "services/actions";
// components
import IndexNavbar from "components/Navbars/IndexNavbar";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

function Admin({ children, toaster, addAUserCreators, logoutCreators, notifying }) {
  const router = useRouter()
  // Show hide toaster
  const { addToast } = useToasts()
  const index = React.useRef(0)
  React.useEffect(() => {
    if(index.current > 0)
      addToast(toaster.alert, {
        appearance: toaster.type,
        autoDismiss: true,
      })
    index.current++
  }, [toaster])

  return (
    <>
      <div className="relative bg-blueGray-100">
        <IndexNavbar pathName={router.pathname} addAUser={addAUserCreators} logoutAdmin={logoutCreators} notifying={notifying} />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
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
    notifying: state.login.notifying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAUserCreators: bindActionCreators(addAUserAction, dispatch),
    logoutCreators: bindActionCreators(logoutAction, dispatch),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Admin)