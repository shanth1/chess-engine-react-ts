import { withProviders } from "app/providers";
import { GamePage } from "pages";

const App = () => {
    return (
        <div>
            <GamePage />
        </div>
    );
};

export default withProviders(App);
