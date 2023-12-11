import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface FormValueType {
  id: string;
  nrp: string;
  name: string;
  email: string;
  date_of_birth: string;
  address: string;
  status: string;
  role: string;
  [key: string]: string | number;
}

interface DataLecturersAndStaffState {
  datalecturersAndStaff: FormValueType[];
}

const initialState: DataLecturersAndStaffState = {
  datalecturersAndStaff: [],
};

const DatalecturersAndStaff = createSlice({
  name: "datalecturersAndStaff",
  initialState,
  reducers: {
    setDataLecturersAndStaff: (state, action) => {
      state.datalecturersAndStaff = action.payload;
    },

    addDataLecturersAndStaff: (state, action) => {
      const newData = action.payload;
      state.datalecturersAndStaff = [...state.datalecturersAndStaff, newData];
    },

    updateDatalecturersAndStaff: (state, action) => {
      const updatedData: FormValueType = action.payload;
      state.datalecturersAndStaff = state.datalecturersAndStaff.map(
        (lecturerOrStaff) => {
          return lecturerOrStaff.id === updatedData.id
            ? { ...lecturerOrStaff, ...updatedData }
            : lecturerOrStaff;
        }
      );
    },

    deleteDataLecturersAndStaff: (state, action) => {
      const filterData = state.datalecturersAndStaff.filter(
        (lecturerOrStaff) => lecturerOrStaff.nim !== action.payload
      );

      state.datalecturersAndStaff = filterData;
    },
  },
});

export const selectDatalecturersAndStaff = (state: RootState) =>
  state.dataLecturersAndStaff.datalecturersAndStaff;
export const {
  setDataLecturersAndStaff,
  addDataLecturersAndStaff,
  updateDatalecturersAndStaff,
  deleteDataLecturersAndStaff,
} = DatalecturersAndStaff.actions;
export default DatalecturersAndStaff.reducer;
