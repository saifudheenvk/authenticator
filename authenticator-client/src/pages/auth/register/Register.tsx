import { FC, useEffect, useState } from "react"
import { authService } from "@services/api/auth/auth.service";
import { IUserDocument } from "@services/utils/types/user";
import { useNavigate } from "react-router-dom";
import { AuthContainer, AuthInput, AuthPassword, LoginButton } from "@components/styled-components/auth";
import { Form } from "antd";
import { ISignUp } from "@services/api/auth/auth.types";
import useLocalStorage from "@hooks/useLocalStorage";
import { Utils } from "@services/utils/utils.service";
import { useAppDispatch } from "@hooks/redux";
import useSessionStorage from "@hooks/useSessionStorage";


const Register: FC = () => {

  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [altertType, setAlertType] = useState<string>('alert-error');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<IUserDocument | null>(null);

  const navigate = useNavigate();
  const setStoredEmail = useLocalStorage('email', 'set');
  const setLoggedIn = useLocalStorage('keepLoggedIn', 'set');
  const dispatch = useAppDispatch();
  const pageReload = useSessionStorage('pageReload', 'set');
  const setToken = useLocalStorage('access_token', 'set');

  const registerUser = async (values: ISignUp) => {
    setLoading(true);
    try {
      const result = await authService.signUp({
        name: values.name,
        email: values.email,
        password: values.password
      });

      setLoggedIn(true);
      setStoredEmail(values.email);
      setAlertType('alert-success');
      setHasError(false);
      Utils.dispatchUser(result, pageReload, dispatch, setUser, setToken);
    } catch (error: any) {
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data?.message ?? 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading && !user) return;
    if (user) navigate('/app/dashboard');
  }, [loading, user, navigate]);

  return (
    <AuthContainer>
      {hasError && errorMessage && (
          <div className={`alerts ${altertType}`} role="alert">
            {errorMessage}
          </div>
        )}
      <Form className="auth-form" onFinish={registerUser}>
          <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
            <AuthInput placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
            <AuthInput placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <AuthPassword placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <LoginButton disabled={loading} type="primary" htmlType="submit">
                {loading ? 'SIGNUP IN PROGRESS...' : 'SIGNUP'}
            </LoginButton>
          </Form.Item>
      </Form>
  </AuthContainer>
  )
}

export default Register
