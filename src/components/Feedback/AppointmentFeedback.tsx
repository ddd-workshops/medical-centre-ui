import { Button } from '../generic/Button';
import { Rating } from '../forms/Rating';
import { useState } from 'react';
import { H2 } from '../Typography/Headings';

type AppointmentDetails = {
  doctorName: string;
  clinicName: string;
  date: string;
  time: string;
};

type AppointmentFeedbackProps = {
  appointment: AppointmentDetails;
  onSubmit: (feedback: {
    serviceRating: number;
    doctorRating: number;
    clinicRating: number;
  }) => void;
};

export const AppointmentFeedback = ({ appointment, onSubmit }: AppointmentFeedbackProps) => {
  const [serviceRating, setServiceRating] = useState(0);
  const [doctorRating, setDoctorRating] = useState(0);
  const [clinicRating, setClinicRating] = useState(0);

  const handleSubmit = () => {
    onSubmit({
      serviceRating,
      doctorRating,
      clinicRating
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6 text-gray-600">
        <H2>How was your appointment?</H2>
        <p className="mb-2">Doctor: {appointment.doctorName}</p>
        <p className="mb-2">Clinic: {appointment.clinicName}</p>
        <p>Date: {appointment.date} at {appointment.time}</p>
      </div>

      <div className="space-y-8">
        <div>
          <p className="mb-2 text-gray-700">How would you rate the overall service?</p>
          <Rating value={serviceRating} onChange={setServiceRating} />
        </div>

        <div>
          <p className="mb-2 text-gray-700">How satisfied were you with Dr. {appointment.doctorName}?</p>
          <Rating value={doctorRating} onChange={setDoctorRating} />
        </div>

        <div>
          <p className="mb-2 text-gray-700">How would you rate the clinic facilities?</p>
          <Rating value={clinicRating} onChange={setClinicRating} />
        </div>
      </div>

      <Button
        size="BIG"
        variant="PRIMARY"
        onClick={handleSubmit}
        disabled={!serviceRating || !doctorRating || !clinicRating}
        className="mt-8 w-full"
      >
        Submit Feedback
      </Button>
    </div>
  );
};
