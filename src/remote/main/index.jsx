import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "../../index.css";
import { RemoteModuleProvider } from "../assets/RemoteModuleProvider.jsx";
import { Root } from "./Root.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RemoteModuleProvider>
      <Root></Root>
    </RemoteModuleProvider>
  </StrictMode>
);
