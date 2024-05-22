import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/root-element";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};
