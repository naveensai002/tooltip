import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip";

function ButtonWithTooltip({ tooltipContent, children }) {
  // console.log(tooltipContent, children);
  const [targetPosition, setTargetPosition] = useState(null);

  const handleHover = () => {
    const pos = buttonRef.current.getBoundingClientRect();
    setTargetPosition({
      top: pos.top,
      right: pos.right,
      bottom: pos.bottom,
      left: pos.left,
    });
  };

  const buttonRef = useRef(null);
  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={handleHover}
        onPointerLeave={() => {
          setTargetPosition(null);
        }}
        className=" btn btn-sm mb-20  btn-warning  rounded-lg flex flex-col gap-y-10 "
      >
        {children}
      </button>
      {targetPosition && (
        <Tooltip targetPosition={targetPosition}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}

export default ButtonWithTooltip;
