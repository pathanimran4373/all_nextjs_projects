const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  // it is reducer
  reducers: {
    // it is action
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      // console.log(action)
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
    },
  },
});
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
