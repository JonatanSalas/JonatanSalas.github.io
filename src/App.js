import React from "react";

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Index from "./pages/Index";
import Layout from "./components/Layout";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        );
    }
}
