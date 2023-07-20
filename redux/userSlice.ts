import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  value: user;
}

export interface user {
  id: string;
  email: string;
}

const initialState: userState = {
  value: {
    id: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    singOutUser: (state) => {
      (state.value.email = ""), (state.value.id = "");
    },
    signInUser: (state, action: PayloadAction<user>) => {
      state.value = action.payload;
    },
  },
});

export const { singOutUser, signInUser } = userSlice.actions;
export default userSlice.reducer;
