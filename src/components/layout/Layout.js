import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import AccessibilityWrapper from "./AccessibilityWrapper";

const commonWidthClasses = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

const Layout = ({ children }) => {
  return (
    <>
      <Header className={commonWidthClasses} />
      <main className={`${commonWidthClasses} text-black`}>{children}</main>
      <Footer className={commonWidthClasses} />
      <AccessibilityWrapper>
        <Header className={commonWidthClasses} />
        <main className={`${commonWidthClasses} text-black`}>{children}</main>
        <Footer className={commonWidthClasses} />
      </AccessibilityWrapper>
    </>
  );
};

export default Layout;
