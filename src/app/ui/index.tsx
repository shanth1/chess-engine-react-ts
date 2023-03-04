import { withProviders } from "app/providers";
import { GamePage } from "pages";

const AppComponent = () => {
    return (
        <div>
            <GamePage />
        </div>
    );
};

export const App = withProviders(AppComponent);
