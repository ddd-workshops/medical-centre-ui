import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Building2, MapPin } from 'lucide-react';
import { clinicService } from '../../http/clinicsService';
import { Spinner } from '../../ui-library/Generic/Spinner';
import { H1, H3 } from '../../ui-library/Typography/Headings';
import { Text } from '../../ui-library/Typography/Text';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { clinicLink } from '../Routing/routes';

export const ClinicsList = () => {
  const { data: clinics, isLoading, error } = useQuery({
    queryKey: ['clinics'],
    queryFn: clinicService.getClinics
  });

  if (isLoading) return <Spinner />;
  if (error) return <Text variant="ALERT" size='LARGE'>Failed to load clinics</Text>;

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <H1>Our Clinics</H1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinics?.map((clinic) => (
          <Link
            key={clinic.id}
            to={clinicLink(clinic)}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-emerald-100"
          >
            <div className="flex items-start space-x-4">
              <Building2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <H3 className="mb-2">{clinic.name}</H3>
                <div className="flex items-start space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <Paragraph>{clinic.address}</Paragraph>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
