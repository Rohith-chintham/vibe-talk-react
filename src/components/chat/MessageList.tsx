
import { useRef, useEffect } from 'react';
import Message from './Message';
import { Message as MessageType, User } from '@/types/chat';

interface MessageListProps {
  messages: MessageType[];
  currentUser: User;
  chatPartner: User;
}

const MessageList = ({ messages, currentUser, chatPartner }: MessageListProps) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((message) => {
        const isCurrentUser = message.senderId === currentUser.id;
        return (
          <Message 
            key={message.id} 
            message={message} 
            isCurrentUser={isCurrentUser}
            senderInfo={isCurrentUser ? currentUser : chatPartner}
          />
        );
      })}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;
