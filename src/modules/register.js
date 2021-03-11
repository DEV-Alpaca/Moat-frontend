import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'register/CHANGE_FIELD';
const INITIALIZE_FORM = 'register/INITIALIZE_FORM';
const SELECT_GENDER = 'register/SELECT_GENDER';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZE_FORM);
export const selectGender = createAction(SELECT_GENDER, (gender) => gender);

const initialState = {
  phone_number: '',
  phone_numberConfirm: '',
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

    [SELECT_GENDER]: (state, { payload: { gender } }) => ({
      ...state,
      gender: gender,
    }),
    [INITIALIZE_FORM]: (state) => initialState,
  },
  initialState,
);

export default register;
