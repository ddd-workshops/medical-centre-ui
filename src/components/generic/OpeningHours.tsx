import type { OpeningHours as OpeningHoursType } from '../../contract/types';
import { H3 } from '../Typography/Headings';

type OpeningHoursProps = {
  openingHours: OpeningHoursType;
};

export function OpeningHours({ openingHours }: OpeningHoursProps) {
  return (
    <div>
      <H3 className="mb-3">Opening Hours</H3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-medium mb-2">Weekdays</h4>
          <p>Monday: {openingHours.MONDAY}</p>
          <p>Tuesday: {openingHours.TUESDAY}</p>
          <p>Wednesday: {openingHours.WEDNESDAY}</p>
          <p>Thursday: {openingHours.THURSDAY}</p>
          <p>Friday: {openingHours.FRIDAY}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Weekends</h4>
          <p>Saturday: {openingHours.SATURDAY}</p>
          <p>Sunday: {openingHours.SUNDAY}</p>
        </div>
      </div>
    </div>
  );
}
