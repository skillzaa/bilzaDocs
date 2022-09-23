import Bilza, { Ui, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.alwaysOn().grid(10, 10, hsl(0, 80, 20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240, 30, 10));
const title = bil.add(0, 15).text("Markers", hsl(120))
    .templ.hdg(1, 0).entryAni.topIn().exitAni.fadeOut();
const m1 = bil.alwaysOn().marker(50, 10, hsl(0), 6);
m1.x.animate(2, 3, 50, 10);
m1.y.animate(2, 3, 10, 50);
const m2 = bil.alwaysOn().marker(50, 20, hsl(60), 8);
m2.x.animate(3, 4, 50, 20);
m2.y.animate(3, 4, 20, 50);
const m3 = bil.alwaysOn().marker(50, 30, hsl(80), 10);
m3.x.animate(4, 5, 50, 30);
m3.y.animate(4, 5, 30, 50);
const m4 = bil.alwaysOn().marker(50, 40, hsl(120), 12);
m4.x.animate(5, 6, 50, 40);
m4.y.animate(5, 6, 40, 50);
const m5 = bil.alwaysOn().marker(50, 50, hsl(45), 14);
m5.x.animate(6, 7, 50, 50);
m5.y.animate(6, 7, 50, 50);
const m6 = bil.alwaysOn().marker(50, 60, hsl(180), 16);
m6.x.animate(7, 8, 50, 60);
m6.y.animate(7, 8, 60, 50);
const m7 = bil.alwaysOn().marker(50, 70, hsl(240), 18);
m7.x.animate(8, 9, 50, 70);
m7.y.animate(8, 9, 70, 50);
const m8 = bil.alwaysOn().marker(50, 80, hsl(300), 20);
m8.x.animate(9, 10, 50, 80);
m8.y.animate(9, 10, 80, 50);
const m9 = bil.alwaysOn().marker(50, 90, hsl(200), 22);
m9.x.animate(11, 12, 50, 90);
m9.y.animate(11, 12, 90, 50);
const ui = new Ui(bil);
bil.draw();
