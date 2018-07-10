import { combineReducers } from 'redux';
import CommentsReducer from './comments_reducer';


const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
