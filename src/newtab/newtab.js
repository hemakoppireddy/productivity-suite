import React from "react";
import { createRoot } from "react-dom/client";
import NewTab from "./NewTab.jsx";
import "./newtab.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<NewTab />);