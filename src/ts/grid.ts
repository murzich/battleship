import Vector from './vector';

export default class Grid {
    width: number;
    height: number;
    space: Array<number | string | undefined>;
    constructor(width: number = 10, height: number = 10) {
        this.width = width;
        this.height = height;
        this.space = new Array(width * height);
    }

    isInside(vector: Vector) : boolean {
        return vector.x >= 0 && vector.x < this.width &&
               vector.y >= 0 && vector.y < this.height;
    }
    getValue(vector: Vector) : number | string | undefined {
        return this.space[vector.x + this.width * vector.y];
    }
    setValue(vector: Vector, value: number | string | undefined ) {
        this.space[vector.x + this.width * vector.y] = value;
    }
    // clearSpace() : void {
    //     this.space = this.space.fill(0);
    // }
    getVector(index: number) : Vector {
        return new Vector( index % this.width, Math.floor(index / this.width));
    }
    getVectorsWithValue(value: number | string | undefined): Array<object> {
        let vectorsArray: Array<object> = [];
        this.space.forEach((element: number | string | undefined, index: number ) => {
            if (element === value) {
                vectorsArray.push(this.getVector(index));
            }
        });
        return vectorsArray;
    }
}