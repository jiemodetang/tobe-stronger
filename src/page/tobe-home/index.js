import React, { Fragment } from 'react';

// 资源
import { Layout } from 'antd';
import './index.scss'

// 路径   
import ToBe_right from "../tobe-right";
import ToBe_left from "../tobe-left";
import ToBe_header from "../tobe-header";
const { Footer } = Layout;
const Home = (props) => {
    const { children } = props
    return (
        <Fragment>
            <Layout style={{ height: '100%' }}>
                <ToBe_header />
                <Layout style={{ padding: '70px 50px 0px 50px' }}>
                    <ToBe_left />
                    <ToBe_right children={children} />
                </Layout>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Fragment>
    )
}
export default Home