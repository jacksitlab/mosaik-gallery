import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingOverlay from './loadingOverlay';
import NotificationLayer from './notificationLayer';
import { MosaikType } from 'models/mosaikType';
import editor, { IEditorChangeListener } from 'models/mosaikEditor';

interface PageWrapperProps {
    isEditor: boolean;
}
class PageWrapper extends React.Component<PageWrapperProps> implements IEditorChangeListener {

    constructor(props: any) {
        super(props);
        editor.registerStateChangedListener(this);
    }
    private onSelectMode(type: MosaikType) {
        editor.setType(type);
    }
    private onEdgeLengthChanged(e: React.ChangeEvent<HTMLInputElement>) {
        editor.setEdgeLength(parseInt(e.target.value));
    }
    public onEditorStateChanged() {
        this.forceUpdate();
    }
    private getEditorBar(): JSX.Element {
        return <div className="dropdown navbar-nav mr-auto" >
            <input type="number" className="form-control col-3 mx-2" placeholder="edge length" onChange={(e) => { this.onEdgeLengthChanged(e); }} value={editor.getEdgeLength()}></input>

            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" style={{ minWidth: '9rem' }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {editor.getType().toString()}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <span className="dropdown-item" onClick={() => { this.onSelectMode(MosaikType.QUAD); }}>Rectangle</span>
                <span className="dropdown-item" onClick={() => { this.onSelectMode(MosaikType.SIX); }}>Honeycomb</span>

            </div>
        </div>
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <NavLink className="navbar-brand" style={{ color: '#bd9f6f' }} to="/"><b>Mosaik</b>Editor</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/editor">Editor</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                        {this.props.isEditor ? this.getEditorBar() : ""}
                        <div className="form-inline" >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link github-fork-ribbon" data-ribbon="Fork me on GitHub" target="_blank" href="https://github.com/jacksitlab/mosaik-gallery">SourceCode</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <LoadingOverlay />
                <NotificationLayer />
            </div>


        )
    }
}

export default PageWrapper;
