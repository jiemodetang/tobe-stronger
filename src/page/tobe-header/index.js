import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.scss'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const ToBe_header = () => {
    return (
        <Header className="header" style={{ background: '#fff',position: 'fixed', zIndex: 1, width: '100%'  }}>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to='/home/parent'>react-hook </Link></Menu.Item>
            <Menu.Item key="2">吹逼环节</Menu.Item>
            {/* <Menu.Item key="3">nav 3</Menu.Item> */}
        </Menu>
    </Header>

    );
}

export default ToBe_header