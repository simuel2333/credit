import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { mainRoutes } from './routers/router'
import App from './App'
render(<Router>
    <Switch>
        <Route path="/admin" render={routeProps=> <App {...routeProps}></App>}></Route>
        {mainRoutes.map(route=>{
            return <Route key={route.path} {...route}/>
        })}
        <Redirect to="/admin" from="/"/>
        <Redirect to="/404" />
    </Switch>
</Router>, document.getElementById('root'));