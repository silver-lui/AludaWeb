import "../Style/News-Style.css";
import img_1 from "../assets/img_2.jpg";
import img_2 from "../assets/img_3.jpg";
import img_3 from "../assets/img_4.jpg";
import img_4 from "../assets/img_5.jpg";
import img_5 from "../assets/img_6.jpg";

function News() {
    return (
        <div className="container">
            <ul id="news">
                <li id="content">
                    <a href="#">
                        <img src={img_1} alt="news-1" />
                        <div className="text">
                            {/* <p className="title">asd</p>
                            <p className="des">asdasdasdasdasdasdasdasdas</p> */}
                        </div>
                    </a>
                </li>
                <li id="content">
                    <a href="#">
                        <img src={img_2} alt="news-1" />
                        <div className="text">
                            {/* <p className="title">asd</p>
                            <p className="des">asdasdasdasdasdasdasdasdas</p> */}
                        </div>
                    </a>
                </li>
                <li id="content">
                    <a href="#">
                        <img src={img_3} alt="news-1" />
                        <div className="text">
                            {/* <p className="title">asd</p>
                            <p className="des">asdasdasdasdasdasdasdasdas</p> */}
                        </div>
                    </a>
                </li>
                <li id="content">
                    <a href="#">
                        <img src={img_4} alt="news-1" />
                        <div className="text">
                            {/* <p className="title">asd</p>
                            <p className="des">asdasdasdasdasdasdasdasdas</p> */}
                        </div>
                    </a>
                </li>
                <li id="content">
                    <a href="#">
                        <img src={img_5} alt="news-1" />
                        <div className="text">
                            {/* <p className="title">asd</p>
                            <p className="des">asdasdasdasdasdasdasdasdas</p> */}
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default News;
