import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/root-element";

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

export const onRouteUpdate = ({ location }) => {
  if (location.hash === '#top') {
    // NOTE: We add this in order to allow linking to the #top of a page
    //       without this being persisted as the location in browser history.
    //       This allows for the link to the top to always work, even if
    //       a saved scroll position exists for the page, while also allowing
    //       for the user to then scroll around the page, click to somewhere
    //       else, and then navigate back and come back to their previous scroll
    //       position.
    window.history.replaceState({}, "", location.pathname)
  }
}