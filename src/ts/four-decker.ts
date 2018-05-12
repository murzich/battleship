import Ship from './ship';
import Vector from "./vector";

export default class FourDecker extends Ship {
    name: string;
    id: number;
    constructor(id: number, anchor: Vector, angle: number) {
        super(1, 4, anchor, angle);
        this.name = 'battleship';
        this.id = id;
    }
}