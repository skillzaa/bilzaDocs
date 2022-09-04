import Bilza, { Ui, CompFactory as cf } from "../bilza.js";
let bil = new Bilza("bilza", 70);
bil.resizeCanvas(800, 640);
const fc = cf.frameCounter();
fc.goto(0, 70, 0);
bil.insert.alwaysOn(fc);
const pic = cf.pic("../images/ghosts.png", 100, 100);
bil.insert.add(pic, 0, 60);
const emoji = cf.spriteSheet("../images/ghosts.png", 95, 128, 6, 6);
emoji.border.set(2);
emoji.colorBorder.set("red");
emoji.xAlign = emoji.XAlignOpt.Mid;
emoji.yAlign = emoji.YAlignOpt.Mid;
emoji.xRotate = emoji.XAlignOpt.Mid;
emoji.yRotate = emoji.YAlignOpt.Mid;
emoji.leftExtraPix = 12;
emoji.goto(0, 50, 50);
emoji.gotoImage(0, 0, 0);
emoji.gotoImage(1, 0, 1);
bil.insert.add(emoji, 0, 60);
const ui = new Ui(bil);
bil.draw();