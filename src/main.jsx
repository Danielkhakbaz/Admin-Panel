import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes/theme";
import { Compose } from "utils/compose/compose";
import { AuthProvider } from "providers/auth/auth-provider";
import App from "src/App";

const queryClient = new QueryClient();

const Providers = [AuthProvider];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Compose providers={Providers}>
          <Suspense fallback={<div />}>
            <App />
          </Suspense>
        </Compose>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
