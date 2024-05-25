import Main from "./Components/Categories/Main"
import Activities from "./Components/Categories/Activities"
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
            </BrowserRouter>
        </div>
    );
}

export default Content