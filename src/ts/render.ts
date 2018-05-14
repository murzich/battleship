import Grid from "./grid";
import Gap from "./gap";
import Ship from "./ship";

export default function render(field: HTMLElement, grid: Grid): void {
    const tempField: HTMLElement = document.createElement('DIV');
    tempField.innerHTML = field.innerHTML;
    grid.space.forEach( (value: Ship | Gap, i: number) => {
        let target: HTMLElement = tempField.children[i] as HTMLElement;
        if (value instanceof Ship) {
            target.classList.add('_ship');
        } else if (value instanceof Gap) {
            target.classList.add('_gap');
        }
    });
    field.innerHTML = tempField.innerHTML;
}