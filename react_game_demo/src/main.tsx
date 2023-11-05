// html (hypertext markup language)
// it contains element which has tag and content like <h1>header</h1>
// every element has multiple attributes property which makes it live.
// <tagName id=ID_value> it helps to identify the element uniquely.

// tsx is used for typescript + react file
// normal ts is used for normal typescript purpose
// we will create component using "function based approach"
// A component can have a behavior/Property.

// learn how to build component
// rendering markup with jsx
// managing state
// passing input via props
// debugging react applications

// we can start building an app quickly using https://getbootstrap.com/
// for quick search use - command+p

// Learning module:
// 1. React core syntax and JSX
// 2. Working with components
// 3. Working with data

// Components -- re-usability and separate of concerns
// It consists of "HTML", "CSS" and "Javascripts"

// In react, a component can return only one element, it will give us an error if we return multiple element
// But we can solve it using "Fragment"
// we can use <> <-- default signal to React to use "Fragment"

// we can use { } to render data dynamically
// Render based on certain condition

// when we define a local variable it is not accessibile to the react component
// we can "Hook" it between variable and its setter method
// Each component should have its state.

// Passing data via props
// Props are input to the component
// we can pass { items: [], heading: String }
// using an "interface", we can define the shape of an object

// once a click event happens, let's notify the ohter component.

// State vs Props
// state: Internal data managed by a component. It is mutable.
// Props: Input pass to a component. We should treat props like immutable.

// debugging - react developer tool

// search emmet.io cheat sheet for quick code reference.
// like ! for basic html set up, html:5 for boiler plate code
// for spaces, we need to use html entities, we can use &(entity_name; or &#(entity_number);
// you can use lorem50 to add random 50 chars
// <hr> is used for horizontal line

// <input> element to fetch any input
// type="text" // type="password" // "radiobutton", "checkbox"
// name="firstName"

// input can be a "textarea"
// use <select></select> to give "drop down" option using <option></option>
// <fieldset></fieldset> to define a separate area

// block level tags which takes the entire horizontal space like <p></p>, <table></table>,
// inline tags takes only the space based on content like <em></em>
// semantic tag & non-semantic tags

// <a href="URL" target="_blank"> <img src="" /> </a> so we can create an image with URL and
// it can open in another page

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
