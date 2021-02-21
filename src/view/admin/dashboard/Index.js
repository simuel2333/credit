import React, { Component } from 'react'
import { Card, Table } from 'antd'
import Web3 from 'web3'
export default class Index extends Component {
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert("Please use metamask!")
        }
    }
    getBlocks = async (start, end) => {

    }
    render() {
        const columns = [
            {
                title: "Txn Hash",
                dataIndex: "hash",
                key: "hash",
                align: "center",
                render: text => <a>{text}</a>,
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
                render: text => <a>{text}</a>,
            },
            {
                title: "To",
                key: "to",
                dataIndex: "to",
                align: "center",
                render: text => <a>{text}</a>,
            },
            {
                title: "Value",
                key: "value",
                dataIndex: "value",
                align: "center",
            },
            {
                title: "Txn Fee(Wei)",
                key: "fee",
                dataIndex: "fee",
                align: "center",
            }

        ]
        const data = [
            {
                hash: "0xf880c53da04e6a57b1a0e044...",
                block: 332,
                age: "30 minutes ago",
                from: "0x98AFb65649Dc81D2Cc3...",
                to: "0xc699C0A62306Ae685b...",
                value: "0",
                fee: "1000000"
            },{
                hash: "0x54F65416d8E31a89Ea37a564...",
                block: 331,
                age: "31 minutes ago",
                from: "0xF9dDf2eDc9c5339bcf01...",
                to: "0xB5b26Da79bc0f7b228...",
                value: "0",
                fee: "2000000"
            },{
                hash: "0x7d4073bD4Ed553AED8612C6...",
                block: 330,
                age: "31 minutes ago",
                from: "0x98AFb65649Dc81D2Cc3...",
                to: "0xc699C0A62306Ae685b...",
                value: "0",
                fee: "3000000"
            },{
                hash: "0xC7f4582D6C1d3D42528f2337...",
                block: 329,
                age: "33 minutes ago",
                from: "0x98AFb65649Dc81D2Cc3...",
                to: "0xc699C0A62306Ae685b...",
                value: "0",
                fee: "400000"
            },{
                hash: "0x71fdB91d53F63d1196825573...",
                block: 328,
                age: "33 minutes ago",
                from: "0x98AFb65649Dc81D2Cc3...",
                to: "0xc699C0A62306Ae685b...",
                value: "0",
                fee: "5000000"
            },
        ]

        return (
            <Card title="历史交易">
                <Table rowKey="id" columns={columns} dataSource={data} bordered />
            </Card>
        )
    }
}
