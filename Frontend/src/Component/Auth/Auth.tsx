import './Auth.scss';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './Images/Logo.png';
import { useDispatch } from "react-redux";
import { setUser } from '../../Redux/userSlice';
import earth from './Images/Earth.png';
import { Form, Button, Input } from 'antd';
import { Col, Image, Row, Layout, Typography } from 'antd';
import Google from './Images/google.png';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import Cookies from 'js-cookie';  // Import js-cookie

const { Title } = Typography;

interface Props {
  Account: string;
  setAuth: React.Dispatch<React.SetStateAction<Boolean>>;
}

interface UserState {
  username: string;
  id: string;
}

const Auth: React.FC<Props> = ({ Account, setAuth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confpassword, setconfpassword] = useState<string>("");

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const displayName = result.user.displayName ? result.user.displayName : 'Anonymous';
      const newUser = {
        username: displayName, 
        id: result.user.uid
      };
      dispatch(setUser(newUser));
      Cookies.set('username', newUser.username, { expires: 7 }); 
      navigate('/home');
    }).catch(err => console.log(err));
  };

  const handlesignupuser = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "" || confpassword === "") {
      alert('Enter All Fields');
      setemail("");
      setpassword("");
      setconfpassword("");
      return;
    }
    if (password !== confpassword) {
      alert('Password Not Match');
      setemail("");
      setpassword("");
      setconfpassword("");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const newUser = {
        username: email,
        id: result.user.uid
      };
      console.log(result);
      dispatch(setUser(newUser));
      Cookies.set('username', newUser.username, { expires: 7 }); 
      navigate('/home');
    }).catch(err => {
      alert(err);
      navigate('/signup');
    });
  };

  const handleusersignin = () => {
    if (email === "" || password === "") {
      alert('Enter All Fields');
      setemail("");
      setpassword("");
      return;
    }

    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const newUser = {
        username: email,
        id: result.user.uid
      };
      dispatch(setUser(newUser));
      Cookies.set('username', newUser.username, { expires: 7 }); 
      navigate('/home');
    }).catch(err => {
      alert(err);
      navigate('/signin');
    });
  };

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
              style={{ padding: '5%', position: 'relative', backgroundColor: 'rgba(35, 94, 74, 1)', width: '60%', height: Account === 'SignUp' ? '93%' : '87%' }}
            >
              {Account === 'SignUp' ? (
                <Title level={4} style={{ color: 'white' }}>Sign Up</Title>
              ) : (
                <>
                  <Title level={4} style={{ color: 'white' }}>Login</Title>
                  <Title level={5} style={{ color: 'white' }}>Enter your registered Email ID to continue</Title>
                </>
              )}
              <Form.Item name="email" label={<span style={{ color: 'white' }}>Email</span>} rules={[{ required: true, message: 'Please Enter Email' }]}></Form.Item>
              <Input onChange={(e) => { setemail(e.target.value) }} value={email} placeholder="Enter Your Email" style={{ height: '6vh' }}></Input>
              <Form.Item name="password" label={<span style={{ color: 'white', marginTop: '20%' }}>Password</span>}></Form.Item>
              <Input.Password onChange={(e) => { setpassword(e.target.value) }} value={password} placeholder="Enter Your password" style={{ height: '6vh' }}></Input.Password>
              {Account === 'SignUp' ? (
                <>
                  <Form.Item name="Conformpassword" label={<span style={{ color: 'white', marginTop: '20%' }}>Confirm Password</span>}></Form.Item>
                  <Input.Password onChange={(e) => { setconfpassword(e.target.value) }} value={confpassword} placeholder="Confirm Your Password" style={{ height: '6vh' }}></Input.Password>
                  <Button onClick={handlesignupuser} type="primary" style={{ position: 'absolute', backgroundColor: 'rgba(46, 152, 68, 1)', width: '50%', left: '25%', marginTop: '60px' }}>Continue</Button>
                  <Title level={5} style={{ position: 'absolute', width: '50%', bottom: 15, color: 'white' }}>Already Member? <NavLink onClick={() => setAuth(true)} to="/signin"><span style={{ cursor: 'pointer', marginLeft: '10px', color: 'rgba(79, 165, 86, 1)', fontWeight: 'bolder' }}>Login</span></NavLink></Title>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', border: '2px solid white', cursor: 'pointer', margin: '20px 0px', alignItems: 'center', justifyContent: 'start' }}>
                    <img src={Google} alt="" style={{ width: 40 }} />
                    <span onClick={signinwithgoogle} style={{ marginLeft: '15px', padding: '10px 0px', fontSize: '16px', color: 'white' }}>Sign In with Google</span>
                  </div>
                  <div style={{ margin: '10px 0px' }}>
                    <span style={{ color: 'white' }}>Having trouble logging in?</span>
                    <span style={{ cursor: 'pointer', marginLeft: '10px', color: 'rgba(79, 165, 86, 1)', fontWeight: 'bolder' }}>Contact Us</span>
                  </div>
                  <Button onClick={handleusersignin} type="primary" style={{ position: 'absolute', backgroundColor: 'rgba(46, 152, 68, 1)', width: '50%', left: '25%', marginTop: '5px' }}>Continue</Button>
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
