import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import pages from "./utils/pagesMap";
import Main from "./layouts/Main/Main";
import Booking from "./pages/Booking/Booking";

const App = () => {
  return (
    <div data-testid="app-component">
      <Main>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("booking").path} element={<Booking />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
