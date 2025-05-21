import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isCollapse: false,
    },
    reducers: {
        switchCollapse: (state) => {
            state.isCollapse =!state.isCollapse;
        }
    },
});

export const { switchCollapse } = menuSlice.actions;

export default menuSlice.reducer;