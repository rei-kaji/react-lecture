import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  registered: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setRegister(state, action) {
      state.registered = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetState(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
      state.token = null;
      state.expiresIn = null;
    },
  },
});

export const { setUser, setRegister, setLoading, setError, resetState } =
  userSlice.actions;

export const login = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      import.meta.env.VITE_APP_URL + "/api/user/login",
      userData
    );
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const register =
  (username, fullName, email, password) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        import.meta.env.VITE_APP_URL + "/api/user/signup",
        { username, fullName, email, password }
      );
      if (response.data.message === "User created!") {
        dispatch(setRegister(true));
      } else {
        throw new Error(`Something went wrong! Error: ${response.data}`);
      }
    } catch (error) {
      console.log("error response", error.response.data);
      dispatch(setRegister(false));
      dispatch(setError(error.response.data));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logout = () => async (dispatch) => {
  try {
    dispatch(resetState());
  } catch (error) {
    console.log(error);
  }
};

export default userSlice.reducer;
