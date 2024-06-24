import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./components";
import { ROUTES } from "./config";
import { RootError, Root } from "./Pages";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Root />} />
        <Route path={ROUTES.NOTFOUND} element={<RootError />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
