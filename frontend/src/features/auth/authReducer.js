import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// create user
export const register = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
    try {
        return await authService.register(formData)
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

// user login
export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
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

// user info
export const getUser = createAsyncThunk('auth/user', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.admin.token
        return await authService.getUser(id, token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
});

//all user info
export const getAllUser = createAsyncThunk('auth/allUser', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.admin.token
        return await authService.allUsers(token)
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

//update user
export const updateUser = createAsyncThunk('auth/update', async (data, thunkAPI) => {
    try {
        const { id, formData } = data
        console.log(id)
        const token = thunkAPI.getState().auth.admin.token
        return await authService.updateUser(id, formData, token)
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

// admin login
export const adminLogin = createAsyncThunk('auth/admin', async (formData, thunkAPI) => {
    try {
        return await authService.adminLogin(formData)
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

// user logout
export const logout = createAsyncThunk('auth/logout', (_, thunkAPI) => {
    try {
        return authService.logout();
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

// admin logout
export const adminLogout = createAsyncThunk('auth/adminLogout', (_, thunkAPI) => {
    try {
        return authService.adminLogout();
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

const user = JSON.parse(localStorage.getItem('user'))
const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
    user: user ? user : null,
    admin: admin ? admin : null,
    data: [],
    activeUser: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.isSuccess = true
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(adminLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.admin = action.payload
                state.isSuccess = true
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action?.payload
                state.isSuccess = true
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.activeUser = (action?.payload)
                state.isSuccess = true
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getAllUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.data.push(action.payload)
                state.isSuccess = true
            })
            .addCase(getAllUser.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false
                const users = state.data.filter((user) => user._id !== action.payload._id)
                // state.data = [...users, action.payload]
                state.data.push('hello')
                state.isSuccess = true
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(adminLogout.fulfilled, (state) => {
                state.admin = null
            })
    }
});

export const { reset } = authReducer.actions

export default authReducer.reducer