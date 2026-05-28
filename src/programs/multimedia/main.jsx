import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MultimediaApp from "./MultimediaApp.jsx";
import "./Multimedia.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MultimediaApp />
  </StrictMode>
);
