import Ship from './ship';
import Vector from "./vector";

export default class SingleDecker extends Ship {
    name: string;
    id: number;
    constructor(id: number, anchor: Vector, angle: number) {
        super(4, 1, anchor, angle);
        this.name = "submarine";
        this.id = id;
    }
}