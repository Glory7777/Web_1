import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Game from "./game";
import App from "./app";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Game/>
    <br/>
    <App />
  </StrictMode>
);