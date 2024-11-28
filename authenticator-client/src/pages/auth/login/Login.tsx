import { FC, useEffect, useState } from "react";
import { FaArrowRight} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@services/api/auth/auth.service";
import { IUserDocument } from "@services/utils/types/user";
import { AuthContainer, AuthInput, AuthPassword, ForgotPassword, LoginButton } from "@components/styled-components/auth";
import { Checkbox, Form } from "antd";
import useLocalStorage from "@hooks/useLocalStorage";
import { ILogin } from "@services/api/auth/auth.types";
import { Utils } from "@services/utils/utils.service";
import { useAppDispatch } from "@hooks/redux";
import useSessionStorage from "@hooks/useSessionStorage";

const Login: FC = () => {

  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [altertType, setAlertType] = useState<string>('alert-error');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<IUserDocument | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const setStoredEmail = useLocalStorage('email', 'set');
  const setLoggedIn = useLocalStorage('keepLoggedIn', 'set');
  const setToken = useLocalStorage('access_token', 'set');
  const pageReload = useSessionStorage('pageReload', 'set');


  const loginUser = async (values: ILogin) => {
    setLoading(true);
    try {
      const result = await authService.signIn({
        email: values.email,
        password: values.password
      })
      setLoggedIn(values.remember);
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
    if(loading && !user) return;
    if(user) {
      navigate('/app/dashboard');
    }
  }, [user, loading, navigate]);

  return (
    <AuthContainer>
      {hasError && errorMessage && (
        <div className={`alerts ${altertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <Form initialValues={{ remember: true }} onFinish={loginUser}>
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
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox> Keep me signed in</Checkbox>
          </Form.Item>
          <Form.Item>
            <LoginButton disabled={loading} type="primary" htmlType="submit">
                {loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}
            </LoginButton>
          </Form.Item>

          <Link to={'/forgot-password'}>
            <ForgotPassword className="forgot-password">
                Forgot password? <FaArrowRight />
            </ForgotPassword>
          </Link>
      </Form>
    </AuthContainer>
  );
}

export default Login;
