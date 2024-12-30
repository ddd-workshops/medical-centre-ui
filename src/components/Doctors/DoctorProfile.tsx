import { ArrowLeft, MapPin } from 'lucide-react';

import type { DoctorProfile } from '../../contract/types';
import { ChipList } from '../../ui-library/Generic/ChipList';
import { H2, H3 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { A } from '../../ui-library/Typography/A';
import { Divider } from '../../ui-library/Generic/Divider';
import { List } from '../../ui-library/Generic/List';
import { Link } from 'react-router-dom';
import { clinicLink } from '../Routing/routes';

type DoctorProfileProps = {
  doctor: DoctorProfile;
};

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Main content column */}
        <div className="md:col-span-2">
          <H2 className="mb-4 text-4xl">
            {doctor.title} {doctor.firstName} {doctor.lastName}
          </H2>

          {/* Specialties */}
          {doctor.specialties.length > 0 && (
            <div className="mb-6">
              <H3>Specialties</H3>
              <ChipList items={doctor.specialties.map(s => s.name)} />
            </div>
          )}

          {/* Languages */}
          {doctor.languagesSpoken.length > 0 && (
            <div className="mb-6">
              <H3>Languages</H3>
              <Paragraph size="SMALL">
                {doctor.languagesSpoken.join(', ')}
              </Paragraph>
            </div>
          )}

          {/* Locations */}
          {doctor.locations.length > 0 && (
            <div className="mb-6">
              <H3>Available at</H3>
              <List
                items={doctor.locations}
                bulletIcon={MapPin}
                renderItem={(location) => (
                  <A 
                    href={clinicLink(location)}
                    size="SMALL"
                    className="text-base"
                  >
                    {location.name}
                    <div className='text-sm'>({location.address})</div>
                  </A>
                )}
              />
            </div>
          )}

          <div className="flex items-start gap-2">
            <ArrowLeft className="w-5 h-5 text-green-600 mt-1" />
            <Link to="/staff" className="text-green-600 hover:text-green-700 font-medium">
              Show all doctors
            </Link>
          </div>

          <Divider />

          {/* Bio section */}
          {doctor.bio && (
            <div className="mb-6">
              <H3>Biography</H3>
              <Paragraph size="MEDIUM">{doctor.bio}</Paragraph>
            </div>
          )}

          <Divider />

          {/* Additional Information */}
          {doctor.additionalInformation && doctor.additionalInformation.length > 0 && (
            <div className="mb-6">
              {doctor.additionalInformation.map((info, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <H3>{info.heading}</H3>
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
