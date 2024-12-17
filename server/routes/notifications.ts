import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export const notificationsRouter = express.Router();

// Mock data
const notifications = [
  {
    id: uuidv4(),
    title: "Urgent: Appointment Change Required",
    subtitle: "Please reschedule your appointment",
    receivedDate: new Date().toISOString(),
    content: "Due to an emergency, we need to reschedule your appointment scheduled for tomorrow. Please contact us to arrange a new time.",
    read: false
  },
  {
    id: uuidv4(),
    title: "New Test Results Available",
    subtitle: "Blood work results ready",
    receivedDate: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    content: "Your recent blood work results are now available. Please log in to view them or discuss with your doctor during next visit.",
    read: false
  },
  {
    id: uuidv4(),
    title: "Prescription Renewal",
    subtitle: "Action required",
    receivedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    content: "Your prescription will expire in 7 days. Please schedule an appointment for renewal if needed.",
    read: false
  },
  {
    id: uuidv4(),
    title: "Medical Records Updated",
    subtitle: "New documents added",
    receivedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    content: "Your medical records have been updated with recent visit information.",
    read: true
  },
  {
    id: uuidv4(),
    title: "Insurance Update Required",
    subtitle: "Please verify your information",
    receivedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    content: "Please verify your insurance information before your next visit.",
    read: true
  },
  {
    id: uuidv4(),
    title: "Appointment Reminder",
    subtitle: "Next week follow-up",
    receivedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    content: "Reminder about your follow-up appointment next week on Tuesday at 2:00 PM.",
    read: true
  },
  {
    id: uuidv4(),
    title: "Patient Survey",
    subtitle: "Share your feedback",
    receivedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    content: "We value your opinion! Please take a moment to complete our patient satisfaction survey.",
    read: true
  },
  {
    id: uuidv4(),
    title: "Holiday Schedule",
    subtitle: "Office hours update",
    receivedDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    content: "Please note our updated office hours during the upcoming holiday season.",
    read: true
  }
];

// Get all notifications (without content)
notificationsRouter.get('/', (req, res) => {
  const listItems = notifications.map(({ content, ...item }) => item);
  res.json(listItems);
});

// Get single notification
notificationsRouter.get('/:id', (req, res) => {
  const notification = notifications.find(n => n.id === req.params.id);
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  res.json(notification);
});

// Mark as read
notificationsRouter.put('/:id/read', (req, res) => {
  const notification = notifications.find(n => n.id === req.params.id);
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  notification.read = true;
  res.status(204).send();
});
