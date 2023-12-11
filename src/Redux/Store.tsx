import { configureStore } from "@reduxjs/toolkit";
import dataStudentsReducer from "./Admin/StudentsDataSlice";
import dataLecturersAndStaffReducer from "./Admin/LecturersAndStaffDataSlice";
import dataKrsReducer from "./Admin/KrsDataSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    dataStudents: dataStudentsReducer,
    dataLecturersAndStaff: dataLecturersAndStaffReducer,
    dataKrs: dataKrsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
