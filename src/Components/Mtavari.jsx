import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "../Content";
import Main from "./Categories/Main";
import News from "./News";
import Contact from "./Contact";


function Mtavari() {

    return (
        <>
        <Main></Main>
        <News></News>
        <Contact></Contact>
        </>
    );
}


export default Mtavari;