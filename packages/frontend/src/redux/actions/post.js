export const ADD_NEW_POST_DB = "ADD_NEW_POST_DB";
export const GET_POSTS_DB = "GET_POSTS_DB";
export const STORE_POSTS = "STORE_POSTS";
export const STORE_NEW_POST = "STORE_NEW_POST";
export const DELETE_POST_DB = "DELETE_POST_DB";

// * Actions intercepted by saga to conduct side effects, use these!
export const getPosts = userId => {
  return {
    type: GET_POSTS_DB,
    payload: userId
  };
};

export const addNewPost = postContents => {
  return {
    type: ADD_NEW_POST_DB,
    payload: postContents
  };
};

export const deletePost = id => {
  return {
    type: DELETE_POST_DB,
    payload: id
  };
};

// ! Actions dispatched by saga, don't dispatch these manually. They usually update the store.
export const storePosts = posts => {
  return {
    type: STORE_POSTS,
    payload: posts
  };
};

export const storeNewPost = postData => {
  return {
    type: STORE_NEW_POST,
    payload: postData
  };
};
