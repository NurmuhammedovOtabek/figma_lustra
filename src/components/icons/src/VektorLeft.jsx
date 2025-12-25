import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11}
    fill="none"
    viewBox="0 0 18 11"
    {...props}
  >
    <path stroke={props.color ?? "#000"} d="M.71 5.355h17m-17 0 5.037-5m-5.037 5 5.037 5" />
  </svg>
);
export default SvgComponent;
