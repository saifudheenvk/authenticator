import axiosInstance from '@services/api/axios';
import { ILogin, ISignUp } from "@services/api/auth/auth.types";


class AuthService {
  async signUp(body: ISignUp) {
    const response = await axiosInstance.post('/auth/signup', body);
    return response;
  }

  async signIn(body: ILogin) {
    const response = await axiosInstance.post('/auth/signin', body);
    return response;
  }

  async signOut() {
    const response = await axiosInstance.get('/auth/signout');
    return response;
  }
}


export const authService = new AuthService();
