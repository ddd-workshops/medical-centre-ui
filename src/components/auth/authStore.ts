import { create } from 'zustand';
import type { LoginRequest, PatientProfile } from '../../contract/types';
import { authService } from '../../api/services/authService';

type AuthLoading =
  | { status: 'IDLE', isAuthenticated: false, profile?: undefined, error?: undefined }
  | { status: 'LOADING', isAuthenticated: false, profile?: undefined, error?: undefined }
  | { status: 'SUCCESS', isAuthenticated: true, profile: PatientProfile, error?: undefined }
  | { status: 'ERROR', isAuthenticated: false, profile?: undefined, error: Error };

type AuthState = AuthLoading & {
  showContactVerification: boolean;
  login: (user: LoginRequest) => Promise<void>;
  logout: () => void;
  setShowContactVerification: (show: boolean) => void;
}

export const shouldShowContactVerification = () => true; // TODO: Currently always true

export const useAuthStore = create<AuthState>((set) => ({
  status: 'IDLE',
  isAuthenticated: false,
  showContactVerification: false,
  login: async (user) => {
    set({ status: 'LOADING', isAuthenticated: false });
    try {
      const profile = await authService.login(user);
      set({ status: 'SUCCESS', isAuthenticated: true, profile });
      set({ showContactVerification: shouldShowContactVerification() });
    } catch (err) {
      const error: Error = err instanceof Error ? err : new Error('An error occurred', { cause: err });
      set({ status: 'ERROR', isAuthenticated: false, error });
    }
  },
  logout: async () => {
    set({ status: 'LOADING', isAuthenticated: false });
    await authService.logout();
    set({ status: 'IDLE', isAuthenticated: false });
    set({ showContactVerification: false });
  },
  setShowContactVerification: (show) => set({ showContactVerification: show })
}));
