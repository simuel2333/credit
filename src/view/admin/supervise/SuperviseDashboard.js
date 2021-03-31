import React, { Component } from 'react'
import { Row, Col, Card, Table, Space, Button, Tabs, Tag, DatePicker } from 'antd'
import { Column } from '@ant-design/charts';
import { alarms } from '../../../utils/mockData';
import './supervise.css'
const { TabPane } = Tabs;


export default class SuperviseDashboard extends Component {

    render() {
        const columns1 = [
            {
                title: '交易哈希',
                dataIndex: 'hash',
                key: 'hash',
                render: text => {
                    if (text.length > 18) {
                        return <a>{text.substr(0, 18) + '...'}</a>
                    }
                },
            },
            {
                title: '发起方地址',
                dataIndex: 'addr',
                key: 'addr',
                render: text => {
                    if (text.length > 18) {
                        return <a>{text.substr(0, 18) + '...'}</a>
                    }
                },
            },
            {
                title: '请求时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '标识',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag === '异常' ? 'volcano' : 'green';
                            if (tag === '联邦学习') {
                                color = 'geekblue';
                            }

                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary">查看详情</Button>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                name: '索要授权',
                date: '2021-3-29',
                value: 4
            },
            {
                name: '联邦学习',
                date: '2021-3-29',
                value: 0
            },
            {
                name: '异常',
                date: '2021-3-29',
                value: 0
            },
            {
                name: '索要授权',
                date: '2021-3-30',
                value: 5
            },
            {
                name: '联邦学习',
                date: '2021-3-30',
                value: 3
            },
            {
                name: '异常',
                date: '2021-3-30',
                value: 0
            },
            {
                name: '索要授权',
                date: '2021-3-31',
                value: 7
            },
            {
                name: '联邦学习',
                date: '2021-3-31',
                value: 1
            },
            {
                name: '异常',
                date: '2021-3-31',
                value: 2
            }
        ];

        var config = {
            data: data,
            isGroup: true,
            xField: 'date',
            yField: 'value',
            seriesField: 'name',
            label: {
                position: 'middle',
                layout: [
                    { type: 'interval-adjust-position' },
                    { type: 'interval-hide-overlap' },
                    { type: 'adjust-color' },
                ],
            },
        };
        const { RangePicker } = DatePicker;

        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="历史交易" key="1">
                    <Card title="交易告警信息列表">
                        <Row>
                            <Col span={20}><Table columns={columns1} dataSource={alarms} pagination={{ pageSize: 5 }} /></Col>
                        </Row>
                    </Card>
                </TabPane>
                <TabPane tab="统计信息" key="2">
                    <RangePicker/>
                    <Card title="交易统计" style={{ width: 1000 , marginTop:20}}>
                        <Column {...config} />
                    </Card>
                </TabPane>
            </Tabs>
        )
    }
}
