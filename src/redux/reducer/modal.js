import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    type: "",
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.status = action.payload.status;
            state.type = action.payload.type;
        }
    }
})

const { actions, reducer } = modalSlice;
export const { setModal } = actions;
export default reducer;