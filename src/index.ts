import './style.css';
import Grid from "./ts/grid";
import createBattlefieldGrid from "./ts/gridDOM";
import random from "./ts/random-field";
import addShipByButtonListener from "./ts/service-placer";
import Ship from "./ts/ship";

const helpMessage: HTMLElement = document.querySelector('.help-message');
const controlButtons: HTMLElement = document.querySelector('.control');
const battlefield: HTMLElement = document.querySelector('.battlefield');
const battleGrid: Grid = new Grid(10, 10);
const fleet: Ship[] = [];

helpMessage.innerText = 'Choose ship!';
battlefield.innerHTML = createBattlefieldGrid('battlefield').innerHTML;

addShipByButtonListener(controlButtons, battleGrid, battlefield, fleet, helpMessage);

random(controlButtons, battleGrid, battlefield, fleet, helpMessage);
