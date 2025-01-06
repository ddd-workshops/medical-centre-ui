import { Activity, CalendarClock, FileText, MessageSquare, Stethoscope, User } from 'lucide-react';
import { Paragraph } from '../ui-library/Typography/Paragraph';
import { styles } from '../ui-library/DesignEnums';

export type FeedItemType = 'APPOINTMENT' | 'DIAGNOSIS' | 'PRESCRIPTION' | 'CHECKUP' | 'REGISTRATION' | 'COMMENT';

export interface FeedItem {
  id: string;
  type: FeedItemType;
  content: string;
  date: Date;
  person?: string;
  comment?: string;
  imageUrl?: string;
}

export interface FeedProps {
  items: FeedItem[];
  variant?: 'simple' | 'withComments' | 'stacked';
}

const getIcon = (type: FeedItemType) => {
  switch (type) {
    case 'APPOINTMENT': return CalendarClock;
    case 'DIAGNOSIS': return Stethoscope;
    case 'PRESCRIPTION': return FileText;
    case 'CHECKUP': return Activity;
    case 'REGISTRATION': return User;
    case 'COMMENT': return MessageSquare;
  }
};

const SimpleTimeline = ({ items }: { items: FeedItem[] }) => (
  <div className="flow-root">
    <ul role="list" className="-mb-8">
      {items.map((item, idx) => {
        const Icon = getIcon(item.type);
        return (
          <li key={item.id}>
            <div className="relative pb-8">
              {idx !== items.length - 1 && (
                <span className={`absolute left-4 top-4 -ml-px h-full w-0.5 ${styles.ACCENT.border}`} aria-hidden="true" />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full ${styles.ACCENT.background}`}>
                    <Icon className={`h-5 w-5 ${styles.ACCENT.text}`} aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <Paragraph className="text-sm text-gray-600">{item.content}</Paragraph>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    {item.person && <span className="font-medium text-gray-900">{item.person} · </span>}
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

const WithComments = ({ items }: { items: FeedItem[] }) => (
  <div className="flow-root">
    <ul role="list" className="-mb-8">
      {items.map((item, idx) => {
        const Icon = getIcon(item.type);
        return (
          <li key={item.id}>
            <div className="relative pb-8">
              {idx !== items.length - 1 && (
                <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              )}
              <div className="relative flex items-start space-x-3">
                {item.imageUrl ? (
                  <div className="relative">
                    <img className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white" src={item.imageUrl} alt="" />
                  </div>
                ) : (
                  <div className="relative">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.ACCENT.background} ring-8 ring-white`}>
                      <Icon className={`h-6 w-6 ${styles.ACCENT.text}`} aria-hidden="true" />
                    </span>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">
                      {item.person && <span className="font-medium text-gray-900">{item.person}</span>}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <Paragraph>{item.content}</Paragraph>
                  </div>
                  {item.comment && (
                    <div className="mt-2 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <Paragraph>{item.comment}</Paragraph>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

const StackedFeed = ({ items }: { items: FeedItem[] }) => (
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => {
        const Icon = getIcon(item.type);
        return (
          <li key={item.id} className="py-4">
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                {item.imageUrl ? (
                  <img className="h-8 w-8 rounded-full" src={item.imageUrl} alt="" />
                ) : (
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full ${styles.ACCENT.background}`}>
                    <Icon className={`h-5 w-5 ${styles.ACCENT.text}`} />
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-800">{item.content}</p>
                <div className="mt-1 flex items-center space-x-2">
                  {item.person && <span className="text-sm font-medium text-gray-900">{item.person}</span>}
                  <span className="text-sm text-gray-500">·</span>
                  <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export const Feed = ({ items, variant = 'simple' }: FeedProps) => {
  switch (variant) {
    case 'withComments':
      return <WithComments items={items} />;
    case 'stacked':
      return <StackedFeed items={items} />;
    default:
      return <SimpleTimeline items={items} />;
  }
};
