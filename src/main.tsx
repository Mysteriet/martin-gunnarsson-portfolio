import React from "react"
import { ThemeProvider } from "react-bootstrap"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
