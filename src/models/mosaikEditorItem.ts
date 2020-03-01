import editor from "./mosaikEditor";
import { MosaikType } from "./mosaikType";


class MosaikEditorItem {

    private readonly _id: number;
    private readonly edgeLength: number;
    private location: { x: number, y: number };
    private type: MosaikType;
    public constructor(id: number, edge: number) {
        this._id = id;
        this.edgeLength = edge;
        this.type = MosaikType.SIX;
        this.location = { x: 200, y: 0 }
    }
    private getTransformation(): SVGAnimatedTransformList {
        return new SVGAnimatedTransformList();
    }
    private renderRect(): string {
        return `<path ` +
            `transform="translate(${this.edgeLength / 2}, ${this.edgeLength / 2} )" ` +
            `d="M-${this.edgeLength / 2},-${this.edgeLength / 2} l${this.edgeLength},0 0,${this.edgeLength} -${this.edgeLength},0Z" ` +
            `fill="none" stroke="#000" stroke-width="1" />`;

    }
    private renderHoneycomb(): string {
        const coslen = 0.86602540378 * this.edgeLength; //cos(30)*edgeLength;
        const sinlen = 0.5 * this.edgeLength; //sin(30)*edgeLength;
        const w = this.edgeLength / 2;
        return `<path ` +
            `transform="translate(${w + this.location.x} ${coslen + this.location.y} ) " ` +
            `d="M-${w},-${coslen} l${this.edgeLength},0 ${sinlen},${coslen} -${sinlen},${coslen} -${this.edgeLength},0 -${sinlen},-${coslen}Z" ` +
            `fill="none" stroke="#000" stroke-width="1" />`;
    }
    public renderSvgElem(): string {
        // const e = new SVGPathElement();
        // e.id = `mosaik_elem_${this._id}`;
        // e.createSVGPathSegMovetoAbs(0, 0);
        // e.createSVGPathSegLinetoAbs(0 + this.edgeLength, 0);
        // e.createSVGPathSegLinetoAbs(0 + this.edgeLength, 0 + this.edgeLength);
        // e.createSVGPathSegLinetoAbs(0, 0 + this.edgeLength);
        // e.createSVGPathSegClosePath();
        // return e.outerHTML;
        return this.type == MosaikType.QUAD ? this.renderRect() : this.renderHoneycomb();
    }
}
export default MosaikEditorItem;