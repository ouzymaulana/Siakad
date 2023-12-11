import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface FormValueType {
  id: string;
  nim: string;
  name: string;
  email: string;
  entry_year: string;
  date_of_birth: string;
  address: string;
  semester: string;
  major: string;
  status: string;
  [key: string]: string | number;
}

interface DataStudentsState {
  dataStudents: FormValueType[];
}

const initialState: DataStudentsState = {
  dataStudents: [],
};

const DataStudents = createSlice({
  name: "dataStudents",
  // initialState: {
  // dataStudents: {},
  initialState,
  // },
  reducers: {
    setDataStudents: (state, action) => {
      state.dataStudents = action.payload;
    },

    addDataStudent: (state, action) => {
      const newStudentData = action.payload;
      state.dataStudents = [...state.dataStudents, newStudentData];
    },

    updateDataStudent: (state, action) => {
      const updatedStudent: FormValueType = action.payload;
      state.dataStudents = state.dataStudents.map((student) => {
        return student.id === updatedStudent.id
          ? { ...student, ...updatedStudent }
          : student;
      });
    },

    deleteDataStudent: (state, action) => {
      const filterData = state.dataStudents.filter(
        (student) => student.nim !== action.payload
      );

      state.dataStudents = filterData;
    },
  },
});

export const selectDataStudents = (state: RootState) =>
  state.dataStudents.dataStudents;
export const {
  setDataStudents,
  addDataStudent,
  updateDataStudent,
  deleteDataStudent,
} = DataStudents.actions;
export default DataStudents.reducer;
