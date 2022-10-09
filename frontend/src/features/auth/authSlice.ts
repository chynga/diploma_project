import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import authAPI from './authAPI'

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null

export type UserCredentials = {
  email: string
  password: string
}

export type User = {
    id?: number | undefined
    name: string
    surname: string
    email: string
    phone: string
    role?: 'admin' | 'client' | 'doctor'
}

export type NewUser = User & UserCredentials

// export type User = {
//     id: number
//     name: string
//     surname: string
//     email: string
//     phone: string
//     role: 'admin' | 'client' | 'doctor'
// }

export type AuthError = {
  code: number
  message: string
}

export type AuthState = {
    user: User | undefined
    // status: 'idle' | 'loading' | 'failed'
    isLoading: boolean
    // message: string
    error: AuthError | undefined
}

const initialState: AuthState = {
    user: user,
    // status: 'idle',
    isLoading: false,
    // message: '',
    error: undefined,
};

// Register user
export const register = createAsyncThunk("auth/register", async (user: User, { rejectWithValue }) => {
    const response = await authAPI.register(user)
    console.log('authSlice', response)
    // const message: string =
    //     // (error.response &&
    //     //     error.response.data &&
    //     //     error.response.data.message) ||
    //     // error.message ||
    //     error?.toString() || '';
    if (response.status === 400) {
        // return rejectWithValue({ response.status, message })
    }

    // return (await response.json()) as MyData
});

// Login user
// export const login = createAsyncThunk<any, NewUser, { rejectValue: AuthError }>("auth/login", async (user: User, thunkAPI) => {
//     try {
//         return await authAPI.login(user)
//     } catch (error) {
//         if (error as AuthError) {
//             const { code, message } = error

//             // const message =
//             //     // (error.response &&
//             //     //     error.response.data &&
//             //     //     error.response.data.message) ||
//             //     // error.message ||
//             //     error?.toString();
//             return thunkAPI.rejectWithValue({ code, message })
//         }
//     }
// });

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
                // state.user = action.payload;
            })
            // .addCase(register.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            // .addCase(login.pending, state => {
            //     state.isLoading = true;
            // })
            // .addCase(login.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.user = action.payload;
            // })
            // .addCase(login.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            .addCase(logout.fulfilled, state => {
                state.user = undefined;
            });
    },
});