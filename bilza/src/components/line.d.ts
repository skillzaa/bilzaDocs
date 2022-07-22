import { Pack, BaseComponent, AniNumber } from "../../typescript/bilza.js.js";
import AniNoPerc from "../../typescript/animations/aniNoPerc/AniNoPerc.js.js";
export default class Line extends BaseComponent {
    x2: AniNoPerc;
    y2: AniNoPerc;
    lineWidth: AniNumber;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map