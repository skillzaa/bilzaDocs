import { AniNumber, } from "../../animationModule/animations.js";
import BaseSpriteSheet from "./BaseSpriteSheet.js";
export default class SpriteSheet extends BaseSpriteSheet {
    constructor(imgUrl, iconWidth, iconHeight, totalColumns, totalRows) {
        super(imgUrl);
        this.totalColumns = totalColumns;
        this.totalRows = totalRows;
        this.iconWidth = iconWidth;
        this.iconHeight = iconHeight;
        this.width.set(this.iconWidth);
        this.height.set(this.iconHeight);
        this.row = new AniNumber(0);
        this.column = new AniNumber(0);
    }
    update(msDelta, p) {
        this.row.update(msDelta);
        this.column.update(msDelta);
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        p.drawImageSrcDest(this.img, (this.leftExtraPix + (this.column.value() * this.iconWidth)), (this.topExtraPix + (this.row.value() * this.iconHeight)), this.iconWidth, this.iconHeight, this.contentX(), this.contentY(), this.width.value(), this.height.value());
        this.postDraw(p);
        return true;
    }
    gotoSprite(atFrame, row, column) {
        if (row > this.totalRows || column > this.totalColumns) {
            console.info(`the value of row (${row}) or column (${column}) exceeds total rows (${this.totalRows}) or total columns (${this.totalColumns})`);
            return;
        }
        this.row.goto(atFrame, row);
        this.column.goto(atFrame, column);
    }
    gotoSpriteName(atFrame, imageName) {
        for (let i = 0; i < this.imagesList.length; i++) {
            if (this.imagesList[i].name == imageName) {
                this.column.goto(atFrame, this.imagesList[i].column);
                this.row.goto(atFrame, this.imagesList[i].row);
                return true;
            }
        }
        return false;
    }
}
