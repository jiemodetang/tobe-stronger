
import React, { useEffect, useState } from 'react';

import { useHistory} from 'react-router-dom';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const listData = [{
  href: 'http://ant.design',
  title: `react-router`,
  src:'https://reacttraining.com/react-router/web/example/basic',
  iframe:true,
  avatar: 'http://img0.imgtn.bdimg.com/it/u=1120032774,786114210&fm=26&gp=0.jpg',
  description:
    'react-router',
  content:
    '人生每天都要笑，生活的下一秒发生什么，我们谁也不知道。所以，放下心里的纠结，放下脑中的烦恼，放下生活的不愉快，活在当下。人生喜怒哀乐，百般形态，不如在心里全部淡然处之，轻轻一笑，让心更自在，生命更恒久。',
}];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `useState`,
    avatar: 'http://img0.imgtn.bdimg.com/it/u=1120032774,786114210&fm=26&gp=0.jpg ',
    description:
      '少壮不努力，老大徒伤悲',
    content:
      '现在每个我遇见的笑着的人，他们都不曾因为苦而放弃，他们只因扛而成长。谁不希望自己活得轻松，没有压力，一切随性，但如果你真的那样去做的话，你会发现这个世界都在和你作对。如果有一天你真的觉得自己轻松了，那也不是因为生活越来越容易了，而是因为我们越来越坚强',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const Index = (props) => {
  let history = useHistory()
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 7,
      }}
      dataSource={listData}
      footer={
        <div>
          <b>ant design</b> footer part
      </div>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          onClick={()=>{
            if(item.iframe){
              history.push('/iframe',{src:item.src})
            }else{
              history.push("/react_content/:123",{a:1})
            }
           
          }}
          extra={
            <img
              width={152}
              alt="logo"
              src={item.avatar}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            // title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  )
}
