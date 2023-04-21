import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import Login from "./login.js";
import Home from "./home.js";
import Form from "./form.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path={"/"} element={<Login />} /> */}
          <Route path={"/"} element={<Form />} />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
