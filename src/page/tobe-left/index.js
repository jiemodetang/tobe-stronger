


import React, { Component } from 'react';
import { Avatar, message } from 'antd';
import './tobe-left.scss'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'green',
    'purple',
    'gold',
];
const ToBe_left = () => {
    const list = [{
        "_id": "5cf37d2874289f3d47ed1468",
        "name": "数据结构与算法"
    }, {
        "_id": "5cd6929974289f3d47ed13e8",
        "name": "vue-router"
    }, {
        "_id": "5cab59b566f24111e0f2ee59",
        "name": "理财"
    }, {
        "_id": "5c8cadaeb87b8a04f1860c9e",
        "name": "performance"
    }, {
        "_id": "5bf4b78a245730373274df59",
        "name": "浏览器内核"
    }, {
        "_id": "5bf405e1245730373274df55",
        "name": "react.js"
    }, {
        "_id": "5bf405d6245730373274df54",
        "name": "vue.js"
    }, {
        "_id": "5bf01438bc1e7805eb83dba3",
        "name": "简历"
    }, {
        "_id": "5bf01431bc1e7805eb83dba2",
        "name": "关于博主"
    }, {
        "_id": "5bf01425bc1e7805eb83dba1",
        "name": "vuex"
    }, {
        "_id": "5bf0141cbc1e7805eb83dba0",
        "name": "webpack"
    }, {
        "_id": "5bf013dcbc1e7805eb83db9e",
        "name": "mongodb"
    }, {
        "_id": "5bf013d2bc1e7805eb83db9d",
        "name": "随笔"
    }, {
        "_id": "5bf013c2bc1e7805eb83db9b",
        "name": "express"
    }, {
        "_id": "5bf013bbbc1e7805eb83db9a",
        "name": "node"
    }, {
        "_id": "5bf013a6bc1e7805eb83db97",
        "name": "javaScript"
    }].map((item, i) => (
        <span key={item._id} className="item" style={{ background: colors[Math.floor(Math.random() * (colors.length - 1) + 0)] }}>{item.name}</span>
    ));
    return (
        <Sider width={300} style={{ background: '#fff', padding: '10px' }}>
            <div className="right"  >
                <Avatar className="right-logo" src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3832429334,1089079337&fm=11&gp=0.jpg' size={130} icon="user" />
                <div className="title">toBe</div>
                <div className="right-content">
                </div>
                <div className="tags">
                    <div className="title">标签云</div>
                    {list}
                </div>

                <Menu
                    mode="inline"
                    // openKeys={this.s}
                    // onOpenChange={this.onOpenChange}
                    // style={{ width: 256 }}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <MailOutlined />
                                <span>工具类</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">
                            <Link to='/online-editing'>在线编辑</Link>
                        </Menu.Item>
                        
                    </SubMenu>
                </Menu>






                <div className="introduce">
                    <div className="title">Dj</div>
                    <div className="content">
                        <img style={{ 'width': '100%' }} src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1375079898,2192941505&fm=11&gp=0.jpg' alt="全栈修炼" />
                    </div>
                </div>
                <div className="introduce">
                    <div className="title">go</div>
                    <div className="content">
                        <img style={{ 'width': '100%' }} src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2109373657,2252917049&fm=11&gp=0.jpg' alt="硬核杂货铺" />
                    </div>
                </div>
            </div>
        </Sider>

    )
}
export default ToBe_left