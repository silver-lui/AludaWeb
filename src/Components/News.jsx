import "../Style/News-Style.css";
import img_1 from "../assets/img_2.jpg";
import img_2 from "../assets/img_3.jpg";
import img_3 from "../assets/img_4.jpg";
import img_4 from "../assets/img_5.jpg";
import img_5 from "../assets/img_6.jpg";

function News() {
    return (
        <div className="container">
            <ul className="news">
                <li className="ess">
                    <a href="#">
                        <img className="news-component" src={img_1} alt="" />
                        <p className="date">May 22, 2028</p>
                        <p className="title">იყო და არა იყო რა იყო ერთი გაჭირვებული fრონტენდ დეველოპერი</p>
                    </a>
                </li>
                <li className="ess">
                    <a href="#">
                        <img className="news-component" src={img_2} alt="" />
                        <p className="date">May 22, 2028</p>
                        <p className="title">იყო და არა იყო რა</p>
                    </a>
                </li>
                <li className="ess">
                    <a href="#">
                        <img className="news-component" src={img_3} alt="" />
                        <p className="date">May 22, 2028</p>
                        <p className="title">იყო და არა იყო რა</p>
                    </a>
                </li>
                <li className="ess">
                    <a href="#">
                        <img className="news-component" src={img_4} alt="" />
                        <p className="date">May 22, 2028</p>
                        <p className="title">იყო და არა იყო რა</p>
                    </a>
                </li>
                <li className="ess">
                    <a href="#">
                        <img className="news-component" src={img_5} alt="" />
                        <p className="date">May 22, 2028</p>
                        <p className="title">იყო და არა იყო რა</p>
                    </a>
                </li> 
            </ul>
        </div>
    );
}

export default News;
