import { slugify } from "../../utils/slugify";

interface DoctorLinkOptions {
  doctorId: number;
  doctorName: string;
}

export const doctorLink = ({ doctorId, doctorName }: DoctorLinkOptions) =>
  `/staff/${slugify(`${doctorId}-${doctorName}`)}`;

interface ClinicLinkOptions {
  id: number;
  name: string;
}

export const clinicLink = ({ id: clinicId, name: clinicName }: ClinicLinkOptions) =>
  `/clinics/${slugify(`${clinicId}-${clinicName}`)}`;

