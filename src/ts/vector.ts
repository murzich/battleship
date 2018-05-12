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
}
