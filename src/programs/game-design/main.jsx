import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameDesignApp from "./GameDesignApp.jsx";
import "./GameDesign.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameDesignApp />
  </StrictMode>
);
