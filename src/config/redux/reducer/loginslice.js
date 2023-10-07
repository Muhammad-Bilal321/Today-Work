import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    dummyData: "Testing...",
  }, 
  reducers: {
    add(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    del() {},
  },
});

export const { add, del } = LoginSlice.actions;
export default LoginSlice.reducer;
