
import React, { Fragment } from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const dongcidaci = () => {
    let data = []
    let str =
    <Timeline mode="alternate" style={{paddingTop:'10px'}}>
        <Timeline.Item>我要做渣男  2015-09-01</Timeline.Item>
        <Timeline.Item color="green"> 你好我是你爹2015-09-01</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}  />}>

        </Timeline.Item>
        <Timeline.Item color="red" position='right' >  2015-09-01</Timeline.Item>
        <Timeline.Item>  2015-09-01</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            2015-09-01 一百万开始
         </Timeline.Item>
    </Timeline>
    for (let i = 0; i < 15; i++) {
        data.push(str)
    }
    return data

}
export const Project_time_line = () => {
    return (
            dongcidaci()
    )

}