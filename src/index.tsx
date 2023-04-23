import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import { App } from "app";
import { board } from "shared/Game/board";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

console.log(board.castlingRights);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
