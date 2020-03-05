import * as React from 'react';
import { IPosition } from './mosiakPath';

export interface MenuSelectEvent {
    item: string;
}
export interface EditorContextMenuItem {
    id: string;
    title: string;
}
export interface EditorContextMenuProps {
    visible: boolean;
    items: EditorContextMenuItem[];
    onMenuSelected(e: MenuSelectEvent): void;
    position: IPosition;
}

class EditorContextMenu extends React.Component<EditorContextMenuProps> {
    public constructor(props: EditorContextMenuProps) {
        super(props);
        console.log(`show conext menu on ${this.props.position.x}|${this.props.position.y}`)
    }
    private onMenuClick(item: string) {
        this.props.onMenuSelected({ item: item })
    }
    render() {
        return <div className="context-menu" style={{ background: '#F00', display: this.props.visible ? "inline-block" : "none", left: `${this.props.position.x}px`, top: `${this.props.position.y}px` }}>
            <h1>Menu</h1>
            <ul>
                {this.props.items.map((item) => {
                    return <li key={item.id} onClick={() => { this.onMenuClick(item.id); }}>{item.title}</li>
                })}
            </ul>
        </div>
    }
}
export default EditorContextMenu;