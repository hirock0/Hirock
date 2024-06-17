"use client";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
type InitialState = {
  isLoading?: boolean;
  data: any;
  isError?: boolean;
};

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
} as InitialState;

export const AllbackendData: any = createAsyncThunk(
  "AllbackendData",
  async (data: any) => {
    try {
      await axios.post("/pages/api/signup", data);
      const AllProjectsData = await axios.get("/pages/api/my_projects");
      const AllData = await axios.get("/pages/api/signup");
      return {
        Allprojects: AllProjectsData.data.allProjects,
        allUser: AllData.data.AllData,
        loggeduser: AllData.data.loggedUser,
      };
    } catch (error: any) {
      return undefined;
    }
  }
);

export const Slices = createSlice({
  name: "data",
  initialState,
  reducers: {
    AddProjectInfo: (state: any, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    DeleteInfo: (state: any, action: PayloadAction<any>) => {
      state.data = state.data.filter(
        (item: any) => item.nanoId !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(AllbackendData.pending, (state, action: any) => {
      state.isLoading = true;
    }),
      builder.addCase(AllbackendData.fulfilled, (state: any, action: any) => {
        (state.isLoading = false), (state.data = action.payload);
      }),
      builder.addCase(
        AllbackendData.rejected,
        (AllbackendData.rejected,
        (state: any, action: any) => {
          state.isError = true;
        })
      );
  },
});
export const { AddProjectInfo, DeleteInfo } = Slices.actions;
export default Slices.reducer;
