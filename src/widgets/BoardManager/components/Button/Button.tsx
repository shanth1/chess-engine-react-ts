import { ActionCreator } from "redux";
import { useAppDispatch } from "shared/hooks";
import styles from "./styles.module.css";

interface IButtonProps {
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    action?: ActionCreator<any>;
}

export const Button: React.FC<IButtonProps> = ({ Icon, action }) => {
    const dispatch: AppDispatch = useAppDispatch();

    const onClick = () => {
        if (action) dispatch(action());
    };

    return (
        <div className={styles.button} onClick={onClick}>
            {<Icon />}
        </div>
    );
};
