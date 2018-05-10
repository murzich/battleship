export default class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    };
    get cross(): object[] {
        return [
            new Vector(this.x + 1, this.y),
            new Vector(this.x - 1, this.y),
            new Vector(this.x, this.y + 1),
            new Vector(this.x, this.y - 1)
        ]
    }
}
