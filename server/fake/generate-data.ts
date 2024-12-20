import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { generateDentalCentre } from './centres';
import { generateDoctor } from './staff';
import { generateFakeServiceOffers } from './services';
import { allEquipment, basicEquipment, advancedEquipment } from './equipment';
import { generateFakeAppointments } from './appointments';
import { generateFakeNotifications } from './notifications';
import type { Doctor, Equipment, DentalCentre } from './types';
import { AppointmentDetails, Notification, ServiceOffer } from '../contract/types';

interface GeneratedData {
  metadata: {
    generatedAt: string;
    version: string;
  };
  references: {
    services: ServiceOffer[];
    equipment: {
      all: Equipment[];
      basic: Equipment[];
      advanced: Equipment[];
    };
  };
  entities: {
    centres: DentalCentre[];
    doctors: Doctor[];
    appointments: AppointmentDetails[];
    notifications: Notification[];
  };
  statistics: {
    centres: {
      total: number;
      totalCabinets: number;
      totalStaff: number;
    };
    equipment: {
      total: number;
      basic: number;
      advanced: number;
    };
    services: {
      total: number;
    };
    appointments: {
      total: number;
    };
    notifications: {
      total: number;
    };
  }
}

const generateData = (): GeneratedData => {
  // Generate main entities
  const centres = Array.from({ length: 15 }, generateDentalCentre);
  const doctors = Array.from({ length: 50 }, generateDoctor);
  const appointments = generateFakeAppointments();
  const notifications = generateFakeNotifications();

  // Calculate statistics
  const stats = {
    centres: {
      total: centres.length,
      totalCabinets: centres.reduce((acc, c) => acc + c.cabinets.length, 0),
      totalStaff: centres.reduce((acc, c) => acc + c.staff.length, 0)
    },
    equipment: {
      total: allEquipment.length,
      basic: basicEquipment.length,
      advanced: advancedEquipment.length
    },
    services: {
      total: generateFakeServiceOffers().length
    },
    appointments: {
      total: appointments.length
    },
    notifications: {
      total: notifications.length
    }
  };

  const data: GeneratedData = {
    metadata: {
      generatedAt: new Date().toISOString(),
      version: '1.0.0'
    },
    references: {
      services: generateFakeServiceOffers(),
      equipment: {
        all: allEquipment,
        basic: basicEquipment,
        advanced: advancedEquipment
      }
    },
    entities: {
      centres,
      doctors,
      appointments,
      notifications
    },
    statistics: stats
  };

  return data;
};

const saveGeneratedData = (data: GeneratedData) => {
  const dataDir = join(__dirname, '../data');
  mkdirSync(dataDir, { recursive: true });

  // Save complete dataset
  writeFileSync(
    join(dataDir, 'complete.json'),
    JSON.stringify(data, null, 2)
  );

  // Save individual entity files
  writeFileSync(
    join(dataDir, 'centres.json'),
    JSON.stringify(data.entities.centres, null, 2)
  );
  
  writeFileSync(
    join(dataDir, 'doctors.json'),
    JSON.stringify(data.entities.doctors, null, 2)
  );

  writeFileSync(
    join(dataDir, 'appointments.json'),
    JSON.stringify(data.entities.appointments, null, 2)
  );

  writeFileSync(
    join(dataDir, 'notifications.json'),
    JSON.stringify(data.entities.notifications, null, 2)
  );

  writeFileSync(
    join(dataDir, 'references.json'),
    JSON.stringify(data.references, null, 2)
  );

  console.log('Generated data statistics:', data.statistics);
};

if (require.main === module) {
  const data = generateData();
  saveGeneratedData(data);
}

export { generateData, saveGeneratedData };
