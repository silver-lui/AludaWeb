import Main from "./Categories/Main"
import Activities from "./Categories/Activities"
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Content() {
    return (
        <div className="cont-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main></Main>}></Route>
                    <Route path="/activities" element={<Activities></Activities>}></Route>
                </Routes>
                <News></News>
            </BrowserRouter>
        </div>
    );
}

export default Content