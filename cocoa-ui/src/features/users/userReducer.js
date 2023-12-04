import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService'

const initialState = {
    userInfo: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const getUser = createAsyncThunk('users/userInfo', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.getUser(token);
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userReset: (state) =>  initialState 
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.userInfo.push(action.payload)
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.isSuccess = false
        })
    }
})


export const {userReset} = userSlice.actions

export default userSlice.reducer