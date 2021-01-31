import { Card, Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import React from 'react';
import { loginApi } from '../../services/auth'
import './style.css'
import { setToken } from '../../utils/auth';


export default class Login extends React.Component {
    render() {
        const onFinish = (values) => {
            // console.log('Received values of form: ', values);

            // setToken(values.name);
            // this.props.history.push('/admin');
            loginApi({
                email: values.name,
                password: values.password
            })
                .then(res => {
                    let status = res.data.status;
                    let data = res.data.data;
                    if(status !== "success")
                    {
                        message.error(data.errMsg);
                    } else {
                        message.info("登录成功");
                        setToken(data);
                        this.props.history.push("/admin");
                    }
                })
                .catch(err => {
                    message.error("登录出错");
                    console.error(err);
                })
        };
        return (
            <Card title="登录" className="login-card">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名！',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#1">
                            忘记密码
        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
        </Button>
        没有账户 <Link to="/register">注册</Link>
                    </Form.Item>
                </Form>
            </Card>
        );
    };
};
