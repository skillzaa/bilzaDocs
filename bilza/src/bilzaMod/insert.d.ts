import { IComponent } from "../../typescript/bilza.js.js";
import Comps from "../../typescript/bilzaMod/comps.js.js";
import Duration from "../../typescript/bilzaMod/duration.js.js";
import IScene from "../../typescript/scene/IScene.js.js";
export default class Insert {
    private duration;
    private comps;
    private charsWidth;
    constructor(comps: Comps, duration: Duration, charsWidth: (chars: string, fontSize: number, fontName: string) => number);
    insertScene(scene: IScene): void;
    append(comp: IComponent, duration: number): IComponent;
    add(comp: IComponent, startTime: number, duration: number): IComponent;
    alwaysOn(comp: IComponent): IComponent;
}
//# sourceMappingURL=insert.d.ts.map