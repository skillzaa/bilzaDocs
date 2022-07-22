import { IComponent, Pack } from "../../typescript/bilza.js.js";
import RotateObj from "../../typescript/BaseComponent/60rotateObj.js.js";
export default class BaseComponent extends RotateObj implements IComponent {
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    drawBackground(p: Pack): void;
    drawBorder(p: Pack): void;
    preDraw(p: Pack): void;
    postDraw(p: Pack): void;
    contentY(): number;
    contentX(): number;
}
//# sourceMappingURL=00BaseComponent.d.ts.map