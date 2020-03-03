import * as React from 'react';

export interface MenuSelectEvent {
    item: string;
}
export interface EditorContextMenuProps {
    visible: boolean;
    onMenuSelected(e: MenuSelectEvent): void;
}
class EditorContextMenu extends React.Component<EditorContextMenuProps> {
    public constructor(props: EditorContextMenuProps) {
        super(props);
    }
    private onMenuClick(item: string) {
        this.props.onMenuSelected({ item: item })
    }
    render() {
        return <div className="context-menu" style={{ background: '#F00', display: this.props.visible ? "inline-block" : "none" }}>
            <h1>Menu</h1>
            <ul>
                <li onClick={() => { this.onMenuClick('add'); }}>Add</li>
            </ul>
        </div>
    }
}
export default EditorContextMenu;