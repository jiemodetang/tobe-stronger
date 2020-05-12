import React, { Fragment, Children } from 'react';

// 资源
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.scss'

// 路径   
import ToBe_right from "../tobe-right";
import ToBe_left from "../tobe-left";
import ToBe_header from "../tobe-header";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Home = (props) => {
    console.log(props);

    return (
        <Fragment>
            <Layout style={{ height: '100%' }}>
                <ToBe_header />
                <Layout style={{ padding: '90px 50px' }}>
                    <ToBe_left />
                    <ToBe_right {...props.children}/>
                </Layout>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Fragment>
    )
}
export default Home