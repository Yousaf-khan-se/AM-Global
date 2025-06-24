import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadUser = createAsyncThunk(
    'user/loadUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/user');
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Session expired. Please log in again.'
            );
        }
    }
);