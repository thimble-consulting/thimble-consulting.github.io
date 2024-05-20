import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-black max-w-6xl mx-auto px-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
