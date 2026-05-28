import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import "./v2/styles/variables.css";
// import App from "./App.jsx";
import V2App from "./v2/V2App.jsx"; 
import App from "./v2/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
