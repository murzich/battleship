import Ship from './ship';
import Vector from "./vector";

export default class TwoDecker extends Ship {
    name: string;
    id: number;
    constructor(id: number, anchor: Vector, angle: number) {
        super(3, 2, anchor, angle);
        this.name = "destroyer";
        this.id = id;
    }
}