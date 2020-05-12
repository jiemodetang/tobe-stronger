import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Home from '../tobe-home'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const ToBe_right = (prop) => {
    const { props } = prop
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                {props.children}
            </Content>
        </Layout>
    )
}
export default ToBe_right