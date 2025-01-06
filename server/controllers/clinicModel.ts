import { ClinicBrief, ClinicDetails } from "../contract/types";

export const clinicDetailsToBrief = (clinic: ClinicDetails): ClinicBrief => {
  const { id, name, address: { street, city, postalCode, country } } = clinic
  return {
    id, 
    name, 
    address: `${street}, ${city}, ${postalCode}, ${country}`
  };
}
