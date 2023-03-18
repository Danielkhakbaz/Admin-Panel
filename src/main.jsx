import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes/theme";
import { Compose } from "utils/compose/compose";
import App from "src/App";

const Providers = [];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Compose providers={Providers}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Compose>
    </ChakraProvider>
  </React.StrictMode>
);
