import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routers/router'
import Frame from './components/Frame/Index'
import { isLogined } from './utils/auth'
import './App.css';
class App extends React.Component {
    render() {
        return (
            // 判断是否登录，若没有登录则重定向到登录页面
            isLogined() ?
                <Frame>
                    <Switch>
                        {adminRoutes.map(route => <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={props => <route.component {...props} />}
                        />)}  
                        <Redirect to="/admin/dashboard" from="/admin"></Redirect>
                        <Redirect to="/404"></Redirect>
                    </Switch>
                </Frame> : <Redirect to="/login" />
        );
    };
}
export default App;