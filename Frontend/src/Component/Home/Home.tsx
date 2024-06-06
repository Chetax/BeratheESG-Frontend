import React, { useState } from "react";
import Cookies from 'js-cookie'; 
import { BsBoxes } from "react-icons/bs";
import { CiBellOn,CiShare2 } from "react-icons/ci";
import { MdOutlinePieChartOutline,MdDeleteOutline } from "react-icons/md";
import { FaRegUserCircle ,FaBuilding} from "react-icons/fa";
import { setUser } from '../../Redux/userSlice';
import { SiGoogledocs,SiPivotaltracker } from "react-icons/si";
import { LuMessageSquarePlus } from "react-icons/lu";
import { LuGoal } from "react-icons/lu";
import { GoStack } from "react-icons/go";
import { RiImageCircleLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Logo from "../Auth/Images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store"
import {  MenuFoldOutlined,  MenuUnfoldOutlined,  BarChartOutlined,SearchOutlined} from "@ant-design/icons";
import { Button, Layout, Card,Menu, theme, Select, Space, Table, Tag,Input } from "antd";
import type { TableProps } from 'antd';
import { useNavigate } from "react-router-dom";
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
interface TrackerData{
  month:string;
  status: string;
  complition:string;
  business:string;
}
interface UserState {
  username: string;
  id: string;
}
const { Header, Sider, Content } = Layout;
const { Meta } = Card;
const { Search } = Input;
const Home: React.FC = () => {
  const usernamebycookie = Cookies.get('username');
  const redirect=useNavigate();
  const dispatch = useDispatch();
console.log(usernamebycookie)

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
  const column2:TableProps<TrackerData>['columns']=[
    {
      title: 'MONTH',
      dataIndex: 'month',
      key: 'month',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'COMPLETION %',
      dataIndex: 'complition',
      key: 'complition',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'business unit ',
      dataIndex: 'business',
      key: 'business',
      render: (text) => <p>{text}</p>,
    },
  ]
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
  const Trackerdata:TrackerData[]=[
    {
      month:"Jan 2023",
      status:"PENDING APPROVAL (1/12)",
      complition:"20%",
      business:"Business Unit 1",
    },
    {
      month:"Feb 2023",
      status:"APPROVED (2/12)",
      complition:"30%",
      business:"Business Unit 1",
    },
    {
      month:"Mar 2023",
      status:"INCOMPLETE (4/12)",
      complition:"50%",
      business:"Business Unit 1",
    },
  ]
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
          onClick={(e)=>{
            if(e.key==="9"){
              Cookies.set('username',"", { expires: 7 }); 
              dispatch(setUser({ username: "", id: "" }));
              redirect("/signup")
            }
          }}
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
              <span style={{ fontSize: "18px" }}>{usernamebycookie}</span>{" "}
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
        {dataentry===false?
      <div style={{display:'flex'}}>
        <div className="PrndingTracker">
        <Card    hoverable    style={{ width: 240,margin:"10px" }} >
    <div style={{display:'flex',justifyContent:"space-between",alignItems:'center'}}><h3 style={{color:"#9c9c9c"}} >PENDING TRACKERS</h3><LuGoal style={{fontSize:"25px",color:"#9c9c9c"}}/></div>
    <h1>45/60</h1>
    
  </Card>
        </div>
        <div className="PrndingReviews">
        <Card    hoverable    style={{ width: 240,margin:"10px" }} >
    <div style={{display:'flex',justifyContent:"space-between",alignItems:'center'}}><h3 style={{color:"#9c9c9c"}} >PENDING REVIEWS</h3><LuMessageSquarePlus style={{fontSize:"25px",color:"#9c9c9c"}}/></div>
    <h1>3</h1>
    
  </Card>
        </div>
      </div>
:<>;</>}
     <Space.Compact size="large">
      <Input addonBefore={<SearchOutlined />} placeholder="Search for a business unit" style={{width:"25vw" ,margin:"10px 10px"}}/>
      
    </Space.Compact>    
      {dataentry===true ?<Table columns={columns} dataSource={data} /> :<Table columns={column2} dataSource={Trackerdata} />}  
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
