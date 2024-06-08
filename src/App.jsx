import Category from "./Components/Category";
import Mtavari from "./Components/Mtavari";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Category></Category>
        <Routes>
          <Route path="/" element={<Mtavari></Mtavari>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
