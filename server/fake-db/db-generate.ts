import * as fs from 'fs'

import { JSONAsDatabase } from './db-definition'
import { DB_OUTPUT_FILE } from './db-files'

import { fakeAppointmentDetails } from '../fake/appointments'
import { fakeCanonicalModelDoctors } from '../fake/staff'
import { fakeClinicDetails } from '../fake/clinics'
import { fakeNotifications } from '../fake/notifications'

export const createAndFeedDB = () => {
  const db: JSONAsDatabase = {
    appointments: fakeAppointmentDetails,
    doctors: fakeCanonicalModelDoctors,
    clinics: fakeClinicDetails,
    notifications: fakeNotifications,
  }

  console.log('DB created and fed with fake data')
  return db
}

export const generateDB = (db: JSONAsDatabase) => {
  fs.writeFileSync(DB_OUTPUT_FILE, JSON.stringify(db, null, 2))
  console.log(`DB generated at ${DB_OUTPUT_FILE}`)
}

export const createDBFile = () => {
  const db = createAndFeedDB()
  generateDB(db)
}
