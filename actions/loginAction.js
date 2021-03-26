import axios from '../apis/api';

export const loginAction = async (dispatch, email, password) => {
   try {
      const response = await axios.post('/users/login', {email: email, password: password});
      if (response.data) {
         dispatch({type: "LOGIN", payload: response.data})
      }
    } catch (error) {
      console.log(error, "error")
    }
}