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

export type EmailCodeCredentials = {
    email: string
    code: string
    password?: string
}

export type ProfileInfo = {
    firstName: string
    lastName: string
    phone: string
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
    recoveryCodeSent: boolean
    passwordRecovered: boolean
    verificationCodeSent: boolean
}

const initialState: AuthState = {
    user: user,
    isLoading: false,
    error: undefined,
    recoveryCodeSent: false,
    passwordRecovered: false,
    verificationCodeSent: false
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

export const sendVerificationCode = createAsyncThunk("auth/email/sendCode", async (email: string, { rejectWithValue }) => {
    try {
        const response = await authAPI.sendVerificationCode(email)
        console.log(response);
        return 
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

// verify email
export const verify = createAsyncThunk("auth/email/verify", async (credentials: EmailCodeCredentials, { rejectWithValue }) => {
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

export const sendRecoveryCode = createAsyncThunk("auth/password/sendCode", async (email: string, { rejectWithValue }) => {
    try {
        const response = await authAPI.sendRecoveryCode(email)
        console.log(response);
        return 
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

export const recoverPassword = createAsyncThunk("auth/password/recover", async (credentials: EmailCodeCredentials, { rejectWithValue }) => {
    try {
        const newCredentials = await authAPI.recoverPassword(credentials)
        
        return newCredentials
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

export const updateUserProfile = createAsyncThunk("auth/update-info", async (profileInfo: ProfileInfo, { rejectWithValue, getState }: any) => {
    try {
        const token = getState().auth.user.token;
        
        const user = await authAPI.updateUserProfile(profileInfo, token)
        
        return user
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
            state.recoveryCodeSent = false
            state.passwordRecovered = false
            state.verificationCodeSent = false
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
            .addCase(sendVerificationCode.pending, state => {
                state.isLoading = true;
            })
            .addCase(sendVerificationCode.fulfilled, state => {
                state.isLoading = false;
                state.verificationCodeSent = true;
            })
            .addCase(sendVerificationCode.rejected, (state, action) => {
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
            .addCase(sendRecoveryCode.pending, state => {
                state.isLoading = true;
            })
            .addCase(sendRecoveryCode.fulfilled, state => {
                state.isLoading = false;
                state.recoveryCodeSent = true;
            })
            .addCase(sendRecoveryCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(recoverPassword.pending, state => {
                state.isLoading = true;
            })
            .addCase(recoverPassword.fulfilled, state => {
                state.isLoading = false;
                state.error = undefined;
                state.passwordRecovered = true;
            })
            .addCase(recoverPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(updateUserProfile.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                state.user = action.payload;
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as AuthError;
            })
            .addCase(logout.fulfilled, state => {
                state.user = undefined;
            });
    },
});

export const { reset } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;