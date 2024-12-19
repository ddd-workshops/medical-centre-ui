import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import type { Notification } from '../../contract/types';
import { getNotification, markNotificationAsRead } from '../../api/services/notificationsService';
import { H1, H2 } from '../Typography/Headings';

export const NotificationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const fetchNotification = async () => {
      if (!id) return;
      const data = await getNotification(id);
      setNotification(data);
      if (!data.read) {
        await markNotificationAsRead(id);
      }
    };

    fetchNotification();
  }, [id]);

  if (!notification) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={() => navigate('/notifications')}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <H1 className="flex-1 text-center">Notifications</H1>
          <div className="w-5" /> {/* Spacer for alignment */}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">
          {format(parseISO(notification.receivedDate), 'MMMM d, yyyy')}
        </div>
        <H2 className="text-emerald-600">{notification.title}</H2>
        <div className="text-gray-800 prose max-w-none">
          {notification.content}
        </div>
      </div>
    </div>
  );
};