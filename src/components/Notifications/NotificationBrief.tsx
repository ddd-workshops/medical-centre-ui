import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NotificationListItem } from '../../contract/types';
import { H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';

interface Props {
  notification: NotificationListItem;
}

export const NotificationBrief = ({ notification }: Props) => (
  <Link 
    to={`/notifications/${notification.id}`}
    className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
  >
    <div className="flex items-center space-x-3">
      {!notification.read && (
        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
      )}
      <div>
        <H3 className={!notification.read ? 'font-bold' : 'font-normal'}>
          {notification.title}
        </H3>
        <Paragraph size="SMALL">{notification.subtitle}</Paragraph>
      </div>
    </div>
    <ChevronRight className="text-gray-400 w-5 h-5" />
  </Link>
);