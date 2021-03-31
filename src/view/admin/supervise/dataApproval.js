import React, { Component } from 'react'
import { Row, Col, Input, Button, Table, Tag, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { randomHash, mockTime, JGInfo, UserInfo } from '../../../utils/mockData';
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
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '数据类别',
        dataIndex: 'type',
        key: 'type',
        render: type => {
            let color = type === "个人" ? 'geekblue' : 'green';
            return (
                <Tag color={color} key={type}>
                    {type.toUpperCase()}
                </Tag>
            );
        }
    },
    {
        title: '详情',
        key: 'detail',
        dataIndex: 'detail',
        render: () => (
            <>
                <a>详情</a>
            </>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary">通过</Button>
                <Button type="primary" danger>拒绝</Button>
            </Space>
        ),
    },
];
const data1 = [];
const mockData = () => {
    let count = 3;
    let time = 0;
    for (let i = 0; i < count; i++) {
        let rowData = {}
        rowData.hash = randomHash()
        rowData.addr = i % 2 === 1 ? JGInfo[i % JGInfo.length].addr : UserInfo[i % UserInfo.length].addr
        time = time + Math.ceil(Math.random() * 1000 * 60 * 60 * 64)
        rowData.name = i % 2 === 1 ? JGInfo[i % JGInfo.length].name : UserInfo[i % UserInfo.length].name
        rowData.type = i % 2 === 1 ? "机构数据索引" : "个人"
        rowData.time = mockTime(time)
        rowData.key = i;
        data1.push(rowData)
    }
}
export default class dataApproval extends Component {
    async componentWillMount() {
        mockData();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <label>操作名称：</label><Input style={{ width: 240 }}></Input>
                    </Col>
                    <Col span={6}>
                        <label>用户名：</label><Input style={{ width: 240 }}></Input>
                    </Col>
                    <Col span={8}>
                        <label>地址：</label><Input style={{ width: 240 }}></Input>
                        <Button style={{ marginLeft: 30 }} type="primary" icon={<SearchOutlined />} >查找</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: 30 }}>
                    <Col span={18}>
                        <Table columns={columns1} dataSource={data1} pagination={{ pageSize: 5 }} />
                    </Col>
                </Row>
            </div>
        )
    }
}
