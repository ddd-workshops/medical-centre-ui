import { create } from 'zustand';
import type { PatientProfile } from '../../contract/types';

type AuthState = {
  user: PatientProfile;
  isAuthenticated: true;
  showContactVerification: boolean;
  login: (user: PatientProfile) => void;
  logout: () => void;
  setShowContactVerification: (show: boolean) => void;
} | {
  user: null;
  isAuthenticated: false;
  showContactVerification: boolean;
  login: (user: PatientProfile) => void;
  logout: () => void;
  setShowContactVerification: (show: boolean) => void;
};

export const shouldShowContactVerification = () => true; // Currently always true

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  showContactVerification: false,
  login: (user) => set({ user, isAuthenticated: true, showContactVerification: shouldShowContactVerification() }),
  logout: () => set({ user: null, isAuthenticated: false, showContactVerification: false }),
  setShowContactVerification: (show) => set({ showContactVerification: show })
}));
