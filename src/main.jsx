import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ResourcesProvider from "./modules/resources/assets/Provider.jsx";
import { Root } from "./modules/Root.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResourcesProvider>
      <Root></Root>
    </ResourcesProvider>
  </StrictMode>
);
