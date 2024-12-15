// src/features/students/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.list.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter(student => student.id !== action.payload);
    },
    setStudents: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, setStudents } = studentSlice.actions;
export default studentSlice.reducer;
