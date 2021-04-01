import React, { Component } from 'react'
import { Form, Input,  Button, Card, Row, Col } from 'antd';
export class creditAuth extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <Card title="客户信用验证">
                <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ width: 900 }}>
                    <Row>
                        <Col span={9}>
                            <Form.Item label="客户地址">
                                <Input style={{ width: 200 }} />
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item label="信用分是否超过">
                                <Input style={{ width: 200 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item>
                            <Col span={12}>
                                <Button type="primary" style={{ width: 150, marginLeft: 250 }}>验证</Button>
                            </Col>
                        </Form.Item>
                    </Row>
                </Form>
            </Card>
        )
    }
}

export default creditAuth
