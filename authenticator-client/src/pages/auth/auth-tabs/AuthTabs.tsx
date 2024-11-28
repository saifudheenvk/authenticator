import { FC, useEffect, useState } from 'react';
import './AuthTabs.scss';
import backgroundImage from '@assets/images/background.jpg';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import { EnvirornmentDiv } from '@components/styled-components/auth';
import useLocalStorage from '@hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const AuthTabs: FC = () => {

  const [ type, setType ] = useState<string>('Sign In');

  const keepLoggedIn = useLocalStorage('keepLoggedIn', 'get');
  const navigate = useNavigate();

  useEffect(() => {
    if (keepLoggedIn) navigate('/app/dashboard');
  }, [navigate, keepLoggedIn]);

  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className="container-wrapper">
        <EnvirornmentDiv className="environment">DEV</EnvirornmentDiv>
        <div className="container-wrapper-auth">
          <div className="tabs">
              <ul className="tab-group">
                <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                  <button className="login">Sign In</button>
                </li>
                <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                  <button className="signup">Sign Up</button>
                </li>
              </ul>
              {
                type === 'Sign In' ? <div className="tab-item">
                  <Login />
                </div> : <div className="tab-item">
                  <Register />
                </div>
              }
            </div>
        </div>
      </div>
    </>
  );
};

export default AuthTabs;
