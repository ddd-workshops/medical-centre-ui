import type { components, paths } from "./types";

// Entity types
export type Appointment = components['schemas']['Appointment']
export type AppointmentCreate = components['schemas']['AppointmentCreate']
export type AppointmentUpdate = components['schemas']['AppointmentUpdate']
export type Referral = components['schemas']['Referral']
export type ReferralCreate = components['schemas']['ReferralCreate']
export type ReferralUpdate = components['schemas']['ReferralUpdate']
export type NotificationListItem = components['schemas']['NotificationListItem']
export type Notification = components['schemas']['Notification']
export type Address = components['schemas']['Address']
export type PatientProfile = components['schemas']['PatientProfile']
export type LoginRequest = components['schemas']['LoginRequest']

// Path response types
export type GetAppointmentsResponse = paths['/appointments']['get']['responses']['200']['content']['application/json']
export type CreateAppointmentResponse = paths['/appointments']['post']['responses']['201']['content']['application/json']
export type GetAppointmentByIdResponse = paths['/appointments/{appointmentId}']['get']['responses']['200']['content']['application/json']
export type LoginResponse = paths['/auth/login']['post']['responses']['200']['content']['application/json']
export type GetProfileResponse = paths['/profile']['get']['responses']['200']['content']['application/json']
