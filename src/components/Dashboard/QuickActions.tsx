import { useNavigate } from 'react-router-dom';
import { Card } from '../generic/Card';
import { Button } from '../generic/Button';

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card title="Quick Actions">
      <div className="space-y-3">
        <Button 
          onClick={() => navigate('/book-appointment')}
          variant="PRIMARY"
          className="w-full"
        >
          Book New Appointment
        </Button>
        <Button 
          onClick={() => navigate('/medical-history')}
          variant="SECONDARY"
          className="w-full"
        >
          View Medical History
        </Button>
        <Button 
          variant="SECONDARY"
          className="w-full"
        >
          Contact Your Dentist
        </Button>
      </div>
    </Card>
  );
};
