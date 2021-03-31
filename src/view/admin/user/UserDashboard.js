/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Statistic, Descriptions, Badge } from 'antd';
import './user.css'
const { Meta } = Card;

export default class UserDashboard extends Component {

    render() {
        return (
            <div className="user-background">
                <h3 className="title">个人信息</h3>
                <Row justify="space-between">
                    <Col span={6}>
                        <Card style={{ width: 300, marginTop: 16 }} bordered={false}>
                            <Meta
                                avatar={
                                    <Avatar src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2586243650,1628445668&fm=26&gp=0.jpg" />
                                }
                                title="欢迎回来，Chris"
                                description="这里是您的详情信息"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 300, marginTop: 16 }} bordered={false}>
                            <Statistic
                                title="当前信用分"
                                value={710}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                    </Col>
                    <Col span={6}>

                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>
                <Row>
                    <Descriptions bordered>
                        <Descriptions.Item label="用户姓名">Chris</Descriptions.Item>
                        <Descriptions.Item label="性别">男</Descriptions.Item>
                        <Descriptions.Item label="年龄">25</Descriptions.Item>
                        <Descriptions.Item label="信息录入时间">2021-03-15 18:03:15</Descriptions.Item>
                        <Descriptions.Item label="信用评分时间" span={2}>
                            2021-03-15 18:15:08
                        </Descriptions.Item>
                        <Descriptions.Item label="账户地址" span={3}>
                            <a>0x10a12eB389B0Df756C63778E522C3463B7B60BD0</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="当前数据状态" span={3}>
                            <Badge status="processing" text="尚未授权机构使用" />
                        </Descriptions.Item>
                        <Descriptions.Item label="名下房产数量">1</Descriptions.Item>
                        <Descriptions.Item label="贷款余额">￥200000.00</Descriptions.Item>
                        <Descriptions.Item label="月收入">￥15000.00</Descriptions.Item>
                        <Descriptions.Item label="信用历史">
                            三个月内信用卡逾期次数：<span className="normal">0</span>
                            <br />
                            半年内信用卡逾期次数: <span className="warning">1</span>
                            <br />
                            一年内信用卡逾期次数: <span className="warning">1</span>
                            <br />
                            两年内信用卡逾期次数: <span className="warning">2</span>
                            <br />
                        </Descriptions.Item>
                    </Descriptions>
                </Row>
                <a>{'>>'}更多</a>
            </div>
        )
    }
}

