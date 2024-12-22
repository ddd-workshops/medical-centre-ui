import type { ClinicDetails } from '../../contract/types';
import { H2, H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';
import { MapPin, Phone, Mail, CheckCircle2, XCircle } from 'lucide-react';
import { googleMapsLink } from '../../utils/google-maps';
import { A } from '../Typography/A';
import { TagList } from '../generic/TagList';
import { OpeningHours } from '../generic/OpeningHours';

type ClinicDetailsProps = {
  clinic: ClinicDetails;
};

export function ClinicDetails({ clinic }: ClinicDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Main content column */}
        <div className="md:col-span-2">
          <H2 className="mb-4 text-4xl">{clinic.name}</H2>

          {/* Contact Information */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <Paragraph size="MEDIUM">
                  {clinic.address.street}, {clinic.address.city}
                  <br />
                  {clinic.address.postalCode}, {clinic.address.country}
                </Paragraph>
                {clinic.coordinates && (
                  <A
                    href={googleMapsLink(clinic.coordinates.latitude, clinic.coordinates.longitude)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1"
                    size="SMALL"
                  >
                    View on Google Maps
                  </A>
                )}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-green-600 mt-1" />
              <A
                href={`tel:${clinic.phone}`}
                size="MEDIUM"
              >
                {clinic.phone}
              </A>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-green-600 mt-1" />
              <A
                href={`mailto:${clinic.email}`}
                size="MEDIUM"
              >
                {clinic.email}
              </A>
            </div>
          </div>

          {/* Available Specialties */}
          {clinic.availableSpecialties && clinic.availableSpecialties.length > 0 && (
            <div className="mb-6">
              <H3 className="mb-3">Available Specialties</H3>
              <TagList tags={clinic.availableSpecialties} />
            </div>
          )}

          {/* Description */}
          {clinic.description && (
            <div className="mb-6">
              <H3 className="mb-3">About the Clinic</H3>
              <Paragraph size="MEDIUM">{clinic.description}</Paragraph>
            </div>
          )}

          {/* Opening Hours */}
          <OpeningHours openingHours={clinic.openingHours} />

          {/* Facilities */}
          {clinic.facilities && clinic.facilities.length > 0 && (
            <div className="border-t border-gray-100 pt-6 mb-6">
              <H3 className="mb-4">Available Facilities</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clinic.facilities.map((facility, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {facility.availability ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-400 mt-1" />
                    )}
                    <div>
                      <Paragraph size="MEDIUM" className="font-medium">
                        {facility.name}
                      </Paragraph>
                      {facility.description && (
                        <Paragraph size="SMALL" className="text-gray-600">
                          {facility.description}
                        </Paragraph>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Image column */}
        {clinic.clinicPhotoURL && (
          <div className="w-1/2 md:w-full mx-auto">
            <img
              src={clinic.clinicPhotoURL}
              alt={clinic.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
