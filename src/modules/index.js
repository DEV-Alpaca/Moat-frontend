import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

// export function* rootSaga() {
//   yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
// }

export default rootReducer;
