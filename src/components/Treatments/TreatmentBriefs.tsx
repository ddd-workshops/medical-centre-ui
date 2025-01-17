import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { patientService } from '../../http/patientService';
import { Card } from '../../ui-library/Generic/Card';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { ArrowRight } from 'lucide-react';
import { Spinner } from '../../ui-library/Generic/Spinner';

export const TreatmentBriefs: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['patient', 'treatments'],
    queryFn: () => patientService.getPrescribedTreatments()
  });

  if (isLoading) {
    return <Spinner size='SMALL' />;
  }

  const treatments = data?.slice(0, 2) || [];

  return (
    <Card title='Recent Treatments'>
      <div className="flex justify-between items-center mb-4">
        <Link 
          to="/prescribed-treatments" 
          className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
        >
          View all <ArrowRight size={16} />
        </Link>
      </div>
      {treatments.map((treatment) => (
        <div key={treatment.id} className="mb-4 p-3 bg-gray-50 rounded-lg">
          <Paragraph className="font-medium">{treatment.treatment.name}</Paragraph>
          <Paragraph className="text-sm text-gray-600">
            Prescribed: {new Date(treatment.prescribedDate).toLocaleDateString()}
          </Paragraph>
        </div>
      ))}
      {treatments.length === 0 && (
        <Paragraph className="text-gray-600">No recent treatments</Paragraph>
      )}
    </Card>
  );
};
