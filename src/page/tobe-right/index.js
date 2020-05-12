import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
 const  ToBe_right=()=>{
    return(
        <Layout style={{ padding: '0 24px 24px' }}>
    
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            Content
         </Content>
    </Layout>
    )
}
export default ToBe_right