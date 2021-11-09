import * as Algebra  from "./algebra/index.js";
console.log("en main.ts");
var joint= new Algebra.Plane(0,0,1);

function onOrientationChanged() {
    console.log("en onOrientationChanged");
    let elem:HTMLInputElement= <HTMLInputElement> document.getElementById("dip");
    let dip:number= parseFloat(elem.value)*Math.PI/180;
    elem= <HTMLInputElement> document.getElementById("dipDir");
    let dipDir= parseFloat(elem.value)*Math.PI/180;
    joint.setDipDipDir(dip,dipDir);
    document.getElementById("infoBar")!.innerHTML= "<${joint.x},${joint.y},${joint.z}>";

}
(<HTMLInputElement>document.getElementById("dip")!).onchange= onOrientationChanged;
(<HTMLInputElement>document.getElementById("dipDir")!).onchange= onOrientationChanged;
