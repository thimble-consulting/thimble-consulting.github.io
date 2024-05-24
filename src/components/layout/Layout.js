import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ContactUsForm from "../ContactUsForm";
import { AppContext } from "../../context/app-context";

const commonWidthClasses = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

const Layout = ({ children }) => {
  return (
    <>
      <BodyDiv>
        <Header className={commonWidthClasses} />
        <main inert className={`${commonWidthClasses} text-black`}>
          {children}
        </main>
        <Footer className={commonWidthClasses} />
      </BodyDiv>
      <ContactUsForm />
    </>
  );
};

function BodyDiv({ children }) {
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
}

export default Layout;
