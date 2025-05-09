
import { User, Message } from '../types/chat';

export const currentUser: User = {
  id: 'user1',
  name: 'You',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  isOnline: true
};

export const chatPartner: User = {
  id: 'user2',
  name: 'Alex Johnson',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bella',
  isOnline: true
};

export const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Hey there! How's it going?',
    senderId: 'user2',
    timestamp: Date.now() - 1000 * 60 * 24,
    status: 'read'
  },
  {
    id: '2',
    text: 'Hi! I'm doing well, thanks for asking. Just working on a new project.',
    senderId: 'user1',
    timestamp: Date.now() - 1000 * 60 * 23,
    status: 'read'
  },
  {
    id: '3',
    text: 'That sounds interesting! What kind of project is it?',
    senderId: 'user2',
    timestamp: Date.now() - 1000 * 60 * 22,
    status: 'read'
  },
  {
    id: '4',
    text: 'I'm building a real-time chat application with React!',
    senderId: 'user1',
    timestamp: Date.now() - 1000 * 60 * 21,
    status: 'read'
  },
  {
    id: '5',
    text: 'That's awesome! I've been thinking about learning React myself.',
    senderId: 'user2',
    timestamp: Date.now() - 1000 * 60 * 20,
    status: 'read'
  },
  {
    id: '6',
    text: 'You definitely should. It's really powerful and the community is great.',
    senderId: 'user1',
    timestamp: Date.now() - 1000 * 60 * 19,
    status: 'read'
  },
  {
    id: '7',
    text: 'Do you have any recommended resources for beginners?',
    senderId: 'user2',
    timestamp: Date.now() - 1000 * 60 * 5,
    status: 'delivered'
  },
];
