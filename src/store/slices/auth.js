import {createSlice} from '@reduxjs/toolkit';
import {api} from '../../services/auth';

const slice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null, language: 'en'},
  reducers: {
    changeLanguage: (state, {payload}) => {
      state.language = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.token = payload.token;
        state.user = payload.user;
      },
    );
  },
});

export default slice.reducer;

export const {changeLanguage} = slice.actions;

export const selectCurrentUser = state => state.auth.user;

export const selectCurrentLanguage = state => state.auth.language;
