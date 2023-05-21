import styles from "./styles.module.css";

interface IButtonProps {
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ onClick, Icon }) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {<Icon />}
        </div>
    );
};
