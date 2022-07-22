import { Pack, AniBoolean, AniNumber, BaseComponent } from "../../typescript/bilza.js.js";
export default class Circle extends BaseComponent {
    startAngle: AniNumber;
    endAngle: AniNumber;
    filled: AniBoolean;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map