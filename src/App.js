import React from "react";

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import HashRouter from 'react-router-dom/HashRouter';

import Index from "./pages/Index";
import Layout from "./components/Layout";

export default class App extends React.Component {
    state = {
        language: 'es'
    };

    componentDidMount() {
        this.setState({
            language: navigator.language.includes('es') ? 'es' : 'en'
        });
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Layout>
                                <Index />
                            </Layout>
                        )}
                    />
                    <Route exact path="/blog" render={props => <Layout />} />
                </Switch>
            </HashRouter>
        );
    }
}
