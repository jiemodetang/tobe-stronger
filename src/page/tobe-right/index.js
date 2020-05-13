import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;
const ToBe_right = (props) => {
    const { children } = props
    console.log(document.querySelector('body'));
    
    return (
        <Layout style={{ margin: '0 24px 0 24px', background: '#fff',  }}>
            <Content
                className="site-layout-background"
                style={{
                    margin: 0,
                    minHeight:'400px',
                }}
            >
                {children}
            </Content>

        </Layout>
    )
}
export default ToBe_right