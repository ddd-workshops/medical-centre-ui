import type { components, paths } from "./contract";

// Entity types
export type Address = components['schemas']['Address']
export type AppointmentDetails = components['schemas']['AppointmentDetails']
export type AppointmentCreateRequest = components['schemas']['AppointmentCreateRequest']
export type AppointmentUpdateRequest = components['schemas']['AppointmentUpdateRequest']
export type AppStatus = components['schemas']['AppStatus']
export type Billing = components['schemas']['Billing']
export type ClinicBrief = components['schemas']['ClinicBrief']
export type ClinicDetails = components['schemas']['ClinicDetails']
export type CMSPageContent = components['schemas']['CMSPageContent']
export type Document = components['schemas']['Document']
export type DoctorBrief = components['schemas']['DoctorBrief']
export type LoginRequest = components['schemas']['LoginRequest']
export type Notification = components['schemas']['Notification']
export type NotificationListItem = components['schemas']['NotificationListItem']
export type PatientBrief = components['schemas']['PatientBrief']
export type PatientProfile = components['schemas']['PatientProfile']
export type PrescribedTreatment = components['schemas']['PrescribedTreatment']
export type Referral = components['schemas']['Referral']
export type ReferralCreateRequest = components['schemas']['ReferralCreateRequest']
export type ReferralUpdateRequest = components['schemas']['ReferralUpdateRequest']
export type ServiceType = components['schemas']['ServiceType']
export type ServiceOffer = components['schemas']['ServiceOffer']
export type Treatment = components['schemas']['Treatment']
export type Coordinates = components['schemas']['Coordinates']

// Path response types
export type GetAppointmentsResponse = paths['/appointments']['get']['responses']['200']['content']['application/json']
export type CreateAppointmentResponse = paths['/appointments']['post']['responses']['201']['content']['application/json']
export type GetAppointmentByIdResponse = paths['/appointments/{appointmentId}']['get']['responses']['200']['content']['application/json']
export type LoginResponse = paths['/auth/login']['post']['responses']['200']['content']['application/json']
export type RegisterRequest = components['schemas']['RegisterRequest']
export type GetProfileResponse = paths['/profile']['get']['responses']['200']['content']['application/json']
export type GetPrescribedTreatmentsResponse = paths['/prescribed-treatments']['get']['responses']['200']['content']['application/json']
