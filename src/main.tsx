import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const AppGate = () => {
  return <App />;
};

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

console.log("🚀 Application starting...");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppGate />
  </React.StrictMode>
);
