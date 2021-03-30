import React from 'react';
import {
    Card,
    Form,
    Input,
    Button,
    message
} from 'antd';
import { registerApi } from '../../services/auth'
import './style.css'

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emailStatus: true };
    }
    render() {
        const onFinish = (values) => {
            registerApi({
                email: values.email,
                telephone: values.telephone,
                password: values.password,
                name: values.name
            })
                .then(res => {
                    let status = res.data.status;
                    if (status === "success") {
                        message.info("注册成功");
                        this.props.history.push("/login");
                    } else {
                        message.error(res.data.data.errMsg);
                        this.setState({ emailStatus: false });
                        this.setState({ emailErrMsg: res.data.data.errMsg });
                    }
                })
                .catch(err => {
                    console.log('fail: ', err);
                });
        };
        const checkPassword = (rule, pwd) => {
            let patt = /[a-zA-Z]+\d+/;
            if (!patt.test(pwd)) return Promise.reject('必须填字母加数字');
            if (pwd.length > 7) {
                return Promise.resolve();
            }
            return Promise.reject('至少8位');
        }
        const checkPhone = (rule, phone) => {
            let patt = /\d{11}/;
            if (!patt.test(phone)) return Promise.reject('必须是11位手机号码');
            else return Promise.resolve();
        }

        return (
            <Card title="个人用户注册" className="register-card">
                <Form name="register-form" {...formItemLayout} onFinish={onFinish}>
                    <Form.Item name="email" label="邮箱" rules={[{ type: 'email', message: "邮箱不合法!" }, { required: true, message: "请输入邮箱！" }
                    ]}>
                        <Input placeholder="请输入邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                        label="手机"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号码!',
                            },
                            {
                                validator: checkPhone
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="密码" rules={[{ required: true, message: "请输入密码!" }, { validator: checkPassword }]}>
                        <Input.Password placeholder="请输入密码"></Input.Password>
                    </Form.Item>
                    <Form.Item name="confirm" label="确认密码" dependencies={['password']} hasFeedback rules={[
                        {
                            required: true,
                            message: '请确认您的密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('两次输入的密码不一致！');
                            },
                        }),
                    ]}>
                        <Input.Password placeholder="请再次输入密码"></Input.Password>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="昵称"
                        rules={[
                            {
                                required: true,
                                message: '请输入昵称！',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="请输入昵称" />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                        <Button type="ghost" htmlType="submit" style={{ marginLeft: 15 }}>
                            机构用户注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}