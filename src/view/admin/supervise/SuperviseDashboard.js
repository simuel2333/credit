import React, { Component } from 'react'
import { Row, Col, Card, Table, Space, Button, Tabs, Tag } from 'antd'
import { Line } from '@ant-design/charts';
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
                            let color = tag=='异常' ? 'volcano' : 'green';
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
        const data1 = [
            {
                key: '1',
                hash: '0xf108b69990e9dd020989fca05294c6094e9e4e6f73754ee423e802ffb1485522',
                addr: '0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3',
                time: '2021-03-15 15:35:17',
                tags: ['索要授权'],
            },
            {
                key: '2',
                hash: '0xcc9e548f1b80b12149be04a6a4b3996dc922d4533fbf881355f7b2bf13e3e0c8',
                addr: '0x1eE48513e8b0fadcc523804d732d4A6E500D35F7',
                time: '2021-03-15 15:38:21',
                tags: ['索要授权'],
            },
            {
                key: '3',
                hash: '0xcaf6715938bafd7be114c8debccfc88be0f40e3586bde13985d940ebd25afd95',
                addr: '0x44ae50c1828da9d95aac4d596bb41404e7127908',
                time: '2021-03-16 16:29:27',
                tags: ['异常'],
            },
            {
                key: '4',
                hash: '0x40116a0eb505cf90b837154a5b32c75a6dc893a0f36561204b427e766608a5c6',
                addr: '0x8a0bc5db7e852d0a3184a03aea525ef91fbeb5fe',
                time: '2021-03-17 18:40:3',
                tags: ['联邦学习'],
            }
        ];
        return (

            <Tabs defaultActiveKey="1">
                <TabPane tab="历史交易" key="1">
                    <Card title="交易告警信息列表">
                        <Row>
                            <Col span={20}><Table columns={columns1} dataSource={data1} /></Col>
                        </Row>
                    </Card>
                </TabPane>
                <TabPane tab="统计信息" key="2">
                </TabPane>
            </Tabs>
        )
    }
}
