import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
    console.log("card", props)
    return (
        <div className="card-game">
            <img src={props.image} alt="test" />
            <p>{props.name}</p>
            <Link to={`/game/${props.slug}`}>
                <i className="fas fa-chevron-down text-white"></i>
            </Link>
            <div></div>
            <div></div>
        </div>
    );
}
