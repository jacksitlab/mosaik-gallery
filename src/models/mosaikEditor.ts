import * as React from 'react';
import MosaikEditorItem from "./mosaikEditorItem";
import HoneycombCalculator from './honeycombCalculator';

class MosaikEditor {

    private readonly items: MosaikEditorItem[];
    private edgeLength: number;
    private margin: number;
    public getItems(): MosaikEditorItem[] {
        return this.items;
    }
    private static id = 324;
    public static generateId(): number {
        return MosaikEditor.id++;
    }
    public constructor() {
        this.items = [];
        this.edgeLength = 40;
        this.margin = 10;
        const calc = new HoneycombCalculator(this.edgeLength, this.margin, 50, 10);
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 0)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 0)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 0)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 0)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 0)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(0, 1)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 1)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 1)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 1)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 1)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 1)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 2)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 2)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 2)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 2)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 2)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(0, 3)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 3)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 3)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 3)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 3)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 3)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 4)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 4)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 4)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 4)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 4)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(0, 5)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 5)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 5)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 5)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 5)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 5)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(1, 6)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(2, 6)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(3, 6)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(4, 6)));
        this.items.push(new MosaikEditorItem(MosaikEditor.generateId(), this.edgeLength, calc.getCenter(5, 6)));

    }
}

const editor = new MosaikEditor();
export default editor;