import React from 'react';
import { Route, Switch } from "wouter";
import DetailsPage from './containers/details';
import HomePage from './containers/home';

import './App.css';

const App = () => {
    return (
        <Switch>
            <Route path="/movies" component={DetailsPage} />
            <Route path="/series" component={DetailsPage} />
            <Route path="/" component={HomePage} />
        </Switch>
    );
}

export default App;
