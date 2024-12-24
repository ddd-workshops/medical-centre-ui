import { Info, CheckCircle2, AlertTriangle, Bell, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const enum MessageType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ALERT = 'ALERT',
  UPDATE = 'UPDATE'
}
  
export const messageStyles = {
  [MessageType.INFO]: 'border-green-600',
  [MessageType.SUCCESS]: 'border-emerald-400',
  [MessageType.WARNING]: 'border-orange-400',
  [MessageType.ALERT]: 'border-red-600',
  [MessageType.UPDATE]: 'border-purple-400',
};

export const messageBackgrounds = {
  [MessageType.INFO]: 'bg-green-50',
  [MessageType.SUCCESS]: 'bg-emerald-50',
  [MessageType.WARNING]: 'bg-orange-50',
  [MessageType.ALERT]: 'bg-red-50',
  [MessageType.UPDATE]: 'bg-purple-50',
};
  
export const messageHoverBackgrounds = {
  [MessageType.INFO]: 'hover:bg-green-50',
  [MessageType.SUCCESS]: 'hover:bg-emerald-50',
  [MessageType.WARNING]: 'hover:bg-orange-50',
  [MessageType.ALERT]: 'hover:bg-red-50',
  [MessageType.UPDATE]: 'hover:bg-purple-50',
};

export const typeIcons: Record<MessageType, LucideIcon> = {
  [MessageType.INFO]: Info,
  [MessageType.SUCCESS]: CheckCircle2,
  [MessageType.WARNING]: AlertTriangle,
  [MessageType.ALERT]: Bell,
  [MessageType.UPDATE]: Calendar,
};
