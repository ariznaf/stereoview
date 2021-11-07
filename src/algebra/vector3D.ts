export class Vector3D {
    protected _x:number;
    protected _y:number;
    protected _z:number;

    /**
     * Initialize the vector components with given values.
     * If no parameters are passed, it creates a vertical unity vector  (0,0,1)
     * @param x
     * @param y 
     * @param z 
     */
    constructor(x:number=0,y:number=0,z:number=1) {
        this._x= x;
        this._y= y;
        this._z= z;
    }
    get x():number  {return this._x}
    get y():number {return this._y}
    get z():number {return this._z}
    /**
     * Changes the coordinates of the vector with the given coordinates (0,0,1) by default.
     * @param x 
     * @param y 
     * @param z 
     */
    changeCoords(x:number=0,y:number=0,z:number=1)
    {
        this._x= x;
        this._y= y;
        this._z= z;
    }
    /**
     * Returns de modulus (aka. length) of the vector
     */
    modulus():number {
        return( Math.sqrt(this._x*this._x+this._y*this._y+this.z*this._z));
    }
    /**
     * Normalizes the vector converting it  to a unit vector
     */
    normalize() {
        let m= this.modulus();
        this._x /= m;
        this._y /= m;
        this._z /= m;
        
    }
    /**
     * Calculates the scalar (dot) product of the vector by the given ventor this*v which returns a number
     * @param {Vector3D} v vector to multiply with.
     * @returns scalar product
     */
    dot(v:Vector3D):number {
        return( this._x*v._x + this._y*v._y + this._z*v._z);

    }
    /**
     * Calculates the do vectorial (cross) multiplication of the given vectors this x v which return another vector.
     * @param {Vector3D} v vector to multiply with
     * @returns {Vector3D} vector containing the dot product
     */
    cross(v:Vector3D):Vector3D {
        return new Vector3D(
            this._y*v._z - this._z*v._y
            ,
            this._z*v._x - this._x*v._z
            ,
            this._x*v._y - this._y*v._x
        );
    }

}
/**
 * Calculates the scalar (dot) product of the given vectors v1 v2 which returns a number
 * @param {Vector3D} v1 
 * @param {Vector3D} v2 
 * @returns scalar product
 */
export function dotProduct(v1:Vector3D,v2:Vector3D):number {
    return v1.dot(v2);
}

/**
 * Calculates the do vectorial (cross) multiplication of the given vectors v1 x v2 which return another vector.
 * @param {Vector3D} v1 
 * @param {Vector3D} v2 
 * @returns {Vector3D} vector containing the dot product
 */
 export function crossProduct(v1:Vector3D,v2:Vector3D):Vector3D {
    return v1.cross(v2);
}
