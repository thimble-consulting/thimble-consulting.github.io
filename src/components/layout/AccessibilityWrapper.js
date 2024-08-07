import React from "react";
import { AppContext } from "../../context/app-context";

const AccessibilityWrapper = ({ children }) => {
  return (
    <AppContext.Consumer>
      {({ isContactUsOpen }) => {
        if (isContactUsOpen) {
          return <div inert="true">{children}</div>;
        }
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
};

export default AccessibilityWrapper;
