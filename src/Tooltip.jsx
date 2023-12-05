import React, { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Tooltip({ children, targetPosition }) {
  const [tooltipHeight, setTooltipHeight] = useState(0);

  const tooltipRef = useRef(null);
  const { top, left, bottom, right } = targetPosition;
  let x = 0;
  let y = 0;

  if (targetPosition !== null) {
    x = left;
    y = top - tooltipHeight;
    if (y < 0) {
      y = bottom;
    }
  }
  // we want to calculate height even before browser painted the react comp

  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  return createPortal(
    <div
      ref={tooltipRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        transform: `translate3d(${x}px ,${y}px ,0)`,
      }}
      className="bg-rose-200"
    >
      {children}
    </div>,
    document.body
  );
}

export default Tooltip;
