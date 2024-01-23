import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService'

const initialState = {
    userInfo:'',
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const allUsers = createAsyncThunk('users/userInfoxx', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.allUsers(token);
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
    name: 'userssss',
    initialState,
    reducers: {
        userReset: (state) =>  initialState 
    },
    extraReducers: (builder) => {
        builder
        .addCase(allUsers.pending, (state) => {
            state.isLoading = true
        })
        .addCase(allUsers.fulfilled, (state, action) => {
            state.isSuccess = true
            state.isLoading = false
            state.userInfo = action.payload
        })
        .addCase(allUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.isSuccess = false
        })
    }
})


// export const {userReset} = userSlice.actions

export default userSlice.reducer