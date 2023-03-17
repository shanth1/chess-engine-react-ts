import { Button } from "shared";
// import styles from "./styles.module.css";

const onClick = () => {
    console.log("flip");
};

export const FlipBoard = () => {
    return <Button text="Flip" onClick={onClick}></Button>;
};
