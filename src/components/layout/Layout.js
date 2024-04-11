import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-primary px-4 xs:px-0">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;