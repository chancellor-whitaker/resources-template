import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import { RemoteModuleProvider } from "./remote/assets/RemoteModuleProvider.jsx";
import { Root } from "./remote/Root.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RemoteModuleProvider>
      <Root></Root>
    </RemoteModuleProvider>
  </StrictMode>
);
