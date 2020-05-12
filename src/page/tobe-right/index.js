import React from 'react';
import { Layout } from 'antd';
const ToBe_right = (props) => {
    const { children } = props
    return (
        <Layout style={{ margin: '0 24px 24px',background:'#fff',padding:'20px' }}>
            {children}
        </Layout>
    )
}
export default ToBe_right