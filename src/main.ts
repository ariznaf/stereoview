import * as Algebra  from "./algebra/all";
console.log("en main()");
let joint= new Algebra.Plane(0,0,1);
document.getElementById("inforBar")!.innerHTML= "en main";

function onOrientationChanged() {
    console.log("en onOrientationChanged");
    let elem:HTMLInputElement= <HTMLInputElement> document.getElementById("dip");
    let dip:number= parseFloat(elem.value)*Math.PI/180;
    elem= <HTMLInputElement> document.getElementById("dipDir");
    let dipDir= parseFloat(elem.value)*Math.PI/180;
    joint.setDipDipDir(dip,dipDir);
    document.getElementById("infoBar")!.innerHTML= "<${joint.x},${joint.y},${joint.z}>";

}