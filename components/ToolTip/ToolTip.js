import React from "react";
import { createPopper } from "@popperjs/core";

const ToolTip = ({content, contentToolTip, className}) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <>
        <div onMouseEnter={openTooltip} onMouseLeave={closeTooltip} ref={btnRef} className={className}>
          {content}
        </div>
        <div
            className={
              (popoverShow ? "" : "hidden ")
            }
            ref={popoverRef}
          >
            {contentToolTip}
        </div>
    </>
  );
};

export default ToolTip;