import Bilza, { Ui, hsl, Scenes } from "../bilza.js";
let bil = new Bilza("bilza", 70);
const themeColorNumber = 0;
bil.alwaysOn().grid(10, 10, hsl(themeColorNumber, 80, 20));
bil.alwaysOn().frameCounter(themeColorNumber);
bil.background.color.set(hsl(themeColorNumber, 100, 10));
const slide = Scenes.hdg1bp(0, 10, themeColorNumber, "This is the Main Title", "The Bullet point # 01", 2, "The footnote", 6, 25);
bil.addScene(slide);
const ui = new Ui(bil);
bil.draw();
