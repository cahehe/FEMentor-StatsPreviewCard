import Text from "./Text"
import image from "../imgs/desktop.jpg"
import "./Card.css"


const Card = () =>{
    return(
        <div className = "card">
            <Text/>
            <img src = {image} alt = ""/>
        </div>
    )
}

export default Card