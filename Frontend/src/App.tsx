import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from './Component/Auth/Auth';
import Home from './Component/Home/Home';

const App: React.FC = () => {
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    if (username === "") {
      navigate("/signup");
    } else {
      navigate("/home");
    }
  }, [username, navigate]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Auth Account="SignUp" />} />
        <Route path='/signin' element={<Auth Account="SignIn" />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
