import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface dataType {
  id: string;
  course: string;
  kuota: string;
  lecturer: string;
  prodi: string;
  semester: string;
  [key: string]: string | number;
}

interface DataKrsState {
  dataKrs: dataType[];
}

const initialState: DataKrsState = {
  dataKrs: [],
};

const DataKrs = createSlice({
  name: "dataKrs",
  initialState,
  reducers: {
    setDataKrs: (state, action) => {
      state.dataKrs = action.payload;
    },

    addDataKrs: (state, action) => {
      const newData = action.payload;
      state.dataKrs = [...state.dataKrs, newData];
    },

    updateDataKrs: (state, action) => {
      const updatedKrs: dataType = action.payload;
      state.dataKrs = state.dataKrs.map((krs) => {
        return krs.id === updatedKrs.id ? { ...krs, ...updatedKrs } : krs;
      });
    },

    deleteDataKrs: (state, action) => {
      const filterData = state.dataKrs.filter(
        (krs) => krs.id !== action.payload
      );

      state.dataKrs = filterData;
    },
  },
});

export const selectDataKrs = (state: RootState) => state.dataKrs.dataKrs;
export const { setDataKrs, addDataKrs, updateDataKrs, deleteDataKrs } =
  DataKrs.actions;
export default DataKrs.reducer;
