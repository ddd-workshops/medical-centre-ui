import { Info, CheckCircle2, AlertTriangle, Bell, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const enum MessageKind {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ALERT = 'ALERT',
  UPDATE = 'UPDATE'
}

export const messageStyles = {
  [MessageKind.INFO]: 'border-blue-500',
  [MessageKind.SUCCESS]: 'border-emerald-500',
  [MessageKind.WARNING]: 'border-yellow-500',
  [MessageKind.ALERT]: 'border-red-500',
  [MessageKind.UPDATE]: 'border-purple-500',
};

export const variantIcons: Record<MessageKind, LucideIcon> = {
  [MessageKind.INFO]: Info,
  [MessageKind.SUCCESS]: CheckCircle2,
  [MessageKind.WARNING]: AlertTriangle,
  [MessageKind.ALERT]: Bell,
  [MessageKind.UPDATE]: Calendar,
};
