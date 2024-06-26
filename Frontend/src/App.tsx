import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from './Component/Auth/Auth';
import Home from './Component/Home/Home';
import Cookies from 'js-cookie';

const App: React.FC = () => {
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.username);
  const usernamebycookie = Cookies.get('username');
console.log(usernamebycookie)

  const [authtype, setauthtype] = useState<Boolean>(false); 

  useEffect(() => {
    if (username === "" && usernamebycookie==="") {
      authtype ? navigate("/signin") : navigate("/signup");
    } else {
      navigate("/home");
    }
  }, [username, navigate, authtype]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Auth Account="SignUp" setAuth={setauthtype} />} />
        <Route path='/signin' element={<Auth Account="SignIn" setAuth={setauthtype} />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
