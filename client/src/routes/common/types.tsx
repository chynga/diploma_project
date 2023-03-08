export type Service = {
    id: number
    title?: string
    description?: string
    approxDurationMin?: number
    approxCost?: string
    imgMainUrl?: string
    imgBeforeUrl?: string
    imgAfterUrl?: string
}

export type User = {
    id: number
    fullName: string
    email: string
    phone: string
    profileImageUrl: string
}

export type Doctor = User & {
    startedWorkingFrom: number
    available: boolean
    about: string
    imageUrl: string
    institutions: string[]
    certificates: string[]
    specialties: string[]
    services: Service[]
}

export type Status = "pending" | "success" | "cancelled"

export type Appointment = {
    id: number
    doctorId: number
    doctor?: User
    clientId: number
    client?: User
    serviceId: number
    service?: Service
    status: Status
    time?: number
    durationMin?: number
    cost?: number
    confirmed?: boolean
    clientMessage?: string
}

export type AppointmentSession = {
    time: number
    durationMin: number
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

export type AppNotificationType = "message" | "appointment"

export type AppNotification = {
    id?: number
    clientId: number
    type: AppNotificationType
    viewed?: boolean
    message: string
    time?: number
}

export const dateFormat = 'DD/MM/YYYY';
export const timeFormat = 'HH:mm';