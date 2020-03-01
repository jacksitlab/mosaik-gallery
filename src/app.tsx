import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/github-fork-ribbon-css/gh-fork-ribbon.css'
import './app.css'
import { Route, HashRouter, Switch } from 'react-router-dom';
import PageWrapper from 'components/pageWrapper';
import HomePage from 'components/pages/homePage';
import AboutPage from 'components/pages/aboutPage';
import NotFoundPage from 'components/pages/notFoundpage';
import EditorPage from 'components/pages/editorPage';


interface DetailsPageWrapperProps {
    match: {
        params: {
            module: string;
            revision: string;
        }
    }
}
const HomePageWrapper = () => {
    return <PageWrapper>
        <HomePage />
    </PageWrapper>
}
const AboutPageWrapper = () => {
    return <PageWrapper>
        <AboutPage />
    </PageWrapper>
}


const EditorPageWrapper = () => {
    return <PageWrapper>
        <EditorPage />
    </PageWrapper>
}
const NotFoundPageWrapper = () => {
    return <PageWrapper>
        <NotFoundPage />
    </PageWrapper>
}
class App extends React.Component {

    render() {
        return (
            <HashRouter >
                <Switch>
                    <Route path="/" component={HomePageWrapper} exact />
                    <Route path="/about" component={AboutPageWrapper} exact />
                    <Route path="/editor" component={EditorPageWrapper} exact />
                    <Route path="/" component={NotFoundPageWrapper} />
                </Switch>
            </HashRouter >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
