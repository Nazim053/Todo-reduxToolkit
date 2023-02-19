import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
  name: "USERS",
  initialState: {
    users: [],
  },

  reducers: {
    addUsers(state, action) {
      state.users.push({
        name: action.payload,
      });
    },
  },
});

export const { addUsers } = usersReducer.actions;
export default usersReducer.reducer;
