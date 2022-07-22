import { Pack } from "../../typescript/bilza.js.js";
import BaseComponent from "../../typescript/BaseComponent/00BaseComponent.js.js";
import RawText from "../../typescript/components/rawText.js.js";
export default class Row extends BaseComponent {
    textArray: RawText[];
    private incommingTextArray;
    private x_local;
    constructor(incommingTextArray?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    contentWidth(): number;
    contentHeight(): number;
    setFontSize(fontSize: number): void;
    setFontColor(fontColor: string): void;
    getCell(column: number): RawText;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=row.d.ts.map