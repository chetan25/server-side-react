export const FETCH_USERS = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';

// thunk will call this with three arguments, dispatch, getStatet and the argument we passed when we initialized thunk
export const fetchUsers = () => async (dispatch, getState, api) => {
   const res = await api.get('/users'); // this request will prepend the baseURL
   
   dispatch({
       type: FETCH_USERS,
       payload: res
   });
}

export const fetchCurrentUser = () => async(dispatch, getState, api) => {
   const res = await api.get('/current_user');

   dispatch({
      type: FETCH_CURRENT_USER,
      payload: res
   })
}