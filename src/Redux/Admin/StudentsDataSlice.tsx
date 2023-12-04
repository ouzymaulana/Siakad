import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const DataStudents = createSlice({
  name: "dataStudents",
  initialState: {
    dataStudents: {},
  },
  reducers: {
    setDataStudents: (state, action) => {
      console.log("===============slace=====================");
      console.log(action.payload);
      console.log("====================================");
      state.dataStudents = action.payload;
    },
  },
});

export const selectDataStudents = (state: RootState) =>
  state.dataStudents.dataStudents;
export const { setDataStudents } = DataStudents.actions;
export default DataStudents.reducer;
