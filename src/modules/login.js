import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'login/CHANGE_FIELD';
const INITIALIZE_FORM = 'login/INITIALIZE_FORM';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM);

const initialState = {
  mobile: '',
  password: '',

  login: null,
  loginError: null,
};

const login = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_FORM]: (state) => initialState,
  },
  initialState,
);

export default login;
