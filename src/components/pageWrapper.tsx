import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingOverlay from './loadingOverlay';
import NotificationLayer from './notificationLayer';

interface PageWrapperState {
    isEditor: boolean;
}
class PageWrapper extends React.Component<any, PageWrapperState> {

    constructor(props: any) {
        super(props);
        this.state = { isEditor: true }
    }
    private getEditorBar(): JSX.Element {
        return <ul className="navbar-nav mr-auto">
            <li><button type="button" title="add">Add</button></li>
        </ul>
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
                        {this.state.isEditor ? this.getEditorBar() : ""}
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
