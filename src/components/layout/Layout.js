import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Modals from "./Modals";
import AccessabilityWrapper from "./AccessabilityWrapper";

const commonWidthClasses = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

const Layout = ({ children }) => {
  return (
    <>
      <AccessabilityWrapper>
        <Header className={commonWidthClasses} />
        <main inert className={`${commonWidthClasses} text-black`}>
          {children}
        </main>
        <Footer className={commonWidthClasses} />
      </AccessabilityWrapper>
      <Modals />
    </>
  );
};

export default Layout;
