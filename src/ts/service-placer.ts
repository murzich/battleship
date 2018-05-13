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
        helpMessage.innerText = 'Choose ship!';
    }

    function getRotation(): number {
        const radios = document.getElementsByName('rotation') as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return parseInt(radios[i].value);
            }
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
            helpMessage.innerText = `You've chosen ${index} element as an anchor`;

            switch (decks) {
                case '4':
                    fleet.push(new FourDecker(0, battleGrid.getVector(index), getRotation()));
                    break;
                case '3':
                    fleet.push(new ThreeDecker(1, battleGrid.getVector(index), getRotation()));
                    break;
                case '2':
                    fleet.push(new TwoDecker(2, battleGrid.getVector(index), getRotation()));
                    break;
                case '1':
                    fleet.push(new SingleDecker(3, battleGrid.getVector(index), getRotation()));
                    break;
                default:
                    helpMessage.innerText = 'Something went wrong!';
            }
            battleGrid.placeShip(fleet[fleet.length - 1]);
            render(battlefield, battleGrid);
        }
    }
}

