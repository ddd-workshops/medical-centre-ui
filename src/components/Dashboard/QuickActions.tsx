import { useNavigate } from 'react-router-dom';
import { Card } from '../../ui-library/Generic/Card';
import { Button } from '../../ui-library/Generic/Button';

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card title="Quick Actions">
      <div className="space-y-3">
        <Button 
          onClick={() => navigate('/book-appointment')}
          fill='SOLID'
          className="w-full"
        >
          Book New Appointment
        </Button>
        <Button 
          onClick={() => navigate('/medical-history')}
          fill='OUTLINED'
          className="w-full"
        >
          View Medical History
        </Button>
        <Button 
          fill='OUTLINED'
          className="w-full"
        >
          Contact Your Dentist
        </Button>
      </div>
    </Card>
  );
};
