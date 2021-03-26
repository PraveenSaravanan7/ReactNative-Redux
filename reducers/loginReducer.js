const initState = {
    userid: null
 }
 
 const loginReducer = (state = initState, action) => {
     switch (action.type) {
       case 'LOGIN':
           console.log(action.payload)
         return {...state,
                 userid: action.payload.userid
         }
       default:
         return state
     }
   }
 
 export default loginReducer;