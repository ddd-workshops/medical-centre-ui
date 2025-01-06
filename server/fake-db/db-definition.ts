import type { AppointmentDetails, ClinicDetails, Notification } from "../contract/types"
import { DoctorCanonicalModel } from "./db-types"

export type JSONAsDatabase = {
  appointments: AppointmentDetails[]
  doctors: DoctorCanonicalModel[]
  clinics: ClinicDetails[]
  notifications: Notification[]
}
