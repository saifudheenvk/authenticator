import axiosInstance from '@services/api/axios';

class UserService {
  async checkCurrentUser() {
    const response = await axiosInstance.post('/user/currentuser');
    return response;
  }
}

export const userService = new UserService();
