import { MapPin } from 'lucide-react';

import type { DoctorProfile } from '../../contract/types';
import { ChipList } from '../generic/ChipList';
import { H2, H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';
import { A } from '../Typography/A';

type DoctorProfileProps = {
  doctor: DoctorProfile;
};

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Main content column */}
        <div className="md:col-span-2">
          <H2 className="mb-4 text-4xl">
            {doctor.title} {doctor.firstName} {doctor.lastName}
          </H2>

          {/* Specialties */}
          {doctor.specialties.length > 0 && (
            <div className="mb-6">
              <Paragraph size="MEDIUM" className="font-semibold mb-2">
                Specialties
              </Paragraph>
              <ChipList items={doctor.specialties} />
            </div>
          )}

          {/* Languages */}
          {doctor.languagesSpoken.length > 0 && (
            <div className="mb-6">
              <Paragraph size="MEDIUM" className="font-semibold mb-2">
                Languages
              </Paragraph>
              <Paragraph size="SMALL">
                {doctor.languagesSpoken.join(', ')}
              </Paragraph>
            </div>
          )}

          {/* Locations */}
          {doctor.locations.length > 0 && (
            <div className="mb-6">
              <Paragraph size="MEDIUM" className="font-semibold mb-2">
                Available at
              </Paragraph>
              <div className="space-y-2">
                {doctor.locations.map((location) => (
                  <div key={location.id} className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-green-600 mt-1" />
                    <A 
                      href={`/clinics/${location.id}`}
                      size="SMALL"
                    >
                      {location.address}
                    </A>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bio section */}
          {doctor.bio && (
            <div className="border-t border-gray-100 pt-6 mb-6">
              <H3 className="mb-3">Biography</H3>
              <Paragraph size="MEDIUM">{doctor.bio}</Paragraph>
            </div>
          )}

          {/* Additional Information */}
          {doctor.additionalInformation && doctor.additionalInformation.length > 0 && (
            <div className="border-t border-gray-100 pt-6">
              {doctor.additionalInformation.map((info, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <H3 className="mb-2">{info.heading}</H3>
                  <Paragraph size="MEDIUM">{info.text}</Paragraph>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image column */}
        {doctor.profilePictureUrl && (
          <div className="w-1/2 md:w-full mx-auto">
            <img
              src={doctor.profilePictureUrl}
              alt={`${doctor.firstName} ${doctor.lastName}`}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
