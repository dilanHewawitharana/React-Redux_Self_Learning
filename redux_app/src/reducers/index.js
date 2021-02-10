import { combineReducers } from 'redux';
import Counter from './counterReducer';
import LoggedIn from './isLoggedInReducer';

const JoinReducers = combineReducers({
    count: Counter,
    loggedIn: LoggedIn
});

export default JoinReducers;