import React from "react"
import { render } from "react-dom"
import App from "./containers/App"
// Bug: importing module which is non install
// Fix: Install Bootstrap module
// Use the minified version and remove the other two imports
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/App.css"

// Update the rendering of react App
// Use event listen to DOMContentLoaded before trying to access the DOM
document.addEventListener("DOMContentLoaded", () => {
  render(
    <App/>,
    document.getElementById("root")
  )
})
