import "../../css/footer.css";
import img_1 from "../assets/img_2.jpg";
import img_2 from "../assets/img_3.jpg";
import img_3 from "../assets/img_4.jpg";
import img_4 from "../assets/img_5.jpg";
import img_5 from "../assets/img_6.jpg";
import img_6 from "../assets/img_1.jpg";
import linkedin_logo from "../assets/linkedin.png";
import facebook_logo from "../assets/facebook.png"
import instagram_logo from "../assets/instagram.png"

function Footer(){
    return(
        <div className="Footer">
            <div className="bio_small">
                <h6 className="bio_title">BIO</h6>
                <p className="bio_text">
                    გამარჯობა მე ვარ ალუდა გოგლიჩიძე კავკასიის უნივერსიტეტის დეკანი ... 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eos dolor, 
                    excepturi dolores alias, adipisci reprehenderit temporibus 
                    odio facere explicabo voluptate sequi porro molestias similique 
                    impedit voluptatem totam sit omnis?
                </p>
            </div>

            <div className="activites_main">
                <h6 className="activites_title">Activites</h6>
                <div className="act-wrapper">
                    <ul className="activites_main_a">
                        <li>
                            <img src={img_1} alt="" />
                            <p>
                                <span>2018/05/24</span>
                                <br />
                                kiabara
                            </p>
                        </li>
                        <li>
                            <img src={img_2} alt="" />
                            <p>
                                <span>2019/09/90</span>
                                <br />
                                eseciyos
                            </p>
                        </li>
                        <li>
                            <img src={img_3} alt="" />
                            <p>
                                <span>2020/02/22</span>
                                <br />
                                asdasdasddasdasddasasd
                            </p>
                        </li>
                    </ul>
                    <ul className="activites_main_b">
                        <li>
                            <img src={img_4} alt="" />
                            <p>აქტივობა რომელიც იყო 2021</p>
                        </li>
                        <li>
                            <img src={img_5} alt="" />
                            <p>აქტივობა რომელიც იყო 2022</p>
                        </li>
                        <li>
                            <img src={img_6} alt="" />
                            <p>აქტივობა რომელიც იყო 2023</p>
                        </li>
                    </ul>
                </div>
                <div className="contacts_main">
                    <div className="gmail">
                        <p>aludagoglichidze@gmail.com</p>
                    </div>
                    <div className="phonenumber">
                        <p>(+995) 599 333 333</p>
                    </div>
                    <div className="socials">
                        <div className="inkdin">
                            <img src={linkedin_logo} alt="" />
                        </div>
                        <div className="facebook">
                            <img src={facebook_logo} alt="" />
                        </div>
                        <div className="instagram">
                            <img src={instagram_logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
