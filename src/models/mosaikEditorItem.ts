import editor from "./mosaikEditor";
import { MosaikType } from "./mosaikType";


class MosaikEditorItem {

    private readonly _id: number;
    private readonly edgeLength: number;
    private location: { x: number, y: number };
    private type: MosaikType;
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
    public constructor(id: number, edge: number, loc?: { x: number, y: number }) {
        this._id = id;
        this.edgeLength = edge;
        this.type = MosaikType.SIX;
        this.location = { x: loc ? loc.x : 0, y: loc ? loc.y : 0 }
    }

}
export default MosaikEditorItem;