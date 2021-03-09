import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE_FORM = 'write/INITIALIZE_FORM';
const UPLOAD_PICTURE = 'write/UPLOAD_PICTURE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM);
export const uploadPicture = createAction(UPLOAD_PICTURE);

const initialState = {
  name: '',
  club_type: null,
  session_time: null,
  cost: null,

  address: '',
  description: '',
  d_date: '',
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_FORM]: (state) => initialState,
  },
  initialState,
);

export default write;
