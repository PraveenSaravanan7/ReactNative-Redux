const initState = {
    users: []
 }
 
 const usersReducers = (state = initState, action) => {
     switch (action.type) {
       case 'USERS':
           console.log(action.payload)
         return {...state,
                 users: action.payload.results
         }
       default:
         return state
     }
   }
 
 export default usersReducers;