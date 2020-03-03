import * as React from 'react';
import editor from '../../models/mosaikEditor';
import EditorContextMenu, { MenuSelectEvent, EditorContextMenuItem } from 'components/editorContextMenu';
import MosaikPath from 'components/mosiakPath';

interface EditorPageState {
    visible: boolean;
    contextMenuItems: EditorContextMenuItem[];
}
class EditorPage extends React.Component<any, EditorPageState> {

    private static generalContextItems: EditorContextMenuItem[] = EditorPage.initGeneralContextItems();
    private static mosaikContextItems: EditorContextMenuItem[] = EditorPage.initMosaikContextItems();

    public static initGeneralContextItems(): EditorContextMenuItem[] {
        const items: EditorContextMenuItem[] = [];
        items.push({ id: 'add-item', title: 'Add Item' });
        items.push({ id: 'set-bg', title: 'Set Background' });
        return items;
    }
    public static initMosaikContextItems(): EditorContextMenuItem[] {
        const items: EditorContextMenuItem[] = [];
        items.push({ id: 'rem-item', title: 'Remove Item' });
        items.push({ id: 'add-img', title: 'Add Image' })
        return items;
    }
    constructor(props: any) {
        super(props);
        this.state = { visible: false, contextMenuItems: [] }

    }
    private onContextMenuClick(id: string) {
        console.log("mosaik context click:");
        console.log(id);
        this.setState({ visible: true, contextMenuItems: EditorPage.mosaikContextItems })
    }
    private onContextMenuSvgClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        console.log("main context click:");
        console.log(e);
        e.preventDefault();
        this.setState({ visible: true, contextMenuItems: EditorPage.generalContextItems })
    }
    private onMenuSelected(e: MenuSelectEvent): void {
        console.log(`on menu ${e.item} selected`)
        this.setState({ visible: false });
    }
    render() {
        return (
            <div className="row m-0" >

                <svg onContextMenu={(e) => { this.onContextMenuSvgClick(e); }} id="svg" width="100%" height="100%" viewBox="0 0 1000 1000" className="col-12 p-0 mosaik-svg" >
                    {editor.getItems().map((item) => {
                        return <MosaikPath id={`item_${item.getId()}`} key={`item_${item.getId()}`}
                            edgeLength={item.getEdgeLength()} location={item.getLocation()} type={item.getType()}
                            onContextMenu={(e) => { this.onContextMenuClick(e); }}
                        />;
                    })}

                </svg>

                <EditorContextMenu visible={this.state.visible} items={this.state.contextMenuItems} onMenuSelected={(e) => { this.onMenuSelected(e) }} />
            </div >

        )
    }
}

export default EditorPage;
