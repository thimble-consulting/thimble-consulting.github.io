import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import AccessibilityWrapper from "./AccessibilityWrapper";

const commonWidthClasses = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

const Layout = ({ children, fullWidth = false }) => {
  return (
    <>
      <AccessibilityWrapper>
        <Header className={commonWidthClasses} />
        <main className={`${fullWidth ? '' : commonWidthClasses} text-black`}>{children}</main>
        <Footer className={`${fullWidth ? '' : commonWidthClasses}`}/>
      </AccessibilityWrapper>
    </>
  );
};

export default Layout;
