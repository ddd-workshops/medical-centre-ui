import { Info, CheckCircle2, AlertTriangle, Bell, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type MessageType = 'DEFAULT' | 'SUCCESS' | 'WARNING' | 'ALERT' | 'UPDATE';

export const borderStyle = {
  DEFAULT: 'border-green-600',
  SUCCESS: 'border-emerald-400',
  WARNING: 'border-orange-400',
  ALERT: 'border-red-600',
  UPDATE: 'border-purple-400',
};

export const backgroundStyle = {
  DEFAULT: 'bg-green-50',
  SUCCESS: 'bg-emerald-50',
  WARNING: 'bg-orange-50',
  ALERT: 'bg-red-50',
  UPDATE: 'bg-purple-50',
};

export const backgroundHoverStyle = {
  DEFAULT: 'hover:bg-green-50',
  SUCCESS: 'hover:bg-emerald-50',
  WARNING: 'hover:bg-orange-50',
  ALERT: 'hover:bg-red-50',
  UPDATE: 'hover:bg-purple-50',
};

export const textStyle = {
  DEFAULT: 'text-gray-900',
  SUCCESS: 'text-emerald-600',
  WARNING: 'text-orange-600',
  ALERT: 'text-red-600',
  UPDATE: 'text-purple-600',
};

export const typeIcons: Record<MessageType, LucideIcon> = {
  DEFAULT: Info,
  SUCCESS: CheckCircle2,
  WARNING: AlertTriangle,
  ALERT: Bell,
  UPDATE: Calendar,
};
