import React, { useState } from 'react';
import { BsBoxes } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { GoStack } from "react-icons/go";
import { RiImageCircleLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Logo from '../Auth/Images/Logo.png'
import{ Grid ,Row,Col}from"antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined ,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme ,Select, Space } from 'antd';

const { Header, Sider, Content } = Layout;


const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:"100vh",width:"100vw"}}>
      <Sider  trigger={null} collapsible collapsed={collapsed}>
        <div  className="demo-logo-vertical" />
        <div style={{display:'flex',alignItems:'center' ,justifyContent: collapsed===true ? 'center' : ''        }}> 
            <img src={Logo} style={{padding:'50px 0 ', width:30}}></img>
        {collapsed === false ?<span style={{marginLeft:"7px",letterSpacing: '4px',color:'white'}}>BREATHE ESG </span> : <></>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <BarChartOutlined />,
              label: 'Dashbaord',
            },
            {
              key: '2',
              icon: <BsBoxes />,
              label: 'Entity Manager',
            },
            {
              key: '3',
              icon: <MdOutlinePieChartOutline />,
              label: 'Data Manager',
            },
            {
              key: '4',
              icon: <SiGoogledocs />,
              label: 'Reporting',
            },
            {
              key: '5',
              icon: <GoStack />,
              label: 'Materiality',
            },
            {
              key: '6',
              icon: <RiImageCircleLine />,
              label: 'Suppliers',
            },
            {
              key: '7',
              icon: <IoAnalyticsSharp />,
              label: 'Analytics',
            },
            {
              key: '8',
              icon: <TbTargetArrow />,
              label: 'Targets',
            },
            {
              key: '9',
              icon: <FiLogOut color='red' />,
              label: <span style={{color:'red'}}>Logout</span>,
            },
          ]}
        />
      </Sider>

      <Layout style={{height:"10vh",display:'flex'}}>
        <Header style={{ padding: 0,top:0 ,backgroundColor:'white',display:'flex',}}>

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '6px',
              width: 50,
              height: 50,
            }}
          />
<div 
style={{display:'flex',width:"100%",alignItems:'center',  justifyContent:'space-between'}}>
<div>      
        <span><img src={Logo} style={{width:20 }} alt="" />View Name : </span>
          <Space wrap>
    <Select
      defaultValue="North India Region"
      style={{ width: 120 }}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
  </Space></div>

  <div>  <CiBellOn/>   CHETAN    <FaRegUserCircle/>  </div>
  </div>

   
        </Header>

        <Content
          style={{
            margin: '5% 0',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;