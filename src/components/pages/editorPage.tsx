import * as React from 'react';
import editor from '../../models/mosaikEditor';

class EditorPage extends React.Component {

    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div className="row m-2">

                <svg id="svg" width="100%" height="100%" viewBox="0 0 500 500" className="col-10 mosaik-svg" dangerouslySetInnerHTML={{ __html: editor.doRender() }}>


                </svg>


            </div >
        )
    }
}

export default EditorPage;
