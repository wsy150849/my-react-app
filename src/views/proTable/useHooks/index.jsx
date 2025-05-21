import './index.scss'
import { useState, useEffect } from 'react'
import { Table, Space, DatePicker, Button } from 'antd'
const useHooks = () => {
    const { RangePicker } = DatePicker

    const dataSource = [
        {
            key: "1",
            name: "胡彦斌",
            age: 32,
            address: "西湖区湖底公园1号"
        },
        {
            key: "2",
            name: "胡彦祖",
            age: 42,
            address: "西湖区湖底公园1号"
        },
        {
            key: "3",
            name: "刘彦祖",
            age: 18,
            address: "西湖区湖底公园1号"
        },
        {
            key: "4",
            name: "刘彦祖",
            age: 18,
            address: "翻斗大街翻斗花园二号楼1001室"
        },
        {
            key: "5",
            name: "刘彦祖",
            age: 18,
            address: "翻斗大街翻斗花园二号楼1001室"
        }
    ]
    const columns = [
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            align: "center"
        },
        {
            title: "年龄",
            dataIndex: "age",
            key: "age",
            align: "center"
        },
        {
            title: "住址",
            dataIndex: "address",
            key: "address",
            align: "center",
            width: "50%"
        }
    ]

    return (
        <div className="card content-box">
            <div className="date">
                <span>切换国际化的时候看我 😎 ：</span>
                <RangePicker />
            </div>
            <div className="auth">
                <Space>
                    <Button type="primary">新增</Button>
                    <Button type="primary">删除</Button>
                    <Button type="primary">编辑</Button>
                </Space>
            </div>
            <Table dataSource={dataSource} columns={columns} bordered/>
        </div>
    )
}

export default useHooks