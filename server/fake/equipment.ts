import type { Equipment } from './types';
import { EquipmentType, EquipmentCategory } from './types';

export const allEquipment: Equipment[] = [
  // Basic Equipment
  { id: 'eq-1', name: 'Dental Chair', type: EquipmentType.BASIC, category: EquipmentCategory.BASIC },
  { id: 'eq-2', name: 'Sterilization Unit', type: EquipmentType.BASIC, category: EquipmentCategory.BASIC },
  { id: 'eq-3', name: 'Dental Light', type: EquipmentType.BASIC, category: EquipmentCategory.BASIC },
  { id: 'eq-4', name: 'Suction System', type: EquipmentType.BASIC, category: EquipmentCategory.BASIC },
  { id: 'eq-5', name: 'Dental Handpieces', type: EquipmentType.BASIC, category: EquipmentCategory.BASIC },
  { id: 'eq-6', name: 'Instrument Cabinet', type: EquipmentType.BASIC, category: EquipmentCategory.BASIC },

  // Diagnostic Equipment
  { id: 'eq-10', name: 'Digital X-Ray System', type: EquipmentType.DIAGNOSTIC, category: EquipmentCategory.ADVANCED },
  { id: 'eq-11', name: 'Panoramic X-Ray', type: EquipmentType.DIAGNOSTIC, category: EquipmentCategory.ADVANCED },
  { id: 'eq-12', name: 'Intraoral Camera', type: EquipmentType.DIAGNOSTIC, category: EquipmentCategory.ADVANCED },
  { id: 'eq-13', name: 'Digital Scanner', type: EquipmentType.DIAGNOSTIC, category: EquipmentCategory.ADVANCED },
  { id: 'eq-14', name: 'Cavity Detection Device', type: EquipmentType.DIAGNOSTIC, category: EquipmentCategory.ADVANCED },
  { id: 'eq-15', name: '3D CBCT Scanner', type: EquipmentType.DIAGNOSTIC, category: EquipmentCategory.ADVANCED },

  // Surgical Equipment
  { id: 'eq-20', name: 'Dental Laser', type: EquipmentType.SURGICAL, category: EquipmentCategory.ADVANCED },
  { id: 'eq-21', name: 'Surgical Microscope', type: EquipmentType.SURGICAL, category: EquipmentCategory.ADVANCED },
  { id: 'eq-22', name: 'Implant Motor System', type: EquipmentType.SURGICAL, category: EquipmentCategory.ADVANCED },
  { id: 'eq-23', name: 'Piezo Surgery Unit', type: EquipmentType.SURGICAL, category: EquipmentCategory.ADVANCED },
  { id: 'eq-24', name: 'Electrosurgery Unit', type: EquipmentType.SURGICAL, category: EquipmentCategory.ADVANCED },

  // Specialty Equipment
  { id: 'eq-30', name: 'CEREC Machine', type: EquipmentType.SPECIALTY, category: EquipmentCategory.ADVANCED },
  { id: 'eq-31', name: 'CAD/CAM System', type: EquipmentType.SPECIALTY, category: EquipmentCategory.ADVANCED },
  { id: 'eq-32', name: 'Teeth Whitening System', type: EquipmentType.SPECIALTY, category: EquipmentCategory.ADVANCED },
  { id: 'eq-33', name: 'Root Canal Treatment System', type: EquipmentType.SPECIALTY, category: EquipmentCategory.ADVANCED },

  // Orthodontic Equipment
  { id: 'eq-40', name: 'Orthodontic Chair', type: EquipmentType.ORTHODONTIC, category: EquipmentCategory.BASIC },
  { id: 'eq-41', name: 'Wire Bending Equipment', type: EquipmentType.ORTHODONTIC, category: EquipmentCategory.ADVANCED },
  { id: 'eq-42', name: 'Clear Aligner Scanner', type: EquipmentType.ORTHODONTIC, category: EquipmentCategory.ADVANCED },

  // Preventive Equipment
  { id: 'eq-50', name: 'Air Polishing System', type: EquipmentType.PREVENTIVE, category: EquipmentCategory.BASIC },
  { id: 'eq-51', name: 'Ultrasonic Scaler', type: EquipmentType.PREVENTIVE, category: EquipmentCategory.ADVANCED },
  { id: 'eq-52', name: 'Prophylaxis System', type: EquipmentType.PREVENTIVE, category: EquipmentCategory.ADVANCED },

  // Restorative Equipment
  { id: 'eq-60', name: 'Dental Curing Light', type: EquipmentType.RESTORATIVE, category: EquipmentCategory.BASIC },
  { id: 'eq-61', name: 'Amalgamator', type: EquipmentType.RESTORATIVE, category: EquipmentCategory.ADVANCED },
  { id: 'eq-62', name: 'Composite Finishing System', type: EquipmentType.RESTORATIVE, category: EquipmentCategory.ADVANCED }
];

export const basicEquipment = allEquipment.filter(e => e.category === EquipmentCategory.BASIC);
export const advancedEquipment = allEquipment.filter(e => e.category === EquipmentCategory.ADVANCED);
