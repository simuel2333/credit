import React, { Component } from 'react'
import { Tabs, Card, Input, Button, Table, Popconfirm } from 'antd';

const { TabPane } = Tabs;
const { Search } = Input;
function callback(key) {
    console.log(key);
}
const onSearch = value => console.log(value);
const columns = [
    {
        title: "序号",
        key: "id",
        width: 80,
        align: "center",
        render: (txt, row, index) => index + 1
    },
    {
        title: "商品名",
        dataIndex: "name",
        key: "name",
        align: "center",
    },
    {
        title: "价格",
        key: "price",
        dataIndex: "price",
        align: "center",
    },
    {
        title: "操作",
        key: "operate",
        align: "center",
        render: (txt, row, index) => {
            return (
                <div>
                    <Button type="primary" size="small">修改</Button>
                    <Popconfirm
                        title="确定删除此项?"
                        onCancel={() => console.log("用户取消删除!")}
                        onConfirm={() => {
                            console.log("用户确认删除!");
                            //调用删除api
                        }}>
                        <Button style={{ margin: "0 1rem" }} type="danger" size="small">删除</Button>
                    </Popconfirm>
                </div>
            );
        }
    }
];
const data = [
    {
        id: 1,
        name: "苹果",
        price: 1.5,
    },
    {
        id: 2,
        name: "香蕉",
        price: 2.2,
    },
    {
        id: 3,
        name: "西瓜",
        price: 5,
    }
]
export class board extends Component {


    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="商标查询" key="1">
                    <Card title="商标查询" extra={<Search placeholder="请输入商标名称" onSearch={onSearch} enterButton />}>
                        <Table rowKey="id" columns={columns} dataSource={data} bordered />
                    </Card>
                </TabPane>
                <TabPane tab="商标抵押" key="2">
                    商标抵押
            </TabPane>
                <TabPane tab="商标拍卖" key="3">
                    商标拍卖
            </TabPane>
            </Tabs>
        )
    }
}

export default board
