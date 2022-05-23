export class Vector<A> {

    constructor(private x: A, private y: A, private z: A) {
    }

    getX(): A {
        return this.x;
    }

    getY(): A {
        return this.y;
    }

    getZ(): A {
        return this.z;
    }

}