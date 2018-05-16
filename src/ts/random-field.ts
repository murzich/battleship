import FourDecker from "./four-decker";
import Grid from "./grid";
import render from "./render";
import Ship from "./ship";
import SingleDecker from "./single-decker";
import ThreeDecker from "./three-decker";
import TwoDecker from "./two-decker";
import Vector from "./vector";

export default function random(
    controlButtons: HTMLElement,
    battleGrid: Grid,
    battlefield: HTMLElement,
    fleet: Ship[],
    helpMessage: HTMLElement): void {
    //
    // Move to Ship module;
    // interface IShipConstructor {
    //     // amount: number;
    //     // name: string;
    //     // size: number;
    //     new (id: number, anchor: Vector, angle: number): Ship;
    // }
    const arrayOfShipClass: any[] = [
        FourDecker,
        ThreeDecker,
        TwoDecker,
        SingleDecker,
    ];
    // Take first class of ship and place it to field
    // Then if ships of that class ended, choose next class and do same
    // repeat
    // when ships ends, render current field
    //
    // TODO: move function to separate module 'fleet'
    function getCountOfShipByClass(classOfShip: any): number {
        let count: number = 0;
        for (let i = 0, length = fleet.length; i < length; i++) {
            if (fleet[i] instanceof classOfShip) { count++; }
        }
        return count;
    }
    function getRandomIndex(): number {
        return Math.floor(Math.random() * 100);
    }
    function getRandomRotation(): number {
        return 90 * Math.round(Math.random());
    }
    function tryToPlaceShipOnBattleGrid(shipClass: any, gridIndex: number, rotation: number): boolean {
        const ship = new shipClass(0, battleGrid.getVector(gridIndex), rotation);
        if (battleGrid.isAbleToPlace(ship.position)) {
            fleet.push(ship);
            battleGrid.placeShip(ship);
            return true;
        } else {
            return false;
        }
    }
    //
    function randomPlace(event: Event): void {
        const target: HTMLElement = event.target as HTMLElement;
        if (!(target.id === "random-button")) { return; }

        // or condition: while ( decker < arrayOfShipClass.length );

        for (let i = 0, decker = 0; fleet.length < 10 ; i++) {
            let boolResult: boolean = false;
            // TODO: Do not check amount on last ship in fleet, it causes a Bug if fleet already had ships
            if (getCountOfShipByClass(arrayOfShipClass[decker]) >= fleet[fleet.length - 1].amount) {
                decker++;
            }
            while (!boolResult) {
                boolResult = tryToPlaceShipOnBattleGrid(arrayOfShipClass[decker], getRandomIndex(), getRandomRotation());
                console.log("this position is not available, next try");
            }
        }
        render(battlefield, battleGrid);
        helpMessage.innerText = `Random position of ships`;

    }
    //
    controlButtons.addEventListener("click", randomPlace);
}
