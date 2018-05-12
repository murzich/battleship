export default function createBattlefieldGrid (className: string): HTMLElement {
    let battlefield: HTMLElement = document.createElement('DIV');
    battlefield.className = className;
    for (let i = 0; i < 100; i++) {
        const cell: HTMLElement = document.createElement('DIV');
        cell.className = `${className}__cell`;
        battlefield.appendChild(cell);
    }
    return battlefield;
}
