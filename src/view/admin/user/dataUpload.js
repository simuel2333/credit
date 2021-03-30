import React from 'react'
import { Form, Input, Select, Upload, Button, Space, Typography, Card, Row, Col, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
function dataUpload() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (

        <Card title="个人信息录入">
            <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ width: 900 }}>
                <Row>
                    <Col span={12}>
                        <Form.Item label="姓名">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="手机号">
                            <Input.Group compact>
                                <Input style={{ width: 60 }} defaultValue="+86" />
                                <Input style={{ width: 180 }} />
                            </Input.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="身份证号">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="银行卡号">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="地址">
                            <Input.Group compact>
                                <Select defaultValue="省份">
                                </Select>
                                <Input style={{ width: '57%' }} />
                            </Input.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="职业">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="出生日期">
                            <DatePicker style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="月收入">
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

                    </Col>
                </Row>
                <Row>
                    <Form.Item>
                        <Col span={12}>
                            <Button type="primary" style={{ width: 150 , marginLeft:400}}>提交</Button>
                        </Col>
                    </Form.Item>
                </Row>
            </Form>
        </Card>
    )
}

export default dataUpload
