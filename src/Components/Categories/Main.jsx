import "../../Style/Main-Style.css";
import img_1 from "../../assets/news/img_1.jpg";
import img_2 from "../../assets/news/img_2.jpg";
import img_3 from "../../assets/news/img_3.jpg";
import img_4 from "../../assets/news/img_4.jpg";
import img_5 from "../../assets/news/img_5.jpg";

function Main() {
    const images = [img_1, img_2, img_3, img_4, img_5];
    
    let teming = img_1;

    const actcir = document.getElementsByClassName("cir");
    
    let mtvleli = 0;
    
    function MainNews(prop) {
        let mainnews =  document.getElementById("MN");
        const removeActCir = document.getElementsByClassName("active-cir");
        removeActCir[0].classList.remove("active-cir");
        if (prop == "R") {
            mtvleli++;
            if (mtvleli > 4) {
                mtvleli = 0;
            }
            console.log(mtvleli + "      do what you do");
        } else if (prop == "L") {
            --mtvleli;
            if (mtvleli < 0) {
                mtvleli = 4;
            }
            console.log(mtvleli + "      do what you do");
        }
        actcir[mtvleli].classList.add("active-cir");
        mainnews.src = images[mtvleli];
        console.log(actcir[mtvleli]);
        console.log("kiki");
        console.log(images[mtvleli]);
        console.log(mainnews)
    }


    
    return (
        <div className="cont-wrapper">
            <div className="arr left" onClick={() => MainNews("L")}>
                &#10094;
            </div>
            <div className="main-wrapper">
                <div className="paragrap-wrapper">
                    <div className="text-warpper">
                        <p className="tags">politics, georgia</p>
                        <p className="title">
                            Protest of Georgians against the Russian law
                        </p>
                        <p className="autor">by me</p>
                    </div>
                </div>
                <img src={teming} alt="image" id="MN" />
                <div className="cir-wrapper">
                    <div className="c-w-2">
                        <div className="cir cir-1 active-cir"></div>
                        <div className="cir cir-2"></div>
                        <div className="cir cir-3"></div>
                        <div className="cir cir-4"></div>
                        <div className="cir cir-5"></div>
                    </div>
                </div>
            </div>
            <div className="arr right" onClick={() => MainNews("R")}>
                &#10095;
            </div>
        </div>
    );
}

export default Main;
