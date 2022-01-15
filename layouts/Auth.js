import React from "react";
// Redux
import { connect } from "react-redux";
import { compose } from "redux";
// components
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
// toast
import { useToasts } from 'react-toast-notifications'

function Auth({ children, toaster }) {
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
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    toaster: state.common.toaster
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Auth)