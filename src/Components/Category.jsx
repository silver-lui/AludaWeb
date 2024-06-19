import "../Style/Cat-Style.css";
import profimg from "../assets/aluda.png";

function Category() {
    return (
        <div className="cat-wrapper">
            <ul className="cat-ul">
                <li className="profimg">
                    <img src={profimg} alt="" />
                </li>
                <li>
                    <a href="/">მთავარი</a>
                </li>
                <li>
                    <a href="/profile">პროფილი</a>
                </li>
                <li>
                    <a href="/activities">აქტივობები</a>
                </li>
                <li className="dd-li">
                    <a href="/topics">თემები</a>
                    {/* <div className="dropdown">
                        <div className="col">
                            <div className="row row-1">
                                <a href="#">არა რუსულ კანონს</a>
                                <a href="#">ინფორმაცია უნივერსიტეტებში</a>
                                <a href="#">usid</a>
                            </div>
                            <div className="row row-2">
                                <a href="#">არა რუსულ კანონს</a>
                                <a href="#">ინფორმაცია უნივერსიტეტებში</a>
                                <a href="#">usid</a>
                            </div>
                            <div className="row row-3">
                                <a href="#">არა რუსულ კანონს</a>
                                <a href="#">ინფორმაცია უნივერსიტეტებში</a>
                                <a href="#">usid</a>
                            </div>
                        </div>
                    </div> */}
                </li>
                <li>
                    <a href="/history">ისტორიები</a>
                </li>
            </ul>
            <input type="text" name="" id="" />
        </div>
    );
}

export default Category;
