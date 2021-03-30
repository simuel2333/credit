import React, { Component } from 'react'
import { Card, Tabs, Table, Tag, Space, Button } from 'antd';

const { TabPane } = Tabs;
export default class creditGrant extends Component {
    render() {
        const columns1 = [
            {
                title: '机构名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '地址',
                dataIndex: 'addr',
                key: 'addr',
                render: text => <a>{text}</a>,
            },
            {
                title: '请求时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary">同意</Button>
                        <Button type="primary" danger>拒绝</Button>
                    </Space>
                ),
            },
        ];
        const columns2 = [
            {
                title: '机构名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '地址',
                dataIndex: 'addr',
                key: 'addr',
                render: text => <a>{text}</a>,
            },
            {
                title: '授权时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary">撤销授权</Button>
                    </Space>
                ),
            },
        ];

        const data1 = [
            {
                key: '1',
                name: '金融机构B',
                addr: '0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3',
                time: '2021-03-15 15:35:17',
            },
            {
                key: '2',
                name: '金融机构C',
                addr: '0x1eE48513e8b0fadcc523804d732d4A6E500D35F7',
                time: '2021-03-15 15:38:21',
            }
        ];

        const data2 = [
            {
                key: '1',
                name: '金融机构A',
                addr: '0xFF96130267Ec9d9311b569B17756d4634504cF56',
                time: '2021-03-14 18:25:13',
            }
        ];
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="待授权列表" key="1">
                    <Table style={{ width: 1000 }} columns={columns1} dataSource={data1} />
                </TabPane>
                <TabPane tab="已授权授权" key="2">
                    <Table style={{ width: 1000 }} columns={columns2} dataSource={data2} />
                </TabPane>
            </Tabs>
        )
    }
}
