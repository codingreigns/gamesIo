import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";
import CustomProvider from "./Providers/CustomProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </StrictMode>
);
