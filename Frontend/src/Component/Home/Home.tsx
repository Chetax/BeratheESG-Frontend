import React, { useState } from "react";
import { BsBoxes } from "react-icons/bs";
import { CiBellOn,CiShare2 } from "react-icons/ci";
import { MdOutlinePieChartOutline,MdDeleteOutline } from "react-icons/md";
import { FaRegUserCircle ,FaBuilding} from "react-icons/fa";
import { SiGoogledocs,SiPivotaltracker } from "react-icons/si";
import { GoStack } from "react-icons/go";
import { RiImageCircleLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Logo from "../Auth/Images/Logo.png";
import {  MenuFoldOutlined,  MenuUnfoldOutlined,  BarChartOutlined,} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Select, Space, Table, Tag } from "antd";
import type { TableProps } from 'antd';
interface DataType {
  key: string;
  name: string;
  type: string;
  supplier: number;
  score: number ;
  risk: string;
  status: string;
  result: string | undefined;
  action: undefined;
}
const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [dataentry,setdataentry]=useState<boolean>(true);
  const { token: { colorBgContainer, borderRadiusLG },} = theme.useToken();

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Checkbox',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <input style={{color:"rgba(79, 165, 86, 1)"}} type="checkbox"></input>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a style={{color:"rgba(79, 165, 86, 1)"}}>{text}</a>,
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'NO. OF SUPPLIERS',
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: 'SCORE',
      dataIndex: 'score',
      key: 'score',
      render: (text) => text===0 ?<p>-</p> : <p>{text}</p>,
    },
    {
      title: 'RISK CLASSIFICATION',
      dataIndex: 'risk',
      key: 'risk',
      render: (text) => <div style={{display:"flex",alignItems:'center'}}>
        <>{ text==="Low"?<div style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"rgba(46, 152, 68, 1)"}}></div> : text==="Medium" ? <div style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"rgba(240, 153, 72, 1)"}}></div> :   <div style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"rgba(237, 98, 98, 1)"}}></div>}</>
      <p style={{marginLeft:"10px"}}>{text}</p></div>,
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <Button style={{color: text==="pending" ?"rgba(240, 79, 109, 1)" :"rgba(79, 165, 86, 1)"}} >{text}</Button>,
    },
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
      render: (text) => <a  style={{color:"rgba(79, 165, 86, 1)"}}>{text}</a>,
    },
    {
      title: 'ACTIONS',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <a style={{marginRight:"20px"}}><CiShare2 fontSize={"20px"} /></a>
          <a><MdDeleteOutline  fontSize={"20px"}/></a>
        </>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'Assessment 1',
      type:"BRSR",
      supplier:20,
      score:0,
      risk:"Medium",
      status:"pending",
      result:undefined,
      action:undefined,
    }
    ,{
      key: '2',
      name: 'Assessment 2',
      type:"BRSR",
      supplier:25,
      score:98,
      risk:"Low",
      status:"complete",
      result:"View",
      action:undefined,
    }
    ,{
      key: '3',
      name: 'Assessment 3',
      type:"BRSR",
      supplier:35,
      score:22,
      risk:"High",
      status:"complete",
      result:"View",
      action:undefined,
    }
    ,{
      key: '4',
      name: 'Assessment 3',
      type:"Custom",
      supplier:49,
      score:23,
      risk:"Medium",
      status:"complete",
      result:"View",
      action:undefined,
    }
    ,{
      key: '5',
      name: 'Assessment 3',
      type:"Custom",
      supplier:100,
      score:42,
      risk:"Medium",
      status:"complete",
      result:"View",
      action:undefined,
    }
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed === true ? "center" : "",
          }}
        >
          <img src={Logo} style={{ padding: "50px 0 ", width: 30 }}></img>
          {collapsed === false ? (
            <span
              style={{
                marginLeft: "7px",
                letterSpacing: "4px",
                color: "white",
              }}
            >
              BREATHE ESG{" "}
            </span>
          ) : (
            <></>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <BarChartOutlined />,
              label: "Dashbaord",
            },
            {
              key: "2",
              icon: <BsBoxes />,
              label: "Entity Manager",
            },
            {
              key: "3",
              icon: <MdOutlinePieChartOutline />,
              label: "Data Manager",
            },
            {
              key: "4",
              icon: <SiGoogledocs />,
              label: "Reporting",
            },
            {
              key: "5",
              icon: <GoStack />,
              label: "Materiality",
            },
            {
              key: "6",
              icon: <RiImageCircleLine />,
              label: "Suppliers",
            },
            {
              key: "7",
              icon: <IoAnalyticsSharp />,
              label: "Analytics",
            },
            {
              key: "8",
              icon: <TbTargetArrow />,
              label: "Targets",
            },
            {
              key: "9",
              icon: <FiLogOut color="red" />,
              label: <span style={{ color: "red" }}>Logout</span>,
            },
          ]}
        />
      </Sider>

      <Layout style={{ height: "100vh", display: "flex" }}>
        <Header style={{ padding: 0, top: 0, backgroundColor: "white", display: "flex" }}  >
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "10px",
              marginTop: "5px",
              width: 50,
              height: 50,
            }}
          /> 
          <div
            style={{
              display: "flex",
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            
            <div style={{ padding: "0px 35px" }}>
              <span>
                <img src={Logo} style={{ width: 20 }} alt="" />
                View Name :{" "}
              </span>
              <Space wrap>
                <Select
                  defaultValue="North India Region"
                  style={{ width: 180 }}
                  options={[
                    {
                      value: "South India Region",
                      label: "South India Region",
                    },
                    {
                      value: "North India Region",
                      label: "North India Region",
                    },
                    { value: "East India Region", label: "East India Region" },
                    { value: "West India Region", label: "West India Region" },
                  ]}
                />
              </Space>
            </div>

            <div>
              {" "}
              <CiBellOn fontSize={"20px"} />{" "}
              <span style={{ fontSize: "18px" }}>CHETAN</span>{" "}
              <FaRegUserCircle fontSize={"20px"} />{" "}
            </div>


          </div>
          
        </Header>

        <Content style={{ marginTop:'2px',backgroundColor:'white',borderRadius: borderRadiusLG,height:"50vh"}}>
       
        <div style={{padding:"15px 0px", display:'flex',alignContent:'center',justifyContent:"space-between"}}>

          <div className="first">
           
            <Button type="text" onClick={()=>setdataentry(true)}style={{color: dataentry===true ? "rgba(79, 165, 86, 1)":"rgba(24, 24, 24, 1)" }}><FaBuilding/> <span style={{textTransform:"uppercase"}}>DATA ENTRY</span></Button>
            <Button type="text" onClick={()=>setdataentry(false)} style={{color: dataentry===false ? "rgba(79, 165, 86, 1)":"rgba(24, 24, 24, 1)"}}><SiPivotaltracker/> <span style={{textTransform:"uppercase"}}>TRACKER</span></Button>
          </div>
          <div className="second">
      
            <span>

               For :
              </span>
              <Space wrap>
                <Select
                  defaultValue="FY 2023-24"
                  style={{ width: 180 }}
                  options={[
                    {
                      value: "FY 2023-24",
                      label: "FY 2023-24",
                    },
                    {
                      value: "SY 2024-25",
                      label: "SY 2024-25",
                    },
                    { value: "TY 2025-26", label: "TY 2025-26" },
                    { value: "LY 2026-20227", label: "LY 2026-20227" },
                  ]}
                />
              </Space>

   <Button type="primary" style={{ margin:"0 10px", backgroundColor:'rgba(46, 152, 68, 1)',color:"white"}}>Submit for Approval</Button>         

          </div>
        </div>


        <Table columns={columns} dataSource={data} />;


        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
