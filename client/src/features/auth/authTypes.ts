export type UserCredentials = {
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    password: string
}

export type EmailCodeCredentials = {
    email: string
    code?: string
    password?: string
}
