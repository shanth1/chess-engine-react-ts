import { Provider } from "react-redux";
import { store } from "../model/store";

export const withStore = (component: () => React.ReactNode) => () =>
    <Provider store={store}>{component()}</Provider>;
