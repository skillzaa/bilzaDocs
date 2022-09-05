import Bilza, { Ui, CompFactory as cf, hsl} from "./src/bilza.js";

let bil = new Bilza("bilza", 70);

const grid = cf.grid(10,10,"grey");
bil.insert.alwaysOn(grid);
//----------------------------
//---Keep first comp x and y responsive which it is by default
const compResp= getComp("green");
compResp.x.set(0);
compResp.y.set(30);
bil.insert.add(compResp,0,20);

//---Keep second comp x and y Non-responsive
const compNonResp= getComp("red");
//--This line will replace the responsive x and y 
//- of the comp with new x and y which are non-responsive
compNonResp.setRespLoc(false);
compNonResp.x.set(0);
compNonResp.y.set(30);
bil.insert.add(compNonResp,0,20);

//---now lets animate both of them to 100

compResp.x.animate(2,10,0,90);
compNonResp.x.animate(2,10,0,90);

const ui = new Ui(bil);
bil.draw();


function getComp(color){
const comp = cf.fillRect(color);

comp.width.set(10);
comp.height.set(10);

return comp;
}
