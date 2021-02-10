import React, { Component } from 'react'
import { Card, Table} from 'antd'

export default class Index extends Component {
    render() {
        const columns = [
            {
                title: "Txn Hash",
                dataIndex: "hash",
                key: "hash",
                align: "center",
            },
            {
                title: "Block",
                dataIndex: "block",
                key: "block",
                align: "center",
            },
            {
                title: "Age",
                key: "age",
                dataIndex: "age",
                align: "center",
            },
            {
                title: "From",
                key: "from",
                dataIndex: "from",
                align: "center",
            },
            {
                title: "To",
                key: "to",
                dataIndex: "to",
                align: "center",
            },
            {
                title: "Value",
                key: "value",
                dataIndex: "value",
                align: "center",
            },
            {
                title: "Txn Fee",
                key: "fee",
                dataIndex: "fee",
                align: "center",
            }
            
        ]
        const data =[
            {
                hash:"0xf880c53da04e6a57b1a0e044f5b7bda78d24852ff2615e480baade0ed1cc6085",
                block: 8038089,
                age: "30 secs ago",
                from: "0x98AFb65649Dc81D2Cc3B9F0D912b86CaA2E823B2",
                to: "0xc699C0A62306Ae685b41bA26FeaF851754C99BE0",
                value: "0",
                fee: "100"
            }
        ]
        return (
            <Card title="历史交易">
                <Table rowKey="id" columns={columns} dataSource={data} bordered />
            </Card>
        )
    }
}
