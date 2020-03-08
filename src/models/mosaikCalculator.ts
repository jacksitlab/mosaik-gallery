import { IPosition } from "components/mosiakPath";
import { MosaikType } from "./mosaikType";
import HoneycombMosiakCalculator from "./honeycombMosaikCalculator";
import QuadMosiakCalculator from "./quadMosaikCalculator";

export interface MosaikCalculator {
    getCenter(col: number, row: number): IPosition;


}
export function getCalculatorInstance(type: MosaikType, edgeLenth: number, margin: number, offX: number, offY: number): MosaikCalculator | null {
    switch (type) {
        case MosaikType.SIX:
            return new HoneycombMosiakCalculator(edgeLenth, margin, offX, offY);
        case MosaikType.QUAD:
            return new QuadMosiakCalculator(edgeLenth, margin, offX, offY);
        default:
            return null;
    }
}