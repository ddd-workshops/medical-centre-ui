import { PatientProfile } from "../contract/types";
import { logger } from "../logger";

export const session = {
  loggedIn: false,
  patientProfile: null as PatientProfile | null,
  logIn(patientProfile: PatientProfile) {
    logger.info('Logging in as patient', patientProfile);
    this.loggedIn = true;
    this.patientProfile = patientProfile;
  },
  logOut() {
    logger.info('Logging out');
    this.loggedIn = false;
    this.patientProfile = null;
  }
}
