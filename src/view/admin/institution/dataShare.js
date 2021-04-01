import React, { Component } from 'react'
import { Form, Input, Upload, Button, Card, Row, Col } from 'antd';
import { UploadOutlined, DownOutlined } from '@ant-design/icons'
export class dataShare extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <Card title="机构索引上传">
                <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ width: 900 }}>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="字段0">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="字段1">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="字段2">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="字段3">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="字段4">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="字段5">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="字段6">
                                <Input style={{ width: 240 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="数据地址">
                                <Input style={{ width: 240 }} />
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="证书">
                                <Upload>
                                    <Button icon={<UploadOutlined />} style={{ width: 240 }}>上传</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <a style={{ fontSize: 18, marginLeft: 160 }}>+添加更多</a>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item>
                            <Col span={12}>
                                <Button type="primary" style={{ width: 150, marginLeft: 400 }}>提交</Button>
                            </Col>
                        </Form.Item>
                    </Row>
                </Form>
            </Card>
        )
    }
}

export default dataShare
