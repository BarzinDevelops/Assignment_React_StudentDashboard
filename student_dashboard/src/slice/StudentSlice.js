import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "",
    assignment: "",
    difficulty: null,
    like: null
};
const studentSlice =  createSlice({
    name: 'student',
    initialState,
    reducers:{
        addStudent: (state) => {},
    }
});

export default studentSlice.reducer;