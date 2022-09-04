import { CompFactory as cf, hsl, Scene } from "../bilza.js";
export default function testScene(startTime, endTime) {
    const sce = new Scene(startTime, endTime);
    const g = cf.grid();
    sce.push(g, sce.getStartTime() + 1, sce.getEndTime() - 3);
    const txt = cf.text("Text from scene", hsl(0));
    txt.fontSize.set(120);
    txt.setxy(30, 30);
    sce.push(txt, sce.getStartTime() + 2, sce.getEndTime() - 4);
    return sce;
}
