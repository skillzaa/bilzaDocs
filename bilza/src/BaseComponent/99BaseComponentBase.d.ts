import { DrawLayer, AniBoolean, AniNumber, AniNoPerc, AniColor } from "../../typescript/bilza.js.js";
import Style from "../../typescript/design/style.js.js";
import { XAlignOpt } from "../../typescript/BaseComponent/designBC/xAlignOpt.js.js";
import { YAlignOpt } from "../../typescript/BaseComponent/designBC/yAlignOpt.js.js";
export default class BaseComponentBase {
    xAlign: XAlignOpt;
    yAlign: YAlignOpt;
    xRotate: XAlignOpt;
    yRotate: YAlignOpt;
    readonly XAlignOpt: typeof XAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
    readonly id: string;
    responsiveCoordinates: boolean;
    responsivePadding: boolean;
    responsiveDims: boolean;
    interactive: boolean;
    drawLayer: DrawLayer;
    style: Style;
    alwaysOn: boolean;
    version: string;
    visible: AniBoolean;
    rotation: AniNumber;
    opacity: AniNumber;
    color: AniColor;
    width: AniNumber;
    height: AniNumber;
    selected: boolean;
    border: AniNumber;
    paddingTop: AniNoPerc;
    paddingBottom: AniNoPerc;
    paddingRight: AniNoPerc;
    paddingLeft: AniNoPerc;
    x: AniNoPerc;
    y: AniNoPerc;
    colorBackground: AniColor;
    colorBorder: AniColor;
    showBackground: AniBoolean;
    canvasWidth: number | null;
    canvasHeight: number | null;
    constructor();
}
//# sourceMappingURL=99BaseComponentBase.d.ts.map