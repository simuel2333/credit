import React, { Component } from 'react'
import { Tabs, Card, Input, Table, Spin, Tag, Space, Descriptions, Badge, Image, Button, Row, Col, InputNumber, Modal, Form, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { post } from '../../../utils/request'
const { TabPane } = Tabs;
const { Search } = Input;
function callback(key) {
    console.log(key);
}

const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export class board extends Component {
    state = { isModalVisible: false, buffer: null, trades:[] , searchShow: "none"};
    onSearch = value => {
        console.log(value);
        this.setState({searchShow: ""})
    }
    async componentWillMount() {
        await this.queryAllTradeMark()
    }
    queryAllTradeMark = () => {
        post("/mark/queryTradeMark").then(res => {

            for (let i = 0; i < res.data.length; i++) {
                let trade = {}
                let e = JSON.parse(res.data[i])
                trade.key = i
                trade.name = e.name
                trade.img = <Image
                    width={30}
                    src={'data:image/png;base64,' + e.img}
                />
                trade.loanCount = e.price
                trade.tags = ['还未还款']
                let trades =[...this.state.trades]
                trades.push(trade)
                this.setState({trades: trades})
            }
        })
            .catch(err => {
                console.error(err);
            })
    }
    
    data = [
        {
            key: '1',
            name: '企业B',
            img: <Image
                width={100}
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2766570908,1262039494&fm=26&gp=0.jpg"
            />,
            loanCount: '￥10,000.00',
            tags: ['按时还款'],
        },
        {
            key: '2',
            name: '企业A',
            img: <Image
                width={100}
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1040649913,240362369&fm=26&gp=0.jpg"
            />,
            loanCount: '￥20,000.00',
            tags: ['已还完贷款'],
        },
        {
            key: '3',
            name: '企业E',
            img: <Image
                width={100}
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2012532626,1883598624&fm=26&gp=0.jpg"
            />,
            loanCount: '￥30,000.00',
            tags: ['有违约'],
        },
    ];

    captureFile = (event) => {
        event.preventDefault()
        console.log("capture file...")
        console.log(event.target.files[0])
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) })
        }
    }

    base64_encode = (buffer) => {
        return buffer.toString('base64')
    }

    base64_decode = (str) => {
        return Buffer(str, "base64")
    }
    render() {

        const onFinish = (value) => {
            post("/mark/addTradeMark", {
                name: value.name,
                price: value.price,
                img: this.base64_encode(this.state.buffer)
            }).then(res => {
                if (res.data !== "success") {
                    message.error("图片太大,请勿超过64kb");
                } else {
                    message.info("添加成功");
                    this.queryAllTradeMark()
                }
            })
                .catch(err => {
                    message.error("出错");
                    console.error(err);
                })
        };

        const addMortgage = () => {
            this.setState({
                isModalVisible: true,
            });
        }

        const handleOk = () => {
            this.setState({
                isModalVisible: false,
            });
        };

        const handleCancel = () => {
            this.setState({
                isModalVisible: false,
            });
        };

        const columns = [
            {
                title: '商标名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '商标图片',
                dataIndex: 'img',
                key: 'img',
            },
            {
                title: '贷款额度',
                dataIndex: 'loanCount',
                key: 'loanCount',
            },
            {
                title: '还款状态',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = 'green';
                            if (tag === '已还完贷款') {
                                color = 'geekblue';
                            } else if (tag === "有违约") {
                                color = 'volcano';
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
                        <a>详情</a>
                    </Space>
                ),
            },
        ];
        const demos = [
            {
                title: "商标A",
                url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=320469340,3459560807&fm=26&gp=0.jpg",
                price: "500000"
            },
            {
                title: "商标B",
                url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1682242192,1564971825&fm=26&gp=0.jpg",
                price: "2100000"
            },
            {
                title: "商标C",
                url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1138007205,593731000&fm=26&gp=0.jpg",
                price: "800000"
            },
            {
                title: "商标D",
                url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2212606782,3586395335&fm=26&gp=0.jpg",
                price: "1000000"
            }
        ];
        const listItems = demos.map((demo) =>
            <Card
                hoverable
                style={{ width: 700 }}
            >
                <Row>
                    <Col span={12}>
                        <Image width={250} src={demo.url} />
                    </Col>
                    <Col span={12}>
                        <Descriptions bordered>
                            <Descriptions.Item span={3} label="当前出价">
                                ￥{demo.price}
                            </Descriptions.Item>
                            <Descriptions.Item label="出价">
                                <InputNumber min={10} max={99999999999} defaultValue={demo.price} />
                                <br />
                                <Button style={{ marginTop: 10 }} type="primary" danger>
                                    立即竞拍
                                </Button>
                            </Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
            </Card>
        );

        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="商标抵押" key="1">
                    <Card title="抵押列表" extra={<Button type="primary" onClick={addMortgage}>新增抵押</Button>}>
                        <Table columns={columns} dataSource={this.state.trades} />
                        <Modal title="新增商标抵押" visible={this.state.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
                                <Form.Item name="name" label="商标名称">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="price" label="价格">
                                    <InputNumber min={10} max={99999999999} />
                                </Form.Item>
                                <Form.Item name="img" label="商标图片">
                                    <input type="file" onChange={this.captureFile} />
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{
                                        xs: { span: 24, offset: 0 },
                                        sm: { span: 16, offset: 8 },
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Modal>
                    </Card>
                </TabPane>
                <TabPane tab="商标查询" key="2">
                    <Card title="商标查询" extra={<Search placeholder="请输入商标名称" onSearch={this.onSearch} enterButton />}>
                        <Descriptions bordered  style={{display: this.state.searchShow}}>
                            <Descriptions.Item label="商标名称">
                                相机生产企业公司
                            </Descriptions.Item>
                            <Descriptions.Item label="商标" span={2}><Image
                                width={200}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADwklEQVRYR+2WTWhcVRTHf+dNmoABP6p17owuqujCVqWYigrRpi6kFelCKYgVMndcFDcVRFxoUQSNlViiLsQUM2+SCGKDEFdZFGnjB1K0qNEUK0i7iMl7DfFjUS2deffKe+NM3mRmMlMn2E3f8r5zzv3d//m4V7jEn1zi/bkM0LoC42dvoRjMgnS2njZ7HpwD6OQrjXxaB3A9i5itZNInKsHchb66gXXqWGU9550jq7rXBkCrZeAQCJmoDWxmsZImq/ZG/0K7uN8Kh4tToDWAkyDb0Gr7GgP4v6OT11QOMOrfiTHrm6YgUspuJ56WmFNM0tNXQ1cfOM+U/ttRSHwHxXBtAOSN1YqpYWF+sHQjhcIvWPKImUKnJ+O28Zy+jnCajDoUGYwuPoIpfgzsR6cGW6/8Bpa5pU3IhW/Rqa5GAEW06qhyd/0fsTJI9vrRmrDD81fQyWOQuAPMZqzMgf0BMafQNxypi1GnIOMKHK0UTkibvfYkrncUzCfo9FtVAfPzPVjnC7AvYe0MnV1fERiFDXqwshOxHWTUEzUQIYC1U4hzvJzOagAxz2Gdb4AzIHmwfTUAOf9pxN6GVvsapsVd2A1yuKb9ygrElFgBwIdYSeE4JzDBAWCxCmD4t6vovPApWm0ttZj/MrAH7K0VmHKrjnm3E0gvOvne8uD6dyY0BAh7Nwpqd0PxSegYqgLIewUMvWTVcVxvBJhBq7eXp15YaIXZysnDjYxs4ank91UzYVWAuK4ra8D1z6GT3bhemN/X0OqmmjS8/+d6En8vRRDu3BboeBitBtoHGPHvI2HvJqPeIe8dwZoxdHq8abXnvAJZta59gCg1ZjqaaE3mO65/GMwEOjVRZdu0CMvzu3yseAriCrj+JGKnyaih/0+BUtWXaqDUDX/UveVy3j0IB9Gqd21rIALwAgh2RJMu7+3Csh9kAJ2cZHwxRcE+hGP6yagHI2XC/Cekh/7kTPs1UEmLH6CTidIGi9twgkex7AOZBw5VLqzwLgmCbrLqo4ubA6u1YUmFe7GM45jHq15HVX7+GLABndxZfbe0MoiaAYT/h+06Os8Ogb0O5DOsmQC5GZEdwIsIL5BJvln3Lojmw/Irqf5lVJF7YQprvySbfrV+tS9shMQmCDYjMoc4P3G+eIq96b8adgccA/s1OvV8aBMDiPV5lN9f7wJnGiGUcxCdOlM3aKuL0QNWnkWrXXGXGEBo4PSD3VgykAfA7kG4EngXy+et7lVjJ9yPYYRE4iD9G36uD/Cfo7fn2PqruL19GnpfBvgHJ4sUPz8WKJQAAAAASUVORK5CYII="
                            />
                            </Descriptions.Item>
                            <Descriptions.Item label="国际分类">制造业</Descriptions.Item>
                            <Descriptions.Item label="申请注册号">51326585</Descriptions.Item>
                            <Descriptions.Item label="申请日期" span={2}>
                                2021-3-15
    </Descriptions.Item>
                            <Descriptions.Item label="状态">
                                <Badge status="processing" text="尚未还款" />
                            </Descriptions.Item>
                            <Descriptions.Item label="商标有效期" span={2}>
                                十年
                            </Descriptions.Item>
                            <Descriptions.Item label="商标估值">￥100,000.00</Descriptions.Item>
                            <Descriptions.Item label="贷款比例">50%</Descriptions.Item>
                            <Descriptions.Item label="抵押贷款金额">￥60,000.00</Descriptions.Item>
                            <Descriptions.Item label="商标交易记录">
                                2020-4-1 09:12:00
                                <br />
                                <a>商标拍卖</a>：A企业拍卖本商标
                                <br />
                                2020-5-8 19:12:00
                                <br />
                                <a>商标权变更</a>: A企业转移至相机生产公司
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </TabPane>
                {/* <TabPane tab="商标拍卖" key="3">
                    <Card title="拍卖列表" extra={<Button type="primary">新增拍卖</Button>}>
                        <Space size={[50, 40]} wrap>
                            {listItems}
                        </Space>
                    </Card>
                </TabPane> */}
            </Tabs>
        )
    }
}

export default board
