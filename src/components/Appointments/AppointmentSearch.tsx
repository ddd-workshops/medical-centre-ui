import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar, MapPin, User, Clock } from 'lucide-react';
import 'react-day-picker/dist/style.css';
import { Stepper } from '../generic/Stepper';

// Mock data
const services = [
  { id: 1, name: 'General Checkup', duration: '30 min', price: '£100' },
  { id: 2, name: 'Teeth Cleaning', duration: '60 min', price: '£150' },
  { id: 3, name: 'Root Canal', duration: '90 min', price: '£800' },
  { id: 4, name: 'Dental Implant Consultation', duration: '45 min', price: '£200' },
];

const locations = [
  'Central London',
  'North London',
  'South London',
  'East London',
  'West London',
];

const doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialization: 'General Dentist' },
  { id: 2, name: 'Dr. Michael Chen', specialization: 'Orthodontist' },
  { id: 3, name: 'Dr. Emily Williams', specialization: 'Implant Specialist' },
  { id: 4, name: 'Dr. James Wilson', specialization: 'Periodontist' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
];

export function AppointmentSearch() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([1]));

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return !!selectedService;
      case 2:
        return !!selectedDate && !!selectedTime;
      case 3:
        return !!selectedLocation;
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
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Select Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 rounded-lg border ${
                    selectedService?.id === service.id
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-500'
                  }`}
                >
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-gray-500">Duration: {service.duration}</p>
                  <p className="text-emerald-600 font-medium">{service.price}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Select Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="border-0"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Available Time Slots</h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded ${
                        selectedTime === time
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Select Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`p-4 rounded-lg border ${
                    selectedLocation === location
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-500'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span>{location}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Select Doctor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-4 rounded-lg border ${
                    selectedDoctor?.id === doctor.id
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-emerald-500'
                  }`}
                >
                  <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-gray-500">{doctor.specialization}</p>
                </button>
              ))}
            </div>
          </div>
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
            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                className={`px-6 py-2 rounded-lg ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <button
                onClick={currentStep === 4 ? handleConfirm : handleNext}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                {currentStep === 4 ? 'Confirm Appointment' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Confirm Your Appointment</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-gray-600">
                    {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
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