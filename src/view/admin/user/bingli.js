import React from 'react'
import { Form, Input, Button, Card, Row, Col, DatePicker, Radio } from 'antd';
function BingLi() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (

        <Card style={{background: '#ffebcd'}}>
            <h2><span style={{ marginLeft: 450 }}>上传病例</span></h2>
            <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ width: 900 }}>
                <Row>
                    <Col span={12}>
                        <Form.Item label="姓名">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="性别">
                            <Radio.Group>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="年龄">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="身份证号">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="患病情况">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="科室">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="入院时间">
                            <DatePicker style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="主治医师">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="复诊次数">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="最后复诊时间">
                            <DatePicker style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="入院总花费">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="病情持续时间">
                            <Input style={{ width: 240 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="家庭住址">
                            <Input style={{ width: 690 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="现病史">
                            <Input style={{ width: 690 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item label="治疗情况">
                            <Input style={{ width: 690,height:150 }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item>
                        <Col span={12}>
                            <Button type="primary" style={{ width: 150, marginLeft: 400 }}>上传病例</Button>
                        </Col>
                    </Form.Item>
                </Row>
            </Form>
        </Card>
    )
}

export default BingLi
