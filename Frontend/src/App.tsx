
import  { Route, Routes } from 'react-router-dom';
import Auth from './Component/Auth/Auth';
import Home from './Component/Home/Home';
const App = () => (
  <div className='App'>
  <Routes>
<Route path='/signup' element={<Auth Account="SignUp"/>}></Route>
<Route path='/signin' element={<Auth Account="SignIn"/>}></Route>
<Route path='/home' element={<Home />}></Route>
  </Routes>
  </div>
);

export default App;