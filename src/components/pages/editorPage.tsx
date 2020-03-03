import * as React from 'react';
import editor from '../../models/mosaikEditor';
import EditorContextMenu, { MenuSelectEvent } from 'components/editorContextMenu';

interface EditorPageState {
    visible: boolean;
}
class EditorPage extends React.Component<any, EditorPageState> {

    constructor(props: any) {
        super(props);
        this.state = { visible: false }

    }
    private onContextMenuClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        console.log("context click");
        e.preventDefault();
        this.setState({ visible: true })
    }
    private onMenuSelected(e: MenuSelectEvent): void {
        console.log(`on menu ${e.item} selected`)
        this.setState({ visible: false });
    }
    render() {
        return (
            <div className="row m-0">

                <svg onContextMenu={(e) => { this.onContextMenuClick(e); }} id="svg" width="100%" height="100%" viewBox="0 0 1000 1000" className="col-12 p-0 mosaik-svg" dangerouslySetInnerHTML={{ __html: editor.doRender() }}>


                </svg>

                <EditorContextMenu visible={this.state.visible} onMenuSelected={(e) => { this.onMenuSelected(e) }} />
            </div >

        )
    }
}

export default EditorPage;
