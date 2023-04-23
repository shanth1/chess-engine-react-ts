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

game1.makeMove(60, 62);
game1.makeMove(0, 1);
console.log(...game1.history);
console.log(game1.board.position);
game1.unmakeMove();
game1.unmakeMove();
console.log("unmake");
console.log(game1.board.position);
console.log(game1.history);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
