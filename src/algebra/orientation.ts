import * as Algebra from  "./vector3D";
export class Orientation extends Algebra.Vector3D {
    constructor(x:number=0,y:number=0,z:number=1) {
        super(x,y,z);
        super.normalize();
    }

    /**
     * Stablish the trend and plunge of the Orientation
     * @param {number} trend [0,2 PI] clockwise meassure from north
     * @param {numer} plunge  [0,PI/2] positive downwards
     */
    setTrendPlunge(trend:number,plunge:number) {
        let cosPlunge:number= Math.cos(plunge);
        this._z= Math.sin(plunge);
        this._x= cosPlunge * Math.cos(trend);
        this._y= cosPlunge * Math.sin(trend);
    }
    /**
     * Get the trend and plunge of the Orientation
     * @returns {[number,numnber]} returns an array [trend,plunge]
     */
    getTrendPlunge() {
        let trend:number= Math.atan2(this._y,this._x);
        let plunge:number= Math.atan(this._z/Math.sqrt(this._x*this._x+this._y*this._y));
        return [
            trend,
            plunge
        ]
    }

}
