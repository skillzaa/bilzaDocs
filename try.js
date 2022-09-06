import Bilza, { Ui, CompFactory as cf, hsl} from "./src/bilza.js";

let bil = new Bilza("bilza", 70);

bil.background.color.set("#031363");

const txt = cf.text("Text Padding Demo", "#ffff00");
/**
 * By default padding = Non-Responsive 
 * This line will make paddings reactive i.e it will 
 * take in percentage rather than numbers.
 * This line should be placed immediately after creation
 */
txt.setRespPadding(true);

bil.insert.add(txt, 0, 20);

txt.align(1,1);
txt.x.set(50);
txt.y.set(50);

txt.fitToWidth.set(true);
txt.width.set(50);

txt.showBackground.set(true);
txt.colorBackground.set("#000000");

txt.border.set(4);
txt.colorBorder.set("red");

txt.paddingLeft.animate(2, 4, 0, 20);
txt.paddingRight.animate(5, 7, 0, 20);
txt.paddingTop.animate(8, 10, 0, 20);
txt.paddingBottom.animate(11,14, 0, 20);

const ui = new Ui(bil);
bil.draw();