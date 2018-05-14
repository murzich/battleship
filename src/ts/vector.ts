export default class Vector {
    constructor(public x: number, public y: number) {};

    public getFromDirection(angle: number): Vector {
        switch (angle) {
            case 0:
                return new Vector(this.x + 1, this.y);
            case 90:
                return new Vector(this.x, this.y + 1);
            case 180:
                return new Vector(this. x - 1, this.y);
            case 270:
                return new Vector(this.x, this.y - 1);
            default:
                throw new Error('Vector.getFromDirection: Wrong angle.')
        }
    }
    get nearVectors(): Vector[] {
        let array: Vector[] = [];
        for (let i = 0, dx = -1, dy; dx < 2; i++) {
            dy = i % 3 - 1;
            if (dx === 0 && dy === 0) continue;
            array.push(new Vector(this.x + dx, this.y + dy));
            if (dy === 1) dx++;
        }
        return array;
    }
}
