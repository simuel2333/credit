import React, { Component } from 'react'
import { Row, Col, Card, Statistic } from 'antd';
import { Pie } from '@ant-design/charts';
export class InstitutionDashboard extends Component {

    render() {
        var data = [
            {
                type: '20~30',
                value: 1545,
            },
            {
                type: '30~40',
                value: 3674,
            },
            {
                type: '40~50',
                value: 5152,
            },
            {
                type: '>50',
                value: 11432,
            }
        ];
        var data2 = [
            {
                type: '0~3000',
                value: 6487,
            },
            {
                type: '3000~5000',
                value: 4700,
            },
            {
                type: '5000~10000',
                value: 7905,
            },
            {
                type: '10000~15000',
                value: 1948,
            },
            {
                type: '>15000',
                value: 763,
            }
        ];
        var data3 = [
            {
                type: '好客户',
                value: 20347,
            },
            {
                type: '逾期客户',
                value: 1456,
            },
        ];
        var data4 = [
            {
                type: '400~550',
                value: 1411,
            },
            {
                type: '550~600',
                value: 5439,
            },
            {
                type: '600~650',
                value: 14953,
            }
        ];
        var config1 = {
            appendPadding: 10,
            data: data,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            label: {
                type: 'inner',
                offset: '-50%',
                content: '{value}',
                style: {
                    textAlign: 'center',
                    fontSize: 14,
                },
            },
            interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
            statistic: {
                title: false,
                content: {
                    style: {
                        whiteSpace: 'pre-wrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    formatter: function formatter() {
                        return '年龄\n分布';
                    },
                },
            },
        };
        var config2 = {
            appendPadding: 10,
            data: data2,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            label: {
                type: 'inner',
                offset: '-50%',
                content: '{value}',
                style: {
                    textAlign: 'center',
                    fontSize: 14,
                },
            },
            interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
            statistic: {
                title: false,
                content: {
                    style: {
                        whiteSpace: 'pre-wrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    formatter: function formatter() {
                        return '收入\n分布';
                    },
                },
            },
        };
        var config3 = {
            appendPadding: 10,
            data: data3,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            label: {
                type: 'inner',
                offset: '-50%',
                content: '{value}',
                style: {
                    textAlign: 'center',
                    fontSize: 14,
                },
            },
            interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
            statistic: {
                title: false,
                content: {
                    style: {
                        whiteSpace: 'pre-wrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    formatter: function formatter() {
                        return '好坏\n客户';
                    },
                },
            },
        };
        var config4 = {
            appendPadding: 10,
            data: data4,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            label: {
                type: 'inner',
                offset: '-50%',
                content: '{value}',
                style: {
                    textAlign: 'center',
                    fontSize: 14,
                },
            },
            interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
            statistic: {
                title: false,
                content: {
                    style: {
                        whiteSpace: 'pre-wrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    formatter: function formatter() {
                        return '信用\n分数';
                    },
                },
            },
        };
        return (
            <div>
                <Row justify="space-between">
                    <Col span={3}>
                        <Card style={{ width: 300 }} bordered={false}>
                            <Statistic
                                title="机构名称"
                                value={'金融机构A'}
                                valueStyle={{ color: '#5f5f5f' }}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card style={{ width: 300 }} bordered={false}>
                            <Statistic
                                title="当前贡献值"
                                value={265}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card style={{ width: 300 }} bordered={false}>
                            <Statistic
                                title="本地用户数量"
                                value={21803}
                                valueStyle={{ color: '#1c4587' }}
                            />
                        </Card>
                    </Col>

                    <Col span={3}>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
                <Card title="客户分布概览">
                <Row>
                    <Col span={6}>
                        <Pie {...config1} style={{ width: 300, height: 300 }} />
                    </Col>
                    <Col span={6}>
                        <Pie {...config2} style={{ width: 300, height: 300 }} />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Pie {...config3} style={{ width: 300, height: 300 }} />
                    </Col>
                    <Col span={6}>
                        <Pie {...config4} style={{ width: 300, height: 300 }} />
                    </Col>
                </Row>
                </Card>
            </div>
        )
    }
}

export default InstitutionDashboard
