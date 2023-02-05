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

export type PasswordInfo = {
    oldPassword: string
    password: string
}