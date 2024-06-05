import './SignUp.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Images/Logo.png'
import earth from './Images/Earth.png'
import {Form ,Button,Input} from 'antd'
import { Col,Image, Row, Layout ,Typography} from 'antd';

const { Title } = Typography;
const SignUp:React.FC=()=> {
    return ( <>
    <Layout style={{width:"100vw",height:"100vh",backgroundColor:'rgba(33, 69, 60, 1)',
    
    }}>
  <Row>
  <Col span={12} style={{marginTop:'35vh'}}>
    <Row>
        <Col span={10}></Col>
        <Col span={10}  >

    <div style={{}}> 
    <Title level={5} style={{color:'rgba(255, 255, 255, 1)'}}>Welcome to</Title>
    <div style={{display:'flex',alignItems:'center',justifyItems:'center'}}><Image width={30}    src={logo} />  <Title level={2} style={{color:'rgba(255, 255, 255, 1)',marginTop:'8px',letterSpacing:'5px'}}>BREATHE ESG</Title></div>
    <Title level={5} style={{color:'rgba(159, 159, 159, 1)',marginBottom:"50px"}}>We help you track your organisations metrics as per the ESG Guidelines</Title>
 <span style={{color:'rgba(255, 255, 255, 1)'}}>Sounds Interesting?</span> <span  style={{color:'rgba(79, 165, 86, 1)' ,cursor:'pointer'}}  >Get in touch!</span>
    </div>
    </Col>
    </Row>
  </Col>
      <Col span={10} style={{marginTop:'4vh'}}>
      
      <Image src={earth} style={{width:'20%',marginLeft:'20%'}}></Image>
      
       <Form wrapperCol={{span:14}} style={{padding:'5%',position:'relative',backgroundColor:"rgba(35, 94, 74, 1)",width:"60% ",height:"93%"}} >
   <Title level={4} style={{color:'white' }}>Sign Up</Title>
      
    
        <Form.Item name='email' label={<span style={{ color: 'white' }}>Email</span>} rules={[{ required:true, message:'Please Enter Email'    }]} > </Form.Item>
        <Input placeholder='Enter Your Email'style={{height:"6vh"}} ></Input>
        

        <Form.Item name='password' label={<span style={{ color: 'white',marginTop:'20%' }}>Password</span>}>   </Form.Item>
        <Input.Password placeholder='Enter Your password' style={{height:"6vh"}}></Input.Password>
      

        <Form.Item name='Conformpassword' label={<span style={{ color: 'white',marginTop:'20%' }}>Conform Password</span>}>   </Form.Item>
        <Input.Password placeholder='Conform Your Password ' style={{height:"6vh"}}></Input.Password>
      
        <Button type='primary' style={{position:'absolute', backgroundColor:"rgba(46, 152, 68, 1)",width:'50%',left:'25%',marginTop:"60px",}}>Continue</Button>
             
        <Title level={5} style={{position:'absolute',width:'50%',bottom:15,color:'white'}}>Already Member ? <NavLink to='/signin' ><span style={{cursor:'pointer',marginLeft:'10px', color:'rgba(79, 165, 86, 1)',fontWeight:'bolder'}}>   Login </span></NavLink></Title>
       </Form>

      </Col>
  
  </Row>
    </Layout>
        </> );
}

export default SignUp;