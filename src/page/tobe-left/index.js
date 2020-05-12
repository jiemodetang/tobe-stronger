


import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
 
]
const ToBe_left = () => {
    return (
        <Sider width={200} style={{background:'#fff',padding:'20px 50px'}}>
            <div>
                <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                <div>
                    {colors.map(color => (
                        <div key={color}>
                            <Badge color={color} text={color} />
                        </div>
                    ))}
                </div>
                <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                <div>
                    <Badge color="#f50" text="#f50" />
                    <br />
                    <Badge color="#2db7f5" text="#2db7f5" />
                    <br />
                    <Badge color="#87d068" text="#87d068" />
                    <br />
                    <Badge color="#108ee9" text="#108ee9" />
                </div>
            </div>
        </Sider>

    )
}
export default ToBe_left