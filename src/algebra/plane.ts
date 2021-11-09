import  * as Algebra from "./orientation.js";
export class Plane extends Algebra.Orientation {
    constructor(x:number=0 ,y:number=0,z:number=1) {
        super(x,y,z);
    }
    get pole():Algebra.Orientation {return this}
    set pole(v:Algebra.Orientation) {
        this.changeCoords(v.x,v.y,v.z);
    }

    setDipDipDir(dip:number,dipDir:number) {
        this._z= Math.cos(dip);
        let sinDip= Math.sin(dip);
        this._x= -Math.cos(dipDir)*sinDip;
        this._y= -Math.sin(dipDir)*sinDip;
    }
    getDipDipDir():Array<number>{
        let dip= Math.atan(Math.sqrt(this._x*this._x+this._y*this._y)/this._z);
        let dipDir= Math.atan2(-this._y,-this._x);
        return [dip,dipDir];

    }
}