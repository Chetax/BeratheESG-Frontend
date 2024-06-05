import './SignUp.scss'
import React from 'react';
import logo from './Images/Logo.png'
import earth from './Images/Earth.png'
import { Col,Image, Row, Layout ,Typography, Flex} from 'antd';

const { Title } = Typography;
const SignUp:React.FC=()=> {
    return ( <>
    <Layout style={{width:"100vw",height:"100vh",backgroundColor:'rgba(33, 69, 60, 1)',
    
    }}>
  <Row>
  <Col span={12} style={{marginTop:'35vh'}}>
    <Row>
        <Col span={10}  ></Col>
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

      <Col span={12}>
     <div>
      <Image src={earth}></Image>
      <form action="">
        
      </form>
     </div>


      </Col>
  
  </Row>
    </Layout>
        </> );
}

export default SignUp;