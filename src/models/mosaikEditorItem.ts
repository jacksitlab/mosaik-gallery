import editor from "./mosaikEditor";
import { MosaikType } from "./mosaikType";


class MosaikEditorItem {

    private readonly _id: number;
    private readonly edgeLength: number;
    private readonly location: { x: number, y: number };
    private readonly type: MosaikType;
    private readonly svgPath: string;
    public getId(): number {
        return this._id;
    }
    public getEdgeLength() { return this.edgeLength; }
    public getLocation() {
        return this.location;
    }
    public getType(): MosaikType {
        return this.type;
    }
    public constructor(id: number, edge: number, svgPath: string, loc?: { x: number, y: number }, type = MosaikType.SIX) {
        this._id = id;
        this.edgeLength = edge;
        this.type = type;
        this.svgPath = svgPath;
        this.location = { x: loc ? loc.x : 0, y: loc ? loc.y : 0 }
    }
    public getSvgPath() {
        return this.svgPath;
    }

}
export default MosaikEditorItem;