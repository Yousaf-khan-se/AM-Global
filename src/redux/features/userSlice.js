import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../../thunk/authThunk';
import { loadUser } from '../../thunk/userThunk';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    success: false,
    message: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearSuccess: (state) => {
            state.success = false;
            state.message = '';
        }, setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        }
    },
    extraReducers: (builder) => {
        // Register user
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message || 'Registration successful';
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
        });

        // Login user
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }); builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.success = true;
            state.message = action.payload.message || 'Login successful';
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Invalid credentials';
        });

        // Logout user
        builder.addCase(logoutUser.pending, (state) => {
            state.loading = true;
        }); builder.addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
        }); builder.addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Logout failed';
        });

        // Load user
        builder.addCase(loadUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.success = true;
        }); builder.addCase(loadUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        });
    },
});

export const { clearError, clearSuccess, setCredentials, logout } = userSlice.actions;

export default userSlice.reducer;
