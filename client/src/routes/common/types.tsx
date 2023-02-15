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

export type Status = "pending" | "approved" | "success" | "cancelled"

export type Appointment = {
    id: number
    doctorId: number
    doctor?: User
    clientId: number
    client?: User
    serviceId: number
    service?: Service
    status: Status
    approvedTime?: number
    requestedTime?: number
    durationMin?: number
    cost?: number
    confirmed?: boolean
    clientMessage?: string
}

export type Message = {
    id: number
    clientId: number
    consultantId?: number
    body: string
    sentTime: number
    isClient: boolean
}

export type Review = {
    id: number
    clientId: number
    client: User
    body: string
    rating: number
}

export const dateFormat = 'DD/MM/YYYY';
export const timeFormat = 'HH:mm';