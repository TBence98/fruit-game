import { useState, useEffect } from "react";

import ScreenContainers from "../ScreemContainers/ScreenContainers";
import Pool from "../Pool/Pool";
import GameOver from "../GameOver/GameOver";
import { getRandomFruits } from "../../utils/getRandomFruits";
import { createPoolDatas } from "../../utils/createPoolDatas";

import classes from "./FruitGame.module.css";

const randomFruits = getRandomFruits(6);

const FruitGame = () => {
    const [poolDatas, setPoolDatas] = useState(createPoolDatas(randomFruits));
    // each array in the screenDatas array represent a screen from left to right
    const [screenDatas, setScreenDatas] = useState([[], [], []]);
    const [selectedFruit, setSelectedFruit] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (isGameFinished()) {
            setIsGameOver(true);
        }
    }, [screenDatas]);

    function groupSelectHandler(id) {
        const selectedIndex = poolDatas.findIndex(
            (fruitData) => fruitData.id === id
        );
        const selectedFruitGroup = { ...poolDatas[selectedIndex] };

        // to make sure the user can't select an inactive fruit
        if (selectedFruitGroup.isActiveInPool) {
            /* remove the selected state from the screen fruit in case it was selected
            in the screen */
            const updatedScreenDatas = screenDatas.map((screenData) =>
                screenData.map((imageData) => ({
                    ...imageData,
                    isSelected: false,
                }))
            );

            /* add the selected state to the proper fruit group and remove it from 
            the previously selected one if it was selected in the pool*/
            const updatedPoolDatas = poolDatas.map((poolData, index) =>
                index === selectedIndex
                    ? { ...poolData, isSelected: true }
                    : { ...poolData, isSelected: false }
            );

            setSelectedFruit(selectedFruitGroup.id);
            setPoolDatas(updatedPoolDatas);
            setScreenDatas(updatedScreenDatas);
        }
    }

    function screenSelectHandler(selectedScreenIndex) {
        if (selectedFruit && screenDatas[selectedScreenIndex].length < 2) {
            /* we need to place the appropriate image to the selected screen */
            const screenDatasCopy = screenDatas.map((screenData) =>
                screenData.filter((imageData) => imageData.id !== selectedFruit)
            );

            const image = randomFruits.find(
                (fruit) => fruit.id === selectedFruit
            ).screenImage;

            screenDatasCopy[selectedScreenIndex].push({
                id: selectedFruit,
                image,
                isSelected: false,
            });

            /* if the program hit these lines it means that the selectedFruit 
            was successfully placed so we have to remove the selected and active state
            from the fruitGroup*/
            const updatedPoolDatas = poolDatas.map((poolData) => {
                return poolData.id === selectedFruit
                    ? { ...poolData, isSelected: false, isActiveInPool: false }
                    : { ...poolData, isSelected: false };
            });

            setScreenDatas(screenDatasCopy);
            setPoolDatas(updatedPoolDatas);
            setSelectedFruit("");
        }
    }

    function screenImageSelectHandler(selectedImageId) {
        /* if there was a previously selected fruit in the pool, we have to remove the 
        the selected state from it*/
        if (selectedFruit) {
            const updatedPoolDatas = poolDatas.map((poolData) => ({
                ...poolData,
                isSelected: false,
            }));

            setPoolDatas(updatedPoolDatas);
        }

        /* add the selected state to the image */
        const updatedScreenDatas = screenDatas.map((screenData) =>
            screenData.map((imageData) =>
                imageData.id === selectedImageId
                    ? { ...imageData, isSelected: true }
                    : { ...imageData, isSelected: false }
            )
        );

        setScreenDatas(updatedScreenDatas);
        setSelectedFruit(selectedImageId);
    }

    function isGameFinished() {
        return screenDatas.every((screen) => screen.length === 2);
    }

    return (
        <>
            {isGameOver ? <GameOver /> : null}
            <div className={classes.game_container}>
                <ScreenContainers
                    onScreenSelect={screenSelectHandler}
                    onImageSelect={screenImageSelectHandler}
                    screenDatas={screenDatas}
                />
                <Pool poolDatas={poolDatas} onSelect={groupSelectHandler} />
            </div>
        </>
    );
};

export default FruitGame;
