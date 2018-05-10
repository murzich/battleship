import './style.css';
import createBattlefieldGrid from "./ts/gridDOM";
import Grid from "./ts/grid";

createBattlefieldGrid();

let battleGrid: Grid = new Grid(10, 10);

console.log(battleGrid);