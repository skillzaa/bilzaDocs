import Bilza, { Ui, CompFactory as cf, hsl} from "./src/bilza.js";

let bil = new Bilza("bilza", 70);

bil.background.color.set("#031363");

const comp = cf.particleSystem(20,hsl(0),20);
/**
 * By default padding = Non-Responsive 
 * This line will make paddings reactive i.e it will 
 * take in percentage rather than numbers.
 * This line should be placed immediately after creation
 */
comp.setRespPadding(true);

bil.insert.add(comp, 0, 20);

comp.align(1,1);
comp.x.set(50);
comp.y.set(50);

comp.width.set(5);

comp.showBackground.set(true);
comp.colorBackground.set( hsl(300));

comp.border.set(4);
comp.colorBorder.set( hsl(60) );

comp.paddingLeft.animate(2, 4, 0, 20);
comp.paddingRight.animate(5, 7, 0, 20);
comp.paddingTop.animate(8, 10, 0, 20);
comp.paddingBottom.animate(11,14, 0, 20);

const ui = new Ui(bil);
bil.draw();