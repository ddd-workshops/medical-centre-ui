import { Card } from '../generic/Card';
import { MessageVariant } from '../MessageVariant/MessageVariant';
import { Entry } from './Entry';

export const RecentUpdates = () => {
  return (
    <Card title="Recent Updates">
      <div className="space-y-4">
        <Entry
          variant={MessageVariant.SUCCESS}
          label="New Service Available"
          to="/services/teeth-whitening"
        >
          Introducing advanced teeth whitening treatment
        </Entry>
        <Entry
          variant={MessageVariant.WARNING}
          label="Holiday Schedule"
          to="/schedule/holiday"
        >
          Check our updated working hours for the upcoming holiday
        </Entry>
      </div>
    </Card>
  );
};
