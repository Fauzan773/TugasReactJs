import React from "react";

const Button = ({ text = "Button", backgroundColor = "##00FFFF", ...props }) => {
  return (
    <button
      style={{
        background: backgroundColor,
        border: 0,
        color: "white",
        borderRadius: 5,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
