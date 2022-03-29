import ReactDOM from "react-dom";
import React from "react";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import Routes from "./routes/index";
import Theme from "./resources/Theme";
import "./styles.css"
import { HashRouter } from "react-router-dom";

const starApp = () =>{
  ReactDOM.render(
    <ThemeProvider theme={Theme}>
      <StrictMode>
        <HashRouter>
          <Routes />
        </HashRouter>
      </StrictMode>
    </ThemeProvider>,
    document.getElementById("root")
  );
}

if(!window.cordova){
  alert("caca")
  starApp()
}else{
  document.addEventListener("deviceready",starApp,false)
}

