import Pack from "../../typescript/pack/pack.js.js";
import BaseComponent from "../../typescript/BaseComponent/00BaseComponent.js.js";
export default class Background extends BaseComponent {
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=background.d.ts.map