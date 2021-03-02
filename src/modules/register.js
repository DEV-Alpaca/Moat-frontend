import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'register/CHANGE_FIELD';
const INITIALIZE_FORM = 'register/INITIALIZE_FORM';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM);

const initialState = {
  mobile: '',
  mobileConfirm: false,
  password: '',
  passwordConfirm: '',

  birthday: '',
  gender: '',

  register: null,
  registerError: null,
};

const register = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_FORM]: (state) => initialState,
  },
  initialState,
);

export default register;
