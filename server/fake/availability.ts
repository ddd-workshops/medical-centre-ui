export enum DaysOfWeek {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY',
  }

export interface Availability {
  day: DaysOfWeek;
  startTime: string;
  endTime: string;
}

export const generateFakeAvailability = (length: 20 | 30 | 60): Availability[] => {
    const availabilities: Availability[] = [];
    const days = Object.values(DaysOfWeek);
    const slotsPerDay = Math.floor((8 * 60) / length); // 8 hours between 9am and 5pm

    days.forEach(day => {
        const usedSlots: Set<string> = new Set();

        for (let i = 0; i < slotsPerDay; i++) {
            let startTime: string;
            let endTime: string;

            do {
                const startHour = 9 + Math.floor(Math.random() * 8);
                const startMinute = Math.floor(Math.random() * (60 / length)) * length;
                startTime = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
                endTime = `${String(startHour).padStart(2, '0')}:${String(startMinute + length).padStart(2, '0')}`;
            } while (usedSlots.has(startTime));

            usedSlots.add(startTime);

            availabilities.push({
                day,
                startTime,
                endTime
            });
        }
    });

    return availabilities;
};