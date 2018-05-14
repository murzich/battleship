import Grid from "./grid";
import Ship from "./ship";
import SingleDecker from "./single-decker";
import TwoDecker from "./two-decker";
import ThreeDecker from "./three-decker";
import FourDecker from "./four-decker";
import createBattlefieldGrid from "./gridDOM";
import render from "./render";

export default function addShipByButtonListener(
    controlButtons: HTMLElement,
    battleGrid: Grid,
    battlefield: HTMLElement,
    fleet: Ship[],
    helpMessage: HTMLElement): void {

    controlButtons.addEventListener('click', addShip);

    function reset(): void {
        fleet.length = 0;
        battleGrid.resetSpace();
        battlefield.innerHTML = createBattlefieldGrid('battlefield').innerHTML;
        [].forEach.call(controlButtons.querySelectorAll('[disabled]'),
            (inputElement: HTMLInputElement) => {inputElement.disabled = false});
        helpMessage.innerText = 'Field reset. Choose ship by pressing buttons.';
    }

    function getRotation(): number {
        const radios = document.getElementsByName('rotation') as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return parseInt(radios[i].value);
            }
        }
    }

    function getCountOfShipByClass(classOfShip: Function, fleet: Ship[]): number {
        let count: number = 0;
        for (let i = 0, length = fleet.length; i < length; i++) {
            if (fleet[i] instanceof classOfShip) count++;
        }
        return count;
    }
    function getCountOfShip(ship: Ship, fleet: Ship[]): number {
        let count: number = 0;
        for (let i = 0, length = fleet.length; i < length; i++) {
            if (fleet[i].size === ship.size) count++;
        }
        return count;
    }

    function disableButtons(lastShipInFleet: Ship, fleet: Ship[]): void {
        if (lastShipInFleet.amount <= getCountOfShip(lastShipInFleet, fleet)) {
            console.log('There aren\'t more ships with that class!');
            (document.querySelector(`button[data-decks="${lastShipInFleet.size}"`) as HTMLInputElement)
                .disabled = true;
            helpMessage.innerText = `You've placed all available ${lastShipInFleet.size}-decker ships`;
        }
    }

    // TODO: refactor with proper shipClass type;
    function tryToPlaceShipOnBattleGrid(shipClass: any, index: number): void {
        let ship = new shipClass(0, battleGrid.getVector(index), getRotation());
        if (battleGrid.isAbleToPlace(ship.position)) {
            fleet.push(ship);
        } else {
            throw 'You can\'t put this ship there. Chose ship again';
        }
    }


// TODO: Refactor with {Promise}
    function addShip(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        const decks: string = target.dataset.decks;
        if (!target.classList.contains('control__button')) return;

        if (decks === 'reset') {
            reset();
            return;
        }

        helpMessage.innerText = `Place ship with ${decks} decks on field`;

        battlefield.addEventListener('click', placeShipOnField, {once: true});

        function placeShipOnField(e: Event): void {
            const cell: HTMLElement = e.target as HTMLElement;
            if (!cell.classList.contains('battlefield__cell')) return;
            // HTMLCollection 'children' doesn't have '.indexOf()' method
            let index: number = [].indexOf.call(cell.parentElement.children, cell);
            let lastShipInFleet: Ship;
            helpMessage.innerText = `You've chosen ${index} element as an anchor`;

            try {
                switch (decks) {
                    case '4':
                        tryToPlaceShipOnBattleGrid(FourDecker,index);
                        break;
                    case '3':
                        tryToPlaceShipOnBattleGrid(ThreeDecker,index);
                        break;
                    case '2':
                        tryToPlaceShipOnBattleGrid(TwoDecker,index);
                        break;
                    case '1':
                        tryToPlaceShipOnBattleGrid(SingleDecker,index);
                        break;
                    default:
                        throw 'Something went wrong!';
                }
                lastShipInFleet = fleet[fleet.length - 1];
                battleGrid.placeShip(lastShipInFleet);
                disableButtons(lastShipInFleet, fleet);
                render(battlefield, battleGrid);
            }
            catch (message) {
                helpMessage.innerText = message;
            }
        }
    }
}

