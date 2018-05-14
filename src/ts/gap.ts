import Ship from "./ship";

export default class Gap {
    private _parents: Ship[];
    constructor(private ship: Ship) {
        this._parents = [ship];
    }
    get parents(): Ship[] {
        return this._parents;
    }
    addParent(ship: Ship): Ship[] {
        if (this._parents.indexOf(ship) !== -1) return this._parents;
        this._parents.push(ship);
        return this._parents;
    }
    removeParent(ship: Ship): boolean {
        let index: number = this._parents.indexOf(ship);
        if (index === -1) return false;
        this._parents.splice(index, 1);
        return true;
    }
}