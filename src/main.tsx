import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContainer } from "./components/app_container/AppContainer";
import "./index.css";

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppContainer>
        <App />
      </AppContainer>
    </React.StrictMode>
  );
} else {
  console.error("Couldn't find root element with ID 'root'");
}