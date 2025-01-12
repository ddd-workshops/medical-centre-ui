import type { LucideIcon } from 'lucide-react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { styles } from '../../ui-library/DesignLanguage';

export interface BaseStatItem {
  name: string;
  value: number;
  isCurrency?: boolean;
}

export interface SimpleStatItem extends BaseStatItem {
  icon?: LucideIcon;
}

export interface StatItemWithChange extends BaseStatItem {
  change: number;
  trend: 'increase' | 'decrease';
  duration?: string;
}

export interface StatItemWithActions extends StatItemWithChange {
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export interface SimpleStatsProps {
  items: SimpleStatItem[];
}

export interface StatsWithChangeProps {
  items: StatItemWithChange[];
}

export interface StatsWithActionsProps {
  items: StatItemWithActions[];
}

export const SimpleStats = ({ items }: SimpleStatsProps) => {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              {item.icon && (
                <div className="absolute rounded-md bg-emerald-500 p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              )}
              <p className={`${item.icon ? 'ml-16' : ''} truncate text-sm font-medium text-gray-500`}>
                {item.name}
              </p>
            </dt>
            <dd className={`${item.icon ? 'ml-16' : ''} flex items-baseline pb-6 sm:pb-7`}>
              <span className="text-2xl font-semibold text-gray-900">
                {item.isCurrency ? formatCurrency(item.value) : item.value}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export const StatsWithChange = ({ items }: StatsWithChangeProps) => {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <p className="truncate text-xs font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="flex items-baseline pb-6 sm:pb-7">
              <span className="text-3xl font-semibold text-gray-900">
                {item.isCurrency ? formatCurrency(item.value) : item.value}
              </span>
              <p
                className={`ml-2 flex items-baseline text-xs font-semibold ${
                  item.trend === 'increase' ? styles.ACCENT.text : styles.ALERT.text
                }`}
              >
                {item.trend === 'increase' ? (
                  <ArrowUp className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ArrowDown className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                )}
                <span className="ml-1">{item.change}%</span>
                {item.duration && (
                  <span className="ml-1 text-gray-500">from {item.duration}</span>
                )}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export const StatsWithActions = ({ items }: StatsWithActionsProps) => {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6"
          >
            <dt>
              <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="flex flex-col gap-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold text-gray-900">
                  {item.isCurrency ? formatCurrency(item.value) : item.value}
                </span>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.trend === 'increase' ? styles.ACCENT.text : styles.ALERT.text
                  }`}
                >
                  {item.trend === 'increase' ? (
                    <ArrowUp className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ArrowDown className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  )}
                  <span className="ml-1">{item.change}%</span>
                  {item.duration && (
                    <span className="ml-1 text-gray-500">from {item.duration}</span>
                  )}
                </p>
              </div>
              {item.actions && (
                <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    {item.actions.map((action, idx) => (
                      <button
                        key={action.label}
                        onClick={action.onClick}
                        className={`font-medium ${styles.ACCENT.text} ${styles.ACCENT.textHover} ${
                          idx > 0 ? 'ml-6' : ''
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
