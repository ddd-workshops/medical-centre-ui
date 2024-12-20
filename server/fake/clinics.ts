import type { ClinicDetails, ClinicBrief } from '../contract/types';

export const generateFakeClinicDetails = (): ClinicDetails[] => [
  {
    id: '1',
    name: 'Bright Smiles Central London',
    address: '123 Oxford Street, London, W1D 2JD',
    phone: '+44 20 7123 4567',
    email: 'central@brightsmiles.com',
    coordinates: { latitude: 51.5157, longitude: -0.1378 }
  },
  {
    id: '2',
    name: 'Bright Smiles Canary Wharf',
    address: '45 Bank Street, London, E14 5JP',
    phone: '+44 20 7234 5678',
    email: 'canarywharf@brightsmiles.com',
    coordinates: { latitude: 51.5049, longitude: -0.0197 }
  },
  {
    id: '3',
    name: 'Bright Smiles Kensington',
    address: '88 Kensington High Street, London, W8 5SE',
    phone: '+44 20 7345 6789',
    email: 'kensington@brightsmiles.com',
    coordinates: { latitude: 51.5007, longitude: -0.1925 }
  },
  {
    id: '4',
    name: 'Bright Smiles Chelsea',
    address: '157 King\'s Road, London, SW3 5EQ',
    phone: '+44 20 7456 7890',
    email: 'chelsea@brightsmiles.com',
    coordinates: { latitude: 51.4875, longitude: -0.1687 }
  },
  {
    id: '5',
    name: 'Bright Smiles Mayfair',
    address: '25 Brook Street, London, W1K 4HB',
    phone: '+44 20 7567 8901',
    email: 'mayfair@brightsmiles.com',
    coordinates: { latitude: 51.5141, longitude: -0.1463 }
  },
  {
    id: '6',
    name: 'Bright Smiles Camden',
    address: '42 Camden High Street, London, NW1 0JH',
    phone: '+44 20 7678 9012',
    email: 'camden@brightsmiles.com',
    coordinates: { latitude: 51.5290, longitude: -0.1425 }
  },
  {
    id: '7',
    name: 'Bright Smiles Islington',
    address: '335 Upper Street, London, N1 0PB',
    phone: '+44 20 7789 0123',
    email: 'islington@brightsmiles.com',
    coordinates: { latitude: 51.5362, longitude: -0.1033 }
  },
  {
    id: '8',
    name: 'Bright Smiles Greenwich',
    address: '12 Nelson Road, London, SE10 9JB',
    phone: '+44 20 7890 1234',
    email: 'greenwich@brightsmiles.com',
    coordinates: { latitude: 51.4810, longitude: -0.0090 }
  },
  {
    id: '9',
    name: 'Bright Smiles Hampstead',
    address: '64 Hampstead High Street, London, NW3 1QE',
    phone: '+44 20 7901 2345',
    email: 'hampstead@brightsmiles.com',
    coordinates: { latitude: 51.5559, longitude: -0.1780 }
  },
  {
    id: '10',
    name: 'Bright Smiles Richmond',
    address: '28 The Quadrant, Richmond, London, TW9 1DN',
    phone: '+44 20 7012 3456',
    email: 'richmond@brightsmiles.com',
    coordinates: { latitude: 51.4613, longitude: -0.3037 }
  },
  {
    id: '11',
    name: 'Bright Smiles Wimbledon',
    address: '15 The Broadway, Wimbledon, London, SW19 1PS',
    phone: '+44 20 7123 4567',
    email: 'wimbledon@brightsmiles.com',
    coordinates: { latitude: 51.4214, longitude: -0.2067 }
  },
  {
    id: '12',
    name: 'Bright Smiles Notting Hill',
    address: '223 Portobello Road, London, W11 1LT',
    phone: '+44 20 7234 5678',
    email: 'nottinghill@brightsmiles.com',
    coordinates: { latitude: 51.5173, longitude: -0.2067 }
  },
  {
    id: '13',
    name: 'Bright Smiles Shoreditch',
    address: '145 Shoreditch High Street, London, E1 6JE',
    phone: '+44 20 7345 6789',
    email: 'shoreditch@brightsmiles.com',
    coordinates: { latitude: 51.5245, longitude: -0.0789 }
  },
  {
    id: '14',
    name: 'Bright Smiles Clapham',
    address: '56 Clapham High Street, London, SW4 7UL',
    phone: '+44 20 7456 7890',
    email: 'clapham@brightsmiles.com',
    coordinates: { latitude: 51.4620, longitude: -0.1380 }
  },
  {
    id: '15',
    name: 'Bright Smiles Baker Street',
    address: '222 Baker Street, London, NW1 5RT',
    phone: '+44 20 7567 8901',
    email: 'bakerst@brightsmiles.com',
    coordinates: { latitude: 51.5237, longitude: -0.1583 }
  }
];

export const generateFakeClinicBriefs = (): ClinicBrief[] => {
    const details = generateFakeClinicDetails();
    return details.map(({ id, name, address }) => ({ id, name, address }));
}
