import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import authAPI from './authAPI'
import { EmailCodeCredentials, PasswordInfo, ProfileInfo, UserCredentials } from './authTypes'

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

type Roles = 'ADMIN' | 'MANAGER' | 'DOCTOR' | 'CONSULTANT' | 'CLIENT' | 'RECEPTION';

export type User = {
    id: number
    fullName: string
    email: string
    phone: string
    token: string
    roles: Roles[]
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

export const sendVerificationCode = createAsyncThunk("auth/email/sendCode", async (email: string, { rejectWithValue }) => {
    try {
        const response = await authAPI.sendVerificationCode(email);
        console.log(response);
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

// verify email
export const verify = createAsyncThunk("auth/email/verify", async (credentials: EmailCodeCredentials, { rejectWithValue }) => {
    try {
        const response = await authAPI.verify(credentials);
        return response.data;
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

export const sendRecoveryCode = createAsyncThunk("auth/password/sendCode", async (email: string, { rejectWithValue }) => {
    try {
        await authAPI.sendRecoveryCode(email);
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

export const recoverPassword = createAsyncThunk("auth/password/recover", async (credentials: EmailCodeCredentials, { rejectWithValue }) => {
    try {
        return await authAPI.recoverPassword(credentials);        
    } catch (err) {
        const error: any = err
        const { status } = error.response
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        return rejectWithValue({ status, message });
    }
});

export const updateUserProfile = createAsyncThunk("auth/update-info", async (profileInfo: ProfileInfo, { rejectWithValue, getState }: any) => {
    try {
        const token = getState().auth.user.token;
        return await authAPI.updateUserProfile(profileInfo, token);
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

export const updateUserPassword = createAsyncThunk("auth/password/update", async (passwordInfo: PasswordInfo, { rejectWithValue, getState }: any) => {
    try {
        const token = getState().auth.user.token;
        return await authAPI.updateUserPassword(passwordInfo, token);
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
            .addCase(sendVerificationCode.pending, state => {
                state.isLoading = true;
            })
            .addCase(sendVerificationCode.fulfilled, state => {
                state.isLoading = false;
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
            .addCase(updateUserPassword.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateUserPassword.fulfilled, state => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(updateUserPassword.rejected, (state, action) => {
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