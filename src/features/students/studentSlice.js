// src/features/students/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: [
      { id: 1, name: 'Alice Brown', email: 'alicebrown@example.com', class: '9th Grade' },
      { id: 2, name: 'David Wilson', email: 'davidwilson@example.com', class: '10th Grade' },
      { id: 3, name: 'Sophia Davis', email: 'sophiadavis@example.com', class: '11th Grade' },
      { id: 4, name: 'James Taylor', email: 'jamestaylor@example.com', class: '12th Grade' },
    ], // Updated data
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
