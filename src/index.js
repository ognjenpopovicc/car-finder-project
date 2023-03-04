import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import App from "./App";
import { QueryProvider } from "./contexts/QueryContext";
import { ImageProvider } from "./contexts/ImageUploadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ImageProvider>
      <AuthProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </AuthProvider>
    </ImageProvider>
  </React.StrictMode>
);
