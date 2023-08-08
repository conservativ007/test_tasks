import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  userData: string;
  city: string;
}

interface UserState {
  user: IUser;
  showForm: boolean;
}

const initUser = {
  userData: '',
  city: '',
};

const initialState: UserState = {
  user: initUser,
  showForm: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setShowForm(state, action: PayloadAction<boolean>) {
      state.showForm = action.payload;
    },
    setDefaultUser(state) {
      state.user = initUser;
      state.showForm = true;
    },
  },
});

export default userSlice.reducer;
