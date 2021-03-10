import { createAction, handleActions } from 'redux-actions';

const SELECT_TYPE = 'write/SELECT_TYPE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE_FORM = 'write/INITIALIZE_FORM';
const UPLOAD_PICTURE = 'write/UPLOAD_PICTURE';
const INPUT_TEXT = 'write/INPUT_TEXT';
const TESTING = 'write/TESTING';

export const selectType = createAction(SELECT_TYPE, (type) => type);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZE_FORM);
export const uploadPicture = createAction(UPLOAD_PICTURE);
export const inputText = createAction(INPUT_TEXT, (text) => text);

export const onTesting = createAction(TESTING, (text) => text);

const initialState = {
  name: '',
  club_type: null,
  session_time: null,
  cost: null,
  address: '',
  description: '',
  d_date: '',

  testing: '',
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [SELECT_TYPE]: (state, { payload: { type } }) => ({
      ...state,
      club_type: type,
    }),

    [TESTING]: (state, { payload: { text } }) => ({
      ...state,
      testing: text,
    }),

    [INPUT_TEXT]: (state, { payload: { text } }) => ({
      ...state,
      description: text,
    }),

    [INITIALIZE_FORM]: () => initialState,
  },
  initialState,
);

export default write;
