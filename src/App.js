import React from "react";

import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import HashRouter from "react-router-dom/HashRouter";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";

export default class App extends React.Component {
    state = {
        language: "es"
    };

    componentDidMount() {
        this.setState({
            language: navigator.language.includes("es") ? "es" : "en"
        });
    }

    render() {
        return (
            <HashRouter>
                <Layout>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <Index {...props} />}
                        />
                        <Route
                            exact
                            path="/blog"
                            render={props => <Blog {...props} />}
                        />
                    </Switch>
                </Layout>
            </HashRouter>
        );
    }
}
