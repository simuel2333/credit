import React, { Component } from 'react'
import { Layout, Menu, Avatar, Dropdown, message } from 'antd';
import Icon from '@ant-design/icons';
import './style.css'
import { adminRoutes } from '../../routers/router';
import { withRouter } from 'react-router-dom';
import { DownOutlined,LogoutOutlined } from '@ant-design/icons';
import { clearToken } from '../../utils/auth';

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow);
class Index extends Component {

    render() {
        const handleMenu = (p)=>{
            if(p.key === 'logout') {
                clearToken();
                this.props.history.push('/login');
            } else {
                message.info(p.key);
            }
        }
        const menu = (
            <Menu onClick={handleMenu}>
                <Menu.Item key="msg">
                    消息
                </Menu.Item>
                <Menu.Item key="setting">
                    设置
                </Menu.Item>
                <Menu.Item key="logout">
                    <LogoutOutlined />退出
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="/#" onClick={e => { e.preventDefault() }}>
                            <Avatar style={{ backgroundColor: '#f56a00' }}>U</Avatar> 管理员 <DownOutlined />
                        </a>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {routes.map(route => {
                                return <Menu.Item key={route.path} onClick={p => this.props.history.push(p.key)}>
                                    <Icon component={route.icon}></Icon>
                                    {route.title}
                                </Menu.Item>
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Index);