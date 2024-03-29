import { withProviders } from "app/providers/compose";
import { GamePage } from "pages/GamePage";

const AppComponent = () => {
    return (
        <div>
            <GamePage />
        </div>
    );
};

export const App = withProviders(AppComponent);
