import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link,
} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add/">
                    <Add />
                </Route>
                <Route path="/edit/:id">
                    <Edit />
                </Route>
            </Switch>
        </Router>
    )
}

if(document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}