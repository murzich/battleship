import Vector from "./vector";

export default class Ship {
    position: Vector[];
    constructor(public amount: number,
                public size: number,
                public anchor: Vector,
                public angle: number = 0) {
        this.position = this._getPosition(this.anchor, this.angle);
    }

    private _getPosition = (anchor: Vector, angle: number): Vector[] => {
        let vectorArray = [anchor];
        for (let i = 0; i < this.size - 1; i++) {
            vectorArray.push(vectorArray[i].getFromDirection(angle))
        }
        return vectorArray;
    };
}