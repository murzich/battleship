import Ship from './ship';
import Vector from "./vector";

export default class ThreeDecker extends Ship {
    name: string;
    id: number;
    constructor(id: number, anchor: Vector, angle: number) {
        super(2, 3, anchor, angle);
        this.name = "cruiser";
        this.id = id;
    }
}