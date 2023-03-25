import appleScreen from "../assets/apple_1.png";
import appleGroup from "../assets/apple_group.png";
import bananaScreen from "../assets/banana_1.png";
import bananaGroup from "../assets/banana_group.png";
import cherryScreen from "../assets/cherry_1.png";
import cherryGroup from "../assets/cherry_group.png";
import lemonScreen from "../assets/lemon_1.png";
import lemonGroup from "../assets/lemon_group.png";
import melonScreen from "../assets/melon_1.png";
import melonGroup from "../assets/melon_group.png";
import orangeScreen from "../assets/orange_1.png";
import orangeGroup from "../assets/orange_group.png";
import peachScreen from "../assets/peach_1.png";
import peachGroup from "../assets/peach_group.png";
import pineappleScreen from "../assets/pineapple_1.png";
import pineappleGroup from "../assets/pineapple_group.png";
import plumScreen from "../assets/plum_1.png";
import plumGroup from "../assets/plum_group.png";
import strawberryScreen from "../assets/strawberry_1.png";
import strawberryGroup from "../assets/strawberry_group.png";

function createFruitImageData(id, groupImage, screenImage) {
    return {
        id,
        groupImage,
        screenImage,
    };
}

const fruitImagesDatas = [
    createFruitImageData(
        "apple",
        <img src={appleGroup} alt="apple" />,
        <img src={appleScreen} alt="apple" />
    ),
    createFruitImageData(
        "banana",
        <img src={bananaGroup} alt="banana" />,
        <img src={bananaScreen} alt="banana" />
    ),
    createFruitImageData(
        "cherry",
        <img src={cherryGroup} alt="cherry" />,
        <img src={cherryScreen} alt="cherry" />
    ),
    createFruitImageData(
        "lemon",
        <img src={lemonGroup} alt="lemon" />,
        <img src={lemonScreen} alt="lemon" />
    ),
    createFruitImageData(
        "melon",
        <img src={melonGroup} alt="melon" />,
        <img src={melonScreen} alt="melon" />
    ),
    createFruitImageData(
        "orange",
        <img src={orangeGroup} alt="orange" />,
        <img src={orangeScreen} alt="orange" />
    ),
    createFruitImageData(
        "peach",
        <img src={peachGroup} alt="peach" />,
        <img src={peachScreen} alt="peach" />
    ),
    createFruitImageData(
        "pineapple",
        <img src={pineappleGroup} alt="pineapple" />,
        <img src={pineappleScreen} alt="pineapple" />
    ),
    createFruitImageData(
        "plum",
        <img src={plumGroup} alt="plum" />,
        <img src={plumScreen} alt="plum" />
    ),
    createFruitImageData(
        "strawberry",
        <img src={strawberryGroup} alt="strawberry" />,
        <img src={strawberryScreen} alt="strawberry" />
    ),
];

export function getRandomFruits(amount) {
    const randomFruits = [];

    while (randomFruits.length < amount) {
        const randomIndex = Math.floor(Math.random() * fruitImagesDatas.length);
        const randomFruitImageData = { ...fruitImagesDatas[randomIndex] };
        const isAlreadySelected = randomFruits.some(
            (fruitData) => fruitData.id === randomFruitImageData.id
        );

        if (!isAlreadySelected) {
            randomFruits.push(randomFruitImageData);
        }
    }

    return randomFruits;
}
