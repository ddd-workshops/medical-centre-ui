import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar, MapPin, User, Clock, Stethoscope } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import 'react-day-picker/dist/style.css';

import { Stepper } from '../../ui-library/Generic/Stepper';
import { TimeSlots } from './TimeSlots';
import { TileChooser } from './TileChooser';
import { H2, H3 } from '../../ui-library/Typography/Headings';

// Mock data
const services = [
  { id: 1, name: 'General Checkup', duration: '30 min', price: 100 },
  { id: 2, name: 'Teeth Cleaning', duration: '60 min', price: 150 },
  { id: 3, name: 'Root Canal', duration: '90 min', price: 800 },
  { id: 4, name: 'Dental Implant Consultation', duration: '45 min', price: 200 },
];

const locations = [
  { id: 1, name: 'Central London' },
  { id: 2, name: 'North London' },
  { id: 3, name: 'South London' },
  { id: 4, name: 'East London' },
  { id: 5, name: 'West London' },
];

const doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialization: 'General Dentist' },
  { id: 2, name: 'Dr. Michael Chen', specialization: 'Orthodontist' },
  { id: 3, name: 'Dr. Emily Williams', specialization: 'Implant Specialist' },
  { id: 4, name: 'Dr. James Wilson', specialization: 'Periodontist' },
];

const timeSlots = [
  { id: 1, label: '09:00' },
  { id: 2, label: '09:30' },
  { id: 3, label: '10:00' },
  { id: 4, label: '10:30' },
  { id: 5, label: '11:00' },
  { id: 6, label: '11:30' },
  { id: 7, label: '14:00' },
  { id: 8, label: '14:30' },
  { id: 9, label: '15:00' },
  { id: 10, label: '15:30' },
  { id: 11, label: '16:00' },
  { id: 12, label: '16:30' },
];

export function AppointmentBooking() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState<{ id: number | string, label: string } | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([1]));

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return !!selectedService;
      case 2:
        return !!selectedLocation;
      case 3:
        return !!selectedDate && !!selectedTime;
      case 4:
        return !!selectedDoctor;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 4 && canProceedToNextStep()) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setVisitedSteps(prev => new Set([...prev, nextStep]));
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleStepClick = (step: number) => {
    if (isStepClickable(step)) {
      setCurrentStep(step);
    }
  };

  const isStepClickable = (step: number) => {
    // A step is clickable if:
    // 1. It's a step we've visited before
    // 2. It's the current step
    // 3. It's the next step and we can proceed to it
    if (visitedSteps.has(step)) return true;
    if (step === currentStep + 1 && canProceedToNextStep()) return true;
    return false;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TileChooser
            items={services}
            selectedItem={selectedService}
            onSelect={setSelectedService}
            title="Select Service"
            renderItem={(service) => (
              <>
                <H3 className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-emerald-600" />
                  {service.name}
                </H3>
                <p className="text-gray-500">Duration: {service.duration}</p>
                <p className="text-emerald-600 font-medium">
                  {formatCurrency(service.price)}
                </p>
              </>
            )}
          />
        );

      case 2:
        return (
          <TileChooser
            items={locations}
            selectedItem={selectedLocation}
            onSelect={setSelectedLocation}
            title="Select Location"
            renderItem={(location) => (
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span>{location.name}</span>
              </div>
            )}
          />
        );

      case 3:
        return (
          <div className="space-y-6">
            <H2>Select Date & Time</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="border-0"
                />
              </div>
              <TimeSlots 
                slots={timeSlots}
                selectedTimeId={selectedTime?.id}
                onTimeSelect={setSelectedTime}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <TileChooser
            items={doctors}
            selectedItem={selectedDoctor}
            onSelect={setSelectedDoctor}
            title="Select Doctor"
            idKey="id"
            renderItem={(doctor) => (
              <>
                <H3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-emerald-600" />
                  {doctor.name}
                </H3>
                <p className="text-gray-500">{doctor.specialization}</p>
              </>
            )}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Stepper 
              currentStep={currentStep} 
              totalSteps={4} 
              onStepClick={handleStepClick}
              isStepClickable={isStepClickable}
            />

            {/* Step Content */}
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-end">
              <div className="flex gap-4">
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={currentStep === 4 ? handleConfirm : handleNext}
                  className={`px-6 py-2 rounded-lg ${
                    canProceedToNextStep()
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!canProceedToNextStep()}
                >
                  {currentStep === 4 ? 'Confirm Appointment' : 'Next'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <H2 className="mb-6">Confirm Your Appointment</H2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-gray-600">
                    {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at {selectedTime?.label}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">{selectedLocation}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium">Doctor</p>
                  <p className="text-gray-600">{selectedDoctor?.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium">Service</p>
                  <p className="text-gray-600">{selectedService?.name}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle appointment confirmation
                  alert('Appointment confirmed! You will receive a confirmation email shortly.');
                  setShowConfirmation(false);
                }}
                className="flex-1 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}