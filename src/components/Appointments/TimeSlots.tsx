import React, { useState, useEffect } from 'react';
import { Button } from '../generic/Button';
import { H3 } from '../Typography/Headings';

interface TimeSlot {
  id: string | number;
  label: string;
}

interface TimeSlotsProps {
  slots: TimeSlot[];
  selectedTimeId?: string | number;
  onTimeSelect: (timeSlot: TimeSlot) => void;
}

export function TimeSlots({ slots, selectedTimeId, onTimeSelect }: TimeSlotsProps) {
  const [internalSelectedId, setInternalSelectedId] = useState<string | number | null>(selectedTimeId ?? null);

  useEffect(() => {
    if (selectedTimeId !== undefined) {
      setInternalSelectedId(selectedTimeId);
    }
  }, [selectedTimeId]);

  const handleTimeSelect = (slot: TimeSlot) => {
    setInternalSelectedId(slot.id);
    onTimeSelect(slot);
  };

  return (
    <div className="space-y-4">
      <H3>Available Time Slots</H3>
      <div className="grid grid-cols-3 gap-2">
        {slots.map((slot) => (
          <Button
            key={slot.id}
            onClick={() => handleTimeSelect(slot)}
            variant={internalSelectedId === slot.id ? 'PRIMARY' : 'SECONDARY'}
            size="SMALL"
          >
            {slot.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
