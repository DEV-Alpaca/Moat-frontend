import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import login from './login';
import register from './register';
import write from './write';

const rootReducer = combineReducers({
  loading,
  login,
  register,
  write,
});

// export function* rootSaga() {
//   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// }

export default rootReducer;
