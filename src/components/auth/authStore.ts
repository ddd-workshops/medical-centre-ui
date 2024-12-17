import { create } from 'zustand';
import type { PatientProfile } from '../../contract';

type AuthState = {
  user: PatientProfile
  isAuthenticated: true;
  login: (user: PatientProfile) => void;
  logout: () => void;
} | {
  user: null;
  isAuthenticated: false;
  login: (user: PatientProfile) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
