import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { userRoutes, superviseRoutes, institutionRoutes } from './routers/router'
import Frame from './components/Frame/Index'
import { isLogined, whoLogined } from './utils/auth'
import './App.css';
const App = () => {

    return (
        // 判断是否登录，若没有登录则重定向到登录页面
        isLogined() ?
            <Frame>
                <Switch>
                    {
                        whoLogined().startsWith("user") ? userRoutes.map(route => <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={props => <route.component {...props} />}
                        />) : whoLogined().startsWith("supervise") ? superviseRoutes.map(route => <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={props => <route.component {...props} />}
                        />) : institutionRoutes.map(route => <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            render={props => <route.component {...props} />}
                        />)
                    }
                    <Redirect to={`/admin/userdashboard`} from="/"></Redirect>
                    <Redirect to="/404"></Redirect>
                </Switch>
            </Frame> : <Redirect to="/login" />
    );

}
export default App;