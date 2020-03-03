import * as React from 'react';

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
                {this.props.items.map((item) => {
                    return <li key={item.id} onClick={() => { this.onMenuClick(item.id); }}>{item.title}</li>
                })}
            </ul>
        </div>
    }
}
export default EditorContextMenu;