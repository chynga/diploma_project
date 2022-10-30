import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { RootState } from '../../app/store'
import authAPI from './authAPI'

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null

export type UserCredentials = {
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    password: string
}

export type VerificationCredentials = {
    email: string
    id: number
    code: string
}

export type User = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    emailVerified: boolean
    role: 'admin' | 'client' | 'doctor'
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
        const response = await authAPI.register(user)
        return response.data as User
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message })
    }
});

// Login user
export const login = createAsyncThunk("auth/login", async (user: UserCredentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.login(user)
        return response.data as User
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message })
    }
});

// Login user
export const verify = createAsyncThunk("auth/email/verify", async (credentials: VerificationCredentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.verify(credentials)
        console.log(response);
        return response.data
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message })
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
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
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(verify.pending, state => {
                state.isLoading = true;
            })
            .addCase(verify.fulfilled, state => {
                state.isLoading = false;
                if (state.user !== undefined) {
                    state.user.emailVerified = true;
                }
            })
            .addCase(verify.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(logout.fulfilled, state => {
                state.user = undefined;
            });
    },
});

export const { reset } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;