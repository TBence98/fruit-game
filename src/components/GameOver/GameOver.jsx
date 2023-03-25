import star from "../../assets/star.svg";
import classes from "./GameOver.module.css";

const GameOver = () => {
    return (
        <div className={classes.overlay}>
            <img src={star} alt="star" />
        </div>
    );
};

export default GameOver;
