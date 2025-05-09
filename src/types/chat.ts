
export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
}
