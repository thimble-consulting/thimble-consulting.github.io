import React from "react";
import Button from "../components/Button";
import { AppContext } from "../context/app-context";

const ContactUsButton = ({ children, className = "", size }) => {
  return (
    <AppContext.Consumer>
      {({ toggleContactUs }) => {
        return (
          <Button
            onClick={() => toggleContactUs(true)}
            className={className}
            size={size}
          >
            {children}
          </Button>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ContactUsButton;
