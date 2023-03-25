import ScreenContainer from "../ScreenContainer/ScreenContainer";

import classes from "./ScreenContainers.module.css";

const ScreenContainers = ({ onScreenSelect, onImageSelect, screenDatas }) => {
    return (
        <div className={classes.screen_containers}>
            {screenDatas.map((screen, index) => (
                <ScreenContainer
                    onScreenSelect={() => onScreenSelect(index)}
                    onImageSelect={(id) => onImageSelect(id, index)}
                    screenDatas={screen}
                    key={index}
                />
            ))}
        </div>
    );
};

export default ScreenContainers;
