import Bilza, { Ui, hsl, Scenes } from "../bilza.js";
let bil = new Bilza("bilza", 70);
const themeColorNumber = 240;
bil.alwaysOn().grid(10, 10, hsl(themeColorNumber, 80, 80));
bil.alwaysOn().frameCounter(themeColorNumber);
bil.background.color.set(hsl(themeColorNumber, 100, 10));
const s = Scenes.hdg3bp(2, 20, themeColorNumber, "The Title", "This is First Bullet Point", 2, "This is Second Bullet Point", 4, "The Third and final Bullet Point", 6, "This is a foot note", 1);
bil.addScene(s);
const ui = new Ui(bil);
bil.draw();