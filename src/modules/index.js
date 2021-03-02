import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import login from './login';
import loading from './loading';

const rootReducer = combineReducers({
  login,
  loading,
});

// export function* rootSaga() {
//   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// }

export default rootReducer;
