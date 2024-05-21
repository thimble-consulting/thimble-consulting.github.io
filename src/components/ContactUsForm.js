import React from "react";
import { FilloutPopupEmbed } from "@fillout/react";
import { AppContext } from "../context/app-context";
import "@fillout/react/style.css";

const ContactUsForm = () => {
  return (
    <AppContext.Consumer>
      {({ isContactUsOpen, toggleContactUs }) => {
        return (
          <>
            {isContactUsOpen && (
              <FilloutPopupEmbed
                filloutId="c5NGgaKqYfus"
                onClose={() => toggleContactUs(false)}
              />
            )}
          </>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ContactUsForm;
