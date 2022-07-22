import { LineCapStyle } from "../../typescript/design/lineCapStyle.js.js";
import { FontFamily } from "../../typescript/design/fontFamily.js.js";
export default class Style {
    fontSize: number;
    fontFamily: FontFamily;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    opacity: number;
    lineCap: LineCapStyle;
    lineDash: number[];
    constructor();
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map