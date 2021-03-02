import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  login,
  register,
});

// export function* rootSaga() {
//   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// }

export default rootReducer;
