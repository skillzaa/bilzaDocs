import { Pack, BaseComponent, AniNumber } from "../../typescript/bilza.js.js";
export default class Rect extends BaseComponent {
    lineWidth: AniNumber;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    contentWidth(): number;
    contentHeight(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map