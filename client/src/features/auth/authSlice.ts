import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import authAPI from './authAPI'
import { EmailCodeCredentials, UserCredentials } from './authTypes'

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

export type Role = 'ADMIN' | 'DOCTOR' | 'CONSULTANT' | 'CLIENT';

export type User = {
    id?: number
    fullName?: string
    email?: string
    phone?: string
    profileImageUrl?: string
    token?: string
    roles?: Role[]
}

export type AuthError = {
    status: number
    message: string
}

export type AuthState = {
    user: User | undefined
    isLoading: boolean
    error: AuthError | undefined
}

const initialState: AuthState = {
    user: user,
    isLoading: false,
    error: undefined,
};

// Register user
export const register = createAsyncThunk("auth/register", async (user: UserCredentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.register(user);
        return response.data as User;
    } catch (err) {
        const error: any = err;
        const { status } = error.response;
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

// Login user
export const login = createAsyncThunk("auth/login", async (user: UserCredentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.login(user);
        return response.data as User;
    } catch (err) {
        const error: any = err;
        const { status } = error.response;
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

export const updateUserInfo = createAsyncThunk("auth/updateUserInfo", async (user: User, { rejectWithValue, getState }: any) => {
    try {
        const token = getState().auth.user.token;
        return await authAPI.updateUserInfo(user, token) as User;
    } catch (err) {
        const error: any = err;
        const { status } = error.response;
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

export const logout = createAsyncThunk("auth/logout", async () => {
    await authAPI.logout()
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: state => {
            state.isLoading = false
            state.error = undefined
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = undefined;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(login.pending, state => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = undefined;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(updateUserInfo.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateUserInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = undefined;
            })
            .addCase(updateUserInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(logout.fulfilled, state => {
                state.user = undefined;
            });
    },
});

export const { reset, setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;