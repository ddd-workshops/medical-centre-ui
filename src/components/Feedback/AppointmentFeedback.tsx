import { Button } from '../../ui-library/Generic/Button';
import { Rating } from '../../ui-library/Forms/Rating';
import { useState } from 'react';
import { H2 } from '../../ui-library/Typography/Headings';
import { UserRound, Building2, Calendar } from 'lucide-react';
import { styles } from '../../ui-library/DesignEnums/MessageType';

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
        <p className="mb-2 flex items-center gap-2">
          <UserRound className={`w-5 h-5 ${styles.ACCENT.text}`} />
          Doctor: {appointment.doctorName}
        </p>
        <p className="mb-2 flex items-center gap-2">
          <Building2 className={`w-5 h-5 ${styles.ACCENT.text}`} />
          Clinic: {appointment.clinicName}
        </p>
        <p className="flex items-center gap-2">
          <Calendar className={`w-5 h-5 ${styles.ACCENT.text}`} />
          Date: {appointment.date} at {appointment.time}
        </p>
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
        size="LARGE"
        onClick={handleSubmit}
        disabled={!serviceRating || !doctorRating || !clinicRating}
        className="mt-8 w-full"
      >
        Submit Feedback
      </Button>
    </div>
  );
};
