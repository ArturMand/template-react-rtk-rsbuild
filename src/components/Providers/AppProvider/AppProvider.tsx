import { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProviderProps } from "./types";
import { theme } from "../../../themes";
import { ErrorBoundary, FallbackSpinner } from "../../Helpers";

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router>
        <Suspense fallback={<FallbackSpinner />}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
};

export default AppProvider;
