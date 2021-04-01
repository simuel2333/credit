import React, { Component } from 'react'
import { Input, Row, Col, Button, Upload } from 'antd'
import { SearchOutlined, UploadOutlined } from '@ant-design/icons'
import './institution.css'
export class modelSearch extends Component {
    render() {

        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Input addonBefore="模型编号" />
                    </Col>
                    <Col span={4}>
                        <Upload>
                            <span style={{ marginLeft: 50 }}>特征参数：</span><Button icon={<UploadOutlined />}>上传</Button>
                        </Upload>
                    </Col>
                </Row>
                <Row style={{ marginTop: 30 }}>
                    <Col span={4}>
                        <Input addonBefore="模型名称" />
                    </Col>
                    <Col span={4}>
                        <Button type="primary" style={{ marginLeft: 50 }}><SearchOutlined />搜索</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: 30 }}>
                    <Col span={8}>
                        <div className="searchResultList">
                            搜索结果
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default modelSearch
