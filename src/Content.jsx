import Main from "./Components/Categories/Main"
import Activities from "./Components/Categories/Activities"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Content() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main></Main>}></Route>
                    <Route path="/activities" element={<Activities></Activities>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Content