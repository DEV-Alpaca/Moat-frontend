import { createAction, handleActions } from 'redux-actions';

const SELECT_TYPE = 'write/SELECT_TYPE';
const SELECT_SESSION_TIME = 'write/SELECT_SESSION_TIME';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE_FORM = 'write/INITIALIZE_FORM';
const UPLOAD_PICTURE = 'write/UPLOAD_PICTURE';
const INPUT_TEXT = 'write/INPUT_TEXT';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const selectType = createAction(SELECT_TYPE, (type) => type);
export const selectSessionTime = createAction(
  SELECT_SESSION_TIME,
  (time) => time,
);
export const initializeForm = createAction(INITIALIZE_FORM);
export const uploadPicture = createAction(UPLOAD_PICTURE);
export const inputText = createAction(INPUT_TEXT, (text) => text);

const initialState = {
  name: '',
  club_type: null,
  session_time: null,
  cost: '',
  address: '',
  description: '',
  d_date: '',
};

const write = handleActions(
  {
    [SELECT_TYPE]: (state, { payload: { type } }) => ({
      ...state,
      club_type: type,
    }),
    [SELECT_SESSION_TIME]: (state, { payload: { time } }) => ({
      ...state,
      session_time: time,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
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
