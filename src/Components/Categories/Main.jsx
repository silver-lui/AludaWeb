import "../../Style/Main-Style.css"
import teming from "../../assets/img_1.jpg"

function Main() {
    return (
        <div className="main-wrapper">
            <div className="paragrap-wrapper">
                <p className="tags">kiara,kiki</p>
                <p className="title">fbi open the door</p>
                <p className="autor">by me</p>
            </div>
            <img src={teming} alt="image" />
        </div>
    )
}

export default Main