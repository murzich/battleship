import Vector from './vector';
import Ship from "./ship";
import Gap from "./gap";

export default class Grid {
    width: number;
    height: number;
    space: (Ship | Gap)[];
    constructor(width: number = 10, height: number = 10) {
        this.width = width;
        this.height = height;
        this.space = new Array(width * height);
    }

    isInside(vector: Vector): boolean {
        return vector.x >= 0 && vector.x < this.width &&
               vector.y >= 0 && vector.y < this.height;
    }
    removeOutsideVectors(vectorArray: Vector[]): Vector[] {
        return vectorArray.filter(vector => this.isInside(vector));
    }
    getValue(vector: Vector): Ship | Gap {
        return this.space[vector.x + this.width * vector.y];
    }
    setValue(vector: Vector, value: Ship | Gap ) {
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
        return shipPosition.every(vector => {
            let value: any = this.getValue(vector);
            return this.isInside(vector)
                    && !(value instanceof Ship)
                    && !(value instanceof Gap);
        });
    }
    placeShip(ship: Ship): void {
        ship.position.forEach(vector => {
            this.setValue(vector, ship);
            this.addGap(vector, ship);
        });
    }
    addGap(vector: Vector, ship: Ship): void {
        this.removeOutsideVectors(vector.nearVectors)
            .forEach(vector => {
                let currentValue = this.getValue(vector);
                if (currentValue instanceof Ship) return;
                if (currentValue === undefined) {
                    this.setValue(vector, new Gap(ship));
                } else {
                    currentValue.addParent(ship);
                }
            })
    }
    resetSpace = (): void => {
        this.space.splice(0);
        this.space.length = this.width * this.height;
    }
}