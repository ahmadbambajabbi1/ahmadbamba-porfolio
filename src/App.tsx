import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <NextUIProvider className=" container bg-gradient-to-tr from-primaryColor via-slate-800 to-secondaryColor text-white">
      <Home />
    </NextUIProvider>
  );
};

export default App;
