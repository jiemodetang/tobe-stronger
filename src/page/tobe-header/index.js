import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const ToBe_header = () => {
    return (
        <Header className="header" style={{ background: '#fff', position: 'fixed', zIndex: 1, width: '100%' }}>
            {/* <div className="logo" /> */}
            <img src="http://www.logofree.cn/uploads/image/20180929/14/3-58_3299.jpg" alt=""  className="logo"/>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/home'>react-hook </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/home/project_time_line'>项目时间线</Link>
                </Menu.Item>
                {/* <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
        </Header>

    );
}

export default ToBe_header