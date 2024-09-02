import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import posts from './posts-reducers';

const rootReducer = combineReducers({
  form,
  posts
});

export default rootReducer;