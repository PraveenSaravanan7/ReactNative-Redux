import axios from '../apis/usersApi';

export const usersAction = async (dispatch) => {
   try {
      const response = await axios.get('?results=100');
      if (response.data) {
         dispatch({type: "USERS", payload: response.data})
      }
    } catch (error) {
      console.log(error, "error")
    }
}