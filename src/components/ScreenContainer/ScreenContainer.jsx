import classes from "./ScreenContainer.module.css";

const ScreenContainer = ({ onScreenSelect, onImageSelect, screenDatas }) => {
    function imageSelectHandler(event, id) {
        event.stopPropagation();
        onImageSelect(id);
    }

    return (
        <div className={classes.screen_container} onClick={onScreenSelect}>
            {screenDatas.map((fruit) => (
                <div
                    key={fruit.id}
                    className={`${classes.image_container} ${
                        fruit.isSelected
                            ? classes["image_container--selected"]
                            : ""
                    }`}
                    onClick={(event) => imageSelectHandler(event, fruit.id)}
                >
                    {fruit.image}
                </div>
            ))}
        </div>
    );
};

export default ScreenContainer;
