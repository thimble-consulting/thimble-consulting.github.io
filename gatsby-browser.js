import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/root-element";
import { ParallaxProvider } from "react-scroll-parallax";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
};
