import "../Style/Main-Style.css"
import teming from "../assets/img_1.jpg"

function Main(){
    return(
        <div className="main-wrapper">
            <img src={teming} alt="image" />
            <p className="tags">kiara,kiki</p>
            <p className="tags">fbi open the door</p>
            <p className="autor">by me</p>
        </div>
    )
}

export default Main