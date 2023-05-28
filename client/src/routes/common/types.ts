export type Service = {
    id?: number
    title?: string
    description?: string
    duration?: number
    cost?: string
    imgMainUrl?: string
    imgBeforeUrl?: string
    imgAfterUrl?: string
    subServices?: SubService[]
}

export type SubService = {
    title: string,
    price: string
}


export type User = {
    id: string
    fullName: string
    email: string
    phone: string
    profileImageUrl: string
}

export type Client = User & {
    allergy: string
    prescribedMedications: string
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
    createdAt: number
    isClient: boolean
}

export type Review = {
    id: string
    client: User
    body: string
    rating: number
    createdAt: Date
}

export type AppNotificationType = "consultation" | "appointment"

export type AppNotification = {
    id?: string
    clientId: string
    type: AppNotificationType
    isViewed?: boolean
    message: string
    showAt?: Date
}

export const dateFormat = 'DD/MM/YYYY';
export const timeFormat = 'HH:mm';