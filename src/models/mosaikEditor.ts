import * as React from 'react';
import MosaikEditorItem from "./mosaikEditorItem";
import HoneycombMosiakCalculator from './honeycombMosaikCalculator';
import { MosaikType } from './mosaikType';
import { MosaikCalculator, getCalculatorInstance } from './mosaikCalculator';
import { IPosition } from 'components/mosaikPath';
function removeA(arr: any[], a: any) {
    var what, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

interface itemData {
    id: number;
    col: number;
    row: number;

}
export interface IEditorChangeListener {
    onEditorStateChanged(): void
}
class MosaikEditor {

    private readonly items: itemData[];
    private edgeLength: number;
    private margin: number;
    private mosaikCalculator: MosaikCalculator | null;
    private type: MosaikType;
    private readonly offset: IPosition;
    private readonly stateChangedListeners: IEditorChangeListener[];


    private static id = 324;
    public static generateId(): number {
        return MosaikEditor.id++;
    }
    public constructor() {
        this.items = [];
        this.stateChangedListeners = [];
        this.edgeLength = 40;
        this.margin = 10;
        this.offset = { x: 50, y: 50 };
        this.type = MosaikType.QUAD;
        this.mosaikCalculator = getCalculatorInstance(this.type, this.edgeLength, this.margin, this.offset.x, this.offset.y);
        this.items = [];
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 0 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 0 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 0 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 0 });
        this.items.push({ id: MosaikEditor.generateId(), col: 0, row: 1 });
        this.items.push({ id: MosaikEditor.generateId(), col: 1, row: 1 });
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 1 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 1 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 1 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 1 });
        this.items.push({ id: MosaikEditor.generateId(), col: 1, row: 2 });
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 2 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 2 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 2 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 2 });
        this.items.push({ id: MosaikEditor.generateId(), col: 0, row: 3 });
        this.items.push({ id: MosaikEditor.generateId(), col: 1, row: 3 });
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 3 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 3 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 3 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 3 });
        this.items.push({ id: MosaikEditor.generateId(), col: 1, row: 4 });
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 4 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 4 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 4 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 4 });
        this.items.push({ id: MosaikEditor.generateId(), col: 0, row: 5 });
        this.items.push({ id: MosaikEditor.generateId(), col: 1, row: 5 });
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 5 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 5 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 5 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 5 });
        this.items.push({ id: MosaikEditor.generateId(), col: 1, row: 6 });
        this.items.push({ id: MosaikEditor.generateId(), col: 2, row: 6 });
        this.items.push({ id: MosaikEditor.generateId(), col: 3, row: 6 });
        this.items.push({ id: MosaikEditor.generateId(), col: 4, row: 6 });
        this.items.push({ id: MosaikEditor.generateId(), col: 5, row: 6 });

    }
    public setType(type: MosaikType) {
        this.type = type;
        this.mosaikCalculator = getCalculatorInstance(type, this.edgeLength, this.margin, this.offset.x, this.offset.y)
        this.pushChangeListeners();
    }
    private pushChangeListeners() {
        this.stateChangedListeners.forEach((listener) => {
            listener.onEditorStateChanged();
        })
    }
    public registerStateChangedListener(listener: IEditorChangeListener) {
        this.stateChangedListeners.push(listener);
    }
    public unregisterStateChangedListener(listener: IEditorChangeListener) {
        removeA(this.stateChangedListeners, listener);
    }
    public getItems(): MosaikEditorItem[] {
        const items: MosaikEditorItem[] = [];
        this.items.forEach((item) => {
            if (this.mosaikCalculator != null) {
                items.push(new MosaikEditorItem(item.id, this.edgeLength, this.mosaikCalculator.calcPath(), this.mosaikCalculator.getCenter(item.col, item.row), this.type));
            }
        })

        return items;
    }
    public getType(): MosaikType {
        return this.type;
    }
    public getEdgeLength(): number {
        return this.edgeLength;
    }
    public setEdgeLength(len: number) {
        this.edgeLength = len;
        this.mosaikCalculator = getCalculatorInstance(this.type, this.edgeLength, this.margin, this.offset.x, this.offset.y)
        this.pushChangeListeners();
    }
}

const editor = new MosaikEditor();
export default editor;