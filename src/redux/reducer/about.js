import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: [
    {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      job: "",
      bd: "",
      shopee: "",
    },
    {
      a: "",
      a1: "",
      b: "",
      b1: "",
      c: "",
      c1: "",
      d: "",
      d1: "",
      e: "",
      e1: "",
    },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload;
    },
  },
});

const { actions, reducer } = aboutSlice;
export const { setAbout } = actions;
export default reducer;
