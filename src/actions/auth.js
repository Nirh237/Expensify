
import Api from '../../server/api';

export const error = (msg) => ({
    type: 'ERROR',
    msg
  });

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (uid) => {
    return (dispatch) => {
      return Api.post("/Login",{uid}).then((Response) => {
        const userid = Response.data.d;
        if(userid) {

            dispatch(login(userid));
        }
        else {
          dispatch(error('Error email or password.'));
        }
      }).catch((error) => {
        dispatch(error('server error'));
      })
  };
  };


  export const logout = () => ({
    type: 'LOGOUT'
  });

  export const startLogout = () => {
    return (dispatch) => {
      localStorage.removeItem("user");
      return dispatch(logout());
    };
  };
