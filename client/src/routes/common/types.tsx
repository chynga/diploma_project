export type Service = {
    id: number
    title: string
    description: string
    approxDurationMin: number
    approxCost: string
}

export type User = {
    id: number
    fullName: string
    email: string
    phone: string
}

export type Appointment = {
    id: number
    doctorId: number
    doctor?: User
    clientId: number
    client?: User
    serviceId: number
    service?: Service
    status: string
    approvedTime?: number
    requestedTime?: number
    durationMin?: number
    cost?: number
    confirmed?: boolean
    clientMessage?: string
}

export const dateFormat = 'DD/MM/YYYY';
export const timeFormat = 'HH:mm';