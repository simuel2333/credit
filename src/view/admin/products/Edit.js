import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
export default class Edit extends Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 }
        }
        const onFinish = values => {
            console.log(values);
        }
        const onFinishFailed = err => {
            console.log(err);
        }
        const checkPrice = (rule, value) => {
            let patt = /\d+/;
            if (!patt.test(value)) return Promise.reject('必须填数字');
            if (value > 0) {
                return Promise.resolve();
            }
            return Promise.reject('必须大于0');
        }
        return (
            <Card title="商品编辑">
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout} style={{ width: '50%' }}>
                    <Form.Item label="商品名" name="name" rules={[{ required: true, message: '请输入商品名' }]}>
                        <Input placeholder="请输入商品名"/>
                    </Form.Item>
                    <Form.Item label="价格" name="price" rules={[{ required: true, message: '请输入价格' }, { validator: checkPrice }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
