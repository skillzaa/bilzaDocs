import Grid from "../../typescript/components/grid.js.js";
import Rect from "../../typescript/components/rect.js.js";
import FillRect from "../../typescript/components/fillRect.js.js";
import StaticGrid from "../../typescript/components/staticGrid.js.js";
import FrameCounter from "../../typescript/components/frameCounter.js.js";
import CircleParticles from "../../typescript/components/circleParticles.js.js";
import Text from "../../typescript/components/text.js.js";
import RawText from "../../typescript/components/rawText.js.js";
import Pic from "../../typescript/components/pic.js.js";
import Line from "../../typescript/components/line.js.js";
import Marker from "../../typescript/components/marker.js.js";
import Circle from "../../typescript/components/circle.js.js";
import Icon from "../../typescript/components/icon.js.js";
import Row from "../../typescript/container/row.js.js";
export default class CompFactory {
    static icon(code?: number, colorHax?: string): Icon;
    static circle(colorHax?: string): Circle;
    static marker(colorHax?: string): Marker;
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    static staticGrid(cellWidth?: number, cellHeight?: number, color?: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
    static circleParticles(count?: number, color?: string, framesToSkip?: number): CircleParticles;
    static text(content?: string, colorHax?: string): Text;
    static rawText(content?: string, colorHax?: string): RawText;
    static line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
    static row(incommingTextArray?: string): Row;
}
//# sourceMappingURL=compFactory.d.ts.map