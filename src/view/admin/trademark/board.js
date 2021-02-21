import React, { Component } from 'react'
import { Tabs, Card, Input, Table, Tag, Space, Descriptions, Badge, Image, Button, Row, Col ,InputNumber} from 'antd';

const { TabPane } = Tabs;
const { Search } = Input;
function callback(key) {
    console.log(key);
}
const onSearch = value => console.log(value);


export class board extends Component {


    render() {

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
                            <Descriptions.Item  span={3} label="当前出价">
                                ￥{demo.price}
                            </Descriptions.Item>
                            <Descriptions.Item label="出价">
                            <InputNumber min={10} max={99999999999} defaultValue={demo.price}/>
                                <br />
                                <Button style={{marginTop:10}} type="primary" danger>
                                    立即竞拍
                                </Button>
                            </Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
            </Card>
        );
        const data = [
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
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="商标查询" key="1">
                    <Card title="商标查询" extra={<Search placeholder="请输入商标名称" onSearch={onSearch} enterButton />}>
                        <Descriptions bordered>
                            <Descriptions.Item label="商标名称">
                                商标名称B
                            </Descriptions.Item>
                            <Descriptions.Item label="商标" span={2}><Image
                                width={200}
                                src="http://user-assets.sxlcdn.com/images/134173/FqFY9tCFWogu5bNwPwYtR4ro9rHH.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg"
                            />
                            </Descriptions.Item>
                            <Descriptions.Item label="国际分类">42-科学技术服务</Descriptions.Item>
                            <Descriptions.Item label="申请注册号">51326585</Descriptions.Item>
                            <Descriptions.Item label="申请日期" span={2}>
                                2020-2-1 08:00:00
    </Descriptions.Item>
                            <Descriptions.Item label="状态">
                                <Badge status="processing" text="尚未抵押" />
                            </Descriptions.Item>
                            <Descriptions.Item label="商标有效期" span={2}>
                                十年
                            </Descriptions.Item>
                            <Descriptions.Item label="商标估值">￥1,000,000.00</Descriptions.Item>
                            <Descriptions.Item label="贷款比例">20%</Descriptions.Item>
                            <Descriptions.Item label="抵押贷款金额">￥200,000.00</Descriptions.Item>
                            <Descriptions.Item label="商标交易记录">
                                2020-4-1 09:12:00
                                <br />
                                <a>商标拍卖</a>：A企业拍卖本商标
                                <br />
                                2020-5-8 19:12:00
                                <br />
                                <a>商标权变更</a>: A企业转移至B企业
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </TabPane>
                <TabPane tab="商标抵押" key="2">
                    <Card title="抵押列表" extra={<Button type="primary">新增抵押</Button>}>
                        <Table columns={columns} dataSource={data} />
                    </Card>
                </TabPane>
                <TabPane tab="商标拍卖" key="3">
                    <Card title="拍卖列表" extra={<Button type="primary">新增拍卖</Button>}>
                        <Space size={[50, 40]} wrap>
                            {listItems}
                        </Space>
                    </Card>
                </TabPane>
            </Tabs>
        )
    }
}

export default board
