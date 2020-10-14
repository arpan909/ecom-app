import React from "react";
import "./custom-button.styles.scss";
export default function CustomButton({
  children,
  isGoogleButton,
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleButton ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
