import React, { Fragment } from 'react';

// 资源
import { Layout } from 'antd';
import './index.scss'

// 路径   
import ToBe_right from "../tobe-right";
import ToBe_left from "../tobe-left";
import ToBe_header from "../tobe-header";
const { Footer, Content } = Layout;
const Home = (props) => {
    const { children } = props
    return (
        <Fragment>
            <Layout>
                <ToBe_header />
                <Content>
                    <Layout className="site-layout" style={{ padding: '0 50px', marginTop: 80 }}>
                        <ToBe_left />
                        <ToBe_right children={children} />
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>toBe-better-man ©2018 Created by one</Footer>
            </Layout>
        </Fragment>
    )
}
export default Home