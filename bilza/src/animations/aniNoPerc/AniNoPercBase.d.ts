import AniNumber from "../../../typescript/animations/aniNumber/aniNumber.js.js";
import PreInitGoto from "../../../typescript/animations/aniNoPerc/designNoPerc/preInitGoto.js.js";
import PreInitAnimate from "../../../typescript/animations/aniNoPerc/designNoPerc/preInitAnimate.js.js";
import PreInitVibrate from "../../../typescript/animations/aniNoPerc/designNoPerc/preInitVibrate.js.js";
import PreInitRandom from "../../../typescript/animations/aniNoPerc/designNoPerc/preInitRandom.js.js";
import PreInitJumpBetween from "../../../typescript/animations/aniNoPerc/designNoPerc/preInitJumpBetween.js.js";
import PreInitOscilate from "../../../typescript/animations/aniNoPerc/designNoPerc/preInitoscilate.js.js";
export default class AniNoPercBase extends AniNumber {
    protected usePercentages: boolean | null;
    protected preInitGotos: PreInitGoto[];
    protected preInitAnimates: PreInitAnimate[];
    protected preInitVibrates: PreInitVibrate[];
    protected preInitRandoms: PreInitRandom[];
    protected preInitJumpBetweens: PreInitJumpBetween[];
    protected preInitOscilate: PreInitOscilate[];
    protected _initValue: number;
    canvasWidthHeight: number | null;
    constructor(defaultValue?: number);
    set(n: number): number;
    initSetInitValue(): void;
    jumpBetween(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, skipFrames?: number): void;
    baseJumpBetween(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, skipFrames?: number): void;
    goto(atSecond: number, value: number): void;
    baseGoto(atSecond: number, value: number): void;
    vibrate(from: number, to: number, seed: number, offset: number, delay: number): void;
    baseVibrate(from: number, to: number, xValue: number, offset: number, delay: number): void;
    random(startTimeSec: number, endTimeSec: number, min?: number, max?: number, skipXFrames?: number): void;
    baseRandom(startTimeSec: number, endTimeSec: number, min?: number, max?: number, skipXFrames?: number): void;
    animate(startTime: number, endTime: number, startValue: number, endValue: number): void;
    baseAnimate(startTime: number, endTime: number, startValue: number, endValue: number): void;
    oscillate(startTimeSec: number, endTimeSec: number, startValue?: number, endValue?: number, speed?: number): void;
    baseOscillate(startTimeSec: number, endTimeSec: number, startValue?: number, endValue?: number, speed?: number): void;
    protected percToPix(perc: number): number;
}
//# sourceMappingURL=AniNoPercBase.d.ts.map