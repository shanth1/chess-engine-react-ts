import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import { App } from "app";
import { board } from "shared/Game/board";
import { Game } from "shared/Game/Game";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

console.log(board.castlingRights);
const game1 = new Game(board);
console.log(game1.whitePieceIndices);
console.log(game1.blackPieceIndices);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
