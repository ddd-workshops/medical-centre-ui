import { Card } from '../../ui-library/Generic/Card';
import { Entry } from '../../ui-library/Generic/Entry';

export const RecentUpdates = () => {
  return (
    <Card title="Recent Updates">
      <div className="space-y-4">
        <Entry
          variant="SUCCESS"
          label="New Service Available"
          to="/services/teeth-whitening"
        >
          Introducing advanced teeth whitening treatment
        </Entry>
        <Entry
          variant="WARNING"
          label="Holiday Schedule"
          to="/schedule/holiday"
        >
          Check our updated working hours for the upcoming holiday
        </Entry>
      </div>
    </Card>
  );
};
