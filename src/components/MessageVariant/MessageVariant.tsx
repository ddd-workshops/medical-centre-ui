import { Info, CheckCircle2, AlertTriangle, Bell, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const enum MessageVariant {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ALERT = 'ALERT',
  UPDATE = 'UPDATE'
}

export const messageStyles = {
  [MessageVariant.INFO]: 'border-green-600',
  [MessageVariant.SUCCESS]: 'border-emerald-400',
  [MessageVariant.WARNING]: 'border-orange-400',
  [MessageVariant.ALERT]: 'border-red-600',
  [MessageVariant.UPDATE]: 'border-purple-400',
};

export const messageBackgrounds = {
    [MessageVariant.INFO]: 'bg-green-50',
    [MessageVariant.SUCCESS]: 'bg-emerald-50',
    [MessageVariant.WARNING]: 'bg-orange-50',
    [MessageVariant.ALERT]: 'bg-red-50',
    [MessageVariant.UPDATE]: 'bg-purple-50',
};

export const messageHoverBackgrounds = {
  [MessageVariant.INFO]: 'hover:bg-green-50',
  [MessageVariant.SUCCESS]: 'hover:bg-emerald-50',
  [MessageVariant.WARNING]: 'hover:bg-orange-50',
  [MessageVariant.ALERT]: 'hover:bg-red-50',
  [MessageVariant.UPDATE]: 'hover:bg-purple-50',
};

export const variantIcons: Record<MessageVariant, LucideIcon> = {
  [MessageVariant.INFO]: Info,
  [MessageVariant.SUCCESS]: CheckCircle2,
  [MessageVariant.WARNING]: AlertTriangle,
  [MessageVariant.ALERT]: Bell,
  [MessageVariant.UPDATE]: Calendar,
};
