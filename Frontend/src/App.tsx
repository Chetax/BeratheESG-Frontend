
import  { Route, Routes } from 'react-router-dom';
import Signup from './Component/SignUp/SignUp';
const App = () => (
  <div className='App'>
  <Routes>
<Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </div>
);

export default App;