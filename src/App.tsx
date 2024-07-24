import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
// import SmallHeader from "./components/SmallHeader";

const App = () => {
  return (
    <NextUIProvider className=" container bg-gradient-to-tr from-primaryColor via-slate-800 to-secondaryColor text-white">
      <Routes>
        <Router>
          <Route path="/" element={<Home />} />
        </Router>
      </Routes>
    </NextUIProvider>
  );
};

export default App;
