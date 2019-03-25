import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchUsersAndPosts = () => async (dispatch, getState) => {
  /* Invoke fetchPosts and send it to redux thunk, await keyword makes it 
  wait until it's finished before moving onto the next line */
  await dispatch(fetchPosts());

  // _.uniq looks for each unique ID, _.map maps through the array
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data});
};

// Using lodash _.memoize makes sure that each time a user is found, the function doesn't call that user again
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({type: 'FETCH_USER', payload: response.data});
// });