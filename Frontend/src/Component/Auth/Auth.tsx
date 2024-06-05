import './Auth.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './Images/Logo.png';
import earth from './Images/Earth.png';
import { Form, Button, Input } from 'antd';
import { Col, Image, Row, Layout, Typography } from 'antd';
import Google from './Images/google.png';
import X from './Images/X.png';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../../firebase';
import { useState } from 'react';
const { Title } = Typography;


interface Props {
  Account: string;
}

const Auth: React.FC<Props> = (props) => {
  const redirect=useNavigate();
  const auth=getAuth(app);
  const handlesignupuser=(e:React.FormEvent)=>{
    e.preventDefault();
    if(email==null || password==null )
      {
        alert('Enter All Feild');
        setemail("");
        setpassword("");
        setconfpassword("");
    return;
      }
    if(password !== confpassword ){
      alert('Password Not Match');
      setemail("");
      setpassword("");
      setconfpassword("");
      return;
    }
   createUserWithEmailAndPassword(auth,email,password).then((e)=>redirect('/home')  
   ).catch(err=>{alert(err);redirect('/signup')});
  };
   
  const [email,setemail]=useState<string>("");
  const [password,setpassword]=useState<string>("");
  const [confpassword,setconfpassword]=useState<string>("");
  
   console.log(email)
   console.log(password)
  return (
    <>
      <Layout style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(33, 69, 60, 1)' }}>
        <Row>
          <Col span={12} style={{ marginTop: '35vh' }}>
            <Row>
              <Col span={10}></Col>
              <Col span={10}>
                <div>
                  <Title level={5} style={{ color: 'rgba(255, 255, 255, 1)' }}>Welcome to</Title>
                  <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                    <Image width={30} src={logo} />
                    <Title level={2} style={{ color: 'rgba(255, 255, 255, 1)', marginTop: '8px', letterSpacing: '5px' }}>BREATHE ESG</Title>
                  </div>
                  <Title level={5} style={{ color: 'rgba(159, 159, 159, 1)', marginBottom: '50px' }}>We help you track your organisation's metrics as per the ESG Guidelines</Title>
                  <span style={{ color: 'rgba(255, 255, 255, 1)' }}>Sounds Interesting?</span>
                  <span style={{ color: 'rgba(79, 165, 86, 1)', cursor: 'pointer' }}>Get in touch!</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={10} style={{ marginTop: '4vh' }}>
            <Image src={earth} style={{ width: '18%', marginLeft: '20%' }} />
            <Form
              wrapperCol={{ span: 14 }}
              style={{ padding: '5%', position: 'relative', backgroundColor: 'rgba(35, 94, 74, 1)', width: '60%', height: props.Account === 'SignUp' ? '93%' : '87%' }}
            >
              {props.Account === 'SignUp' ? (
                <Title level={4} style={{ color: 'white' }}>Sign Up</Title>
              ) : (
                <>
                  <Title level={4} style={{ color: 'white' }}>Login</Title>
                  <Title level={5} style={{ color: 'white' }}>Enter your registered Email ID to continue</Title>
                </>
              )}
              <Form.Item name="email" label={<span style={{ color: 'white' }}>Email</span>} rules={[{ required: true, message: 'Please Enter Email' }]}></Form.Item>
              <Input onChange={(e)=>{setemail(e.target.value)}} value={email}  placeholder="Enter Your Email" style={{ height: '6vh' }}></Input>
              <Form.Item name="password" label={<span style={{ color: 'white', marginTop: '20%' }}>Password</span>}></Form.Item>
              <Input.Password onChange={(e)=>{setpassword(e.target.value)}} value={password} placeholder="Enter Your password" style={{ height: '6vh' }}></Input.Password>
              {props.Account === 'SignUp' ? (
                <>
                  <Form.Item name="Conformpassword" label={<span style={{ color: 'white', marginTop: '20%' }}>Confirm Password</span>}></Form.Item>
                  <Input.Password onChange={(e)=>{setconfpassword(e.target.value)}} value={confpassword} placeholder="Confirm Your Password" style={{ height: '6vh' }}></Input.Password>
                  <Button onClick={handlesignupuser} type="primary" style={{ position: 'absolute', backgroundColor: 'rgba(46, 152, 68, 1)', width: '50%', left: '25%', marginTop: '60px' }}>Continue</Button>
                  <Title level={5} style={{ position: 'absolute', width: '50%', bottom: 15, color: 'white' }}>Already Member? <NavLink to="/signin"><span style={{ cursor: 'pointer', marginLeft: '10px', color: 'rgba(79, 165, 86, 1)', fontWeight: 'bolder' }}>Login</span></NavLink></Title>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', border: '2px solid white', cursor: 'pointer', marginTop: '15px', alignItems: 'center', justifyContent: 'start' }}>
                    <img src={Google} alt="" style={{ width: 40 }} />
                    <span style={{ marginLeft: '15px', padding: '10px 0px', fontSize: '16px', color: 'white' }}>Sign In with Google</span>
                  </div>
                  <div style={{ display: 'flex', border: '2px solid white', cursor: 'pointer', marginTop: '15px', alignItems: 'center', justifyContent: 'start' }}>
                    <img src={X} alt="" style={{ width: 40 }} />
                    <span style={{ marginLeft: '15px', padding: '10px 0px', fontSize: '16px', color: 'white' }}>Sign In with X</span>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <span style={{ color: 'white' }}>Having trouble logging in?</span>
                    <span style={{ cursor: 'pointer', marginLeft: '10px', color: 'rgba(79, 165, 86, 1)', fontWeight: 'bolder' }}>Contact Us</span>
                  </div>
                  <Button  type="primary" style={{ position: 'absolute', backgroundColor: 'rgba(46, 152, 68, 1)', width: '50%', left: '25%', marginTop: '5px' }}>Continue</Button>
                </>
              )}
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Auth;