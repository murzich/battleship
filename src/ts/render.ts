import Grid from "./grid";

export default function render(field: HTMLElement, grid: Grid): void {
    const tempField: HTMLElement = document.createElement('DIV');
    tempField.innerHTML = field.innerHTML;
    grid.space.forEach( (_: any, i: number) => {
        tempField.children[i].classList.add('_ship');
    });
    field.innerHTML = tempField.innerHTML;
}