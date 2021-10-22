import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    Home,
    About
} from './../../pages';
import {
Contact,
Webd
} from './../../pages/funcomponents'
class RouterNavigations extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/webd" component={Webd} />
                </Switch>
            </Router>
        );
    }
}

export default RouterNavigations