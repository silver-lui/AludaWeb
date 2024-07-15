import Category from "./Components/Category";
import Mtavari from "./Components/Mtavari";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Login from "./Components/Login"
import Admin from "./Components/Admin"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./Components/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <News></News>
        <Category></Category>
        <Routes>
          <Route path="/" element={<Mtavari></Mtavari>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Admin" element={<Admin></Admin>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
