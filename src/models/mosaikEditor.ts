import * as React from 'react';
import MosaikEditorItem from "./mosaikEditorItem";

class MosaikEditor {

    private readonly items: MosaikEditorItem[];

    public constructor() {
        this.items = [];
        this.items.push(new MosaikEditorItem(1, 1200));
    }

    public doRender(): string {
        const lines = this.items.map((item) => {
            return item.renderSvgElem();
        })
        let line = lines[0];
        for (let i = 1; i < lines.length; i++) {
            line += "\n" + lines[i];
        }
        return line;
    }
}

const editor = new MosaikEditor();
export default editor;