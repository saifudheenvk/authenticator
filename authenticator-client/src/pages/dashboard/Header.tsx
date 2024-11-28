import React from 'react'
import { Col, Layout, Menu, message, Row } from 'antd';
import { HeaderLogo, LogoutButton } from '@components/styled-components/dashboard';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@hooks/redux';
import useLocalStorage from '@hooks/useLocalStorage';
import { authService } from '@services/api/auth/auth.service'
import { Utils } from '@services/utils/utils.service';
import useSessionStorage from '@hooks/useSessionStorage';

const Header: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const deleteStorageEmail = useLocalStorage('email', 'clear');
  const setLoggedIn = useLocalStorage('keepLoggedIn', 'set');
  const deleteSessionPageReload = useSessionStorage('pageReload', 'delete');
  const deleteToken = useLocalStorage('access_token', 'delete');

  const logoutUser = async () => {
    try {
      await authService.signOut();
      Utils.clearStore(dispatch, deleteStorageEmail, deleteSessionPageReload, setLoggedIn, deleteToken);
      navigate('/');
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  }

  return (
    <Layout.Header style={{background: '#fff'}} >
      <Row>
        <Col span={23}>
          <HeaderLogo/>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(4).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
        </Col>
        <Col span={1}>
            <LogoutButton onClick={logoutUser} >Logout</LogoutButton>
        </Col>
      </Row>

    </Layout.Header>
  )
}

export default Header
