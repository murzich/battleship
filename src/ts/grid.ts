import Vector from './vector';
import Ship from "./ship";

export default class Grid {
    width: number;
    height: number;
    space: Ship[];
    constructor(width: number = 10, height: number = 10) {
        this.width = width;
        this.height = height;
        this.space = new Array(width * height);
    }

    isInside(vector: Vector): boolean {
        return vector.x >= 0 && vector.x < this.width &&
               vector.y >= 0 && vector.y < this.height;
    }
    getValue(vector: Vector): Ship {
        return this.space[vector.x + this.width * vector.y];
    }
    setValue(vector: Vector, value: Ship ) {
        this.space[vector.x + this.width * vector.y] = value;
    }
    getVector(index: number) : Vector {
        return new Vector( index % this.width, Math.floor(index / this.width));
    }
    getVectorsWithValue(value: Ship): Vector[] {
        let vectorsArray: Vector[] = [];
        this.space.forEach((element: Ship, index: number ) => {
            if (element === value) {
                vectorsArray.push(this.getVector(index));
            }
        });
        return vectorsArray;
    }
    // TODO: use for checking ability to place Ship on field;
    isAbleToPlace(shipPosition: Vector[]): boolean {
        return shipPosition.every(vector => this.isInside(vector));
    }
    placeShip(ship: Ship) {
        ship.position.forEach(vector => {
            this.setValue(vector, ship);
        })
    }
    resetSpace = (): void => {
        this.space.splice(0);
        this.space.length = this.width * this.height;
    }
}