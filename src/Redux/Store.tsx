import { configureStore } from "@reduxjs/toolkit";
import dataStudentsReducer from "./Admin/StudentsDataSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    dataStudents: dataStudentsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
