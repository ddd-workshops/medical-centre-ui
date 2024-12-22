import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import type { NotificationListItem } from '../../contract/types';
import { getNotifications } from '../../http/notificationsService';
import { NotificationBrief } from './NotificationBrief';
import { H1, H2 } from '../Typography/Headings';

type GroupedNotifications = {
  [key: string]: NotificationListItem[];
};

export const NotificationsList = () => {
  const [notifications, setNotifications] = useState<GroupedNotifications>({});

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      
      // Group notifications by date
      const grouped = data.reduce((acc, notification) => {
        const date = format(parseISO(notification.receivedDate), 'MMMM d, yyyy');
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(notification);
        return acc;
      }, {} as GroupedNotifications);

      setNotifications(grouped);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <H1 className="mb-6">Notifications</H1>
      <div className="space-y-6">
        {Object.entries(notifications).map(([date, items]) => (
          <div key={date}>
            <H2 className="text-sm text-gray-500 mb-2">{date}</H2>
            <div className="bg-white rounded-lg shadow divide-y">
              {items.map((notification) => (
                <NotificationBrief 
                  key={notification.id} 
                  notification={notification}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};