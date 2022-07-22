import { FilterState } from "../../../typescript/animations/animationDesign/filterState.js.js";
export default interface IFilter<T> {
    update(msDelta: number): FilterState;
    value(): T | null;
}
//# sourceMappingURL=IFilter.d.ts.map