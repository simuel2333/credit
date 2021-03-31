import React, { Component } from 'react'
import {Card, Table, Button, Tag, Space} from 'antd'
import { randomHash, mockTime } from '../../../utils/mockData';


export default class certificateApprove extends Component {
 
    render() {
        const data1 = [{
            hash: randomHash(),
            addr : "0x8a0Bc5Db7E852d0A3184A03AEA525Ef91FbEB5fE",
            time: mockTime(1000000),
            
        }]
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
        
        return (
            <div>
                <Card title="新注册用户">
                <Table columns={columns1} dataSource={data1} pagination={{ pageSize: 5 }} />
                </Card>
            </div>
        )
    }
}
