import { addUser, clearUser } from '@redux-toolkit/reducer/user';
import { Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';


export class Utils {
  static dispatchUser(result: AxiosResponse, pageReload: (value: boolean) => void, dispatch: Dispatch , setUser: (value: any) => void, setToken: (value: any) => void) {
    dispatch(addUser({ token: result.data?.token, profile: result.data?.user }));
    setUser(result.data.user);
    pageReload(true);
    setToken(result.data.token);
  }

  static clearStore( dispatch: Dispatch, deleteStorageEmail: () => void, deleteSessionPageReload: () => void, setLoggedIn: (value: boolean) => void, deleteToken: () => void) {
    dispatch(clearUser());
    deleteStorageEmail();
    deleteSessionPageReload();
    deleteToken();
    setLoggedIn(false);
  }
}
