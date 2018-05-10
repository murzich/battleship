export default function createBattlefieldGrid () : void {
    const battlefield = document.querySelector('.battlefield');
    let i: number = 0;
    while (i < 100) {
        const cell: Element = document.createElement("DIV");
        cell.classList.add("battlefield__cell");
        battlefield.appendChild(cell);
        i++;
    }
}
