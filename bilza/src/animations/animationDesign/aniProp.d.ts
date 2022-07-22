import IFilter from "../../../typescript/animations/animationDesign/IFilter.js.js";
export default class AniProp<T> {
    private _value;
    protected filters: IFilter<T>[];
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
    private runFilters;
}
//# sourceMappingURL=aniProp.d.ts.map