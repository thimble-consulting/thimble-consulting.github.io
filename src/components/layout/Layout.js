import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Modals from "./Modals";
import BodyWrapper from "./BodyWrapper";

const commonWidthClasses = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

const Layout = ({ children }) => {
  return (
    <>
      <BodyWrapper>
        <Header className={commonWidthClasses} />
        <main inert className={`${commonWidthClasses} text-black`}>
          {children}
        </main>
        <Footer className={commonWidthClasses} />
      </BodyWrapper>
      <Modals />
    </>
  );
};

export default Layout;
