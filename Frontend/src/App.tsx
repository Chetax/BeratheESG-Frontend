
import  { Route, Routes } from 'react-router-dom';
import Auth from './Component/Auth/Auth';
const App = () => (
  <div className='App'>
  <Routes>
<Route path='/signup' element={<Auth Account="SignUp"/>}></Route>
<Route path='/signin' element={<Auth Account="SignIn"/>}></Route>
  </Routes>
  </div>
);

export default App;