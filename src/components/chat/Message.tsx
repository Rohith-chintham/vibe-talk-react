
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Message as MessageType, User } from '@/types/chat';
import { Check, CheckCheck } from 'lucide-react';

interface MessageProps {
  message: MessageType;
  isCurrentUser: boolean;
  senderInfo: User;
}

export const Message = ({ message, isCurrentUser, senderInfo }: MessageProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay for staggered animation effect
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const renderStatus = () => {
    if (!isCurrentUser) return null;
    
    switch (message.status) {
      case 'sent':
        return <Check className="h-3.5 w-3.5 text-muted-foreground" />;
      case 'delivered':
        return <CheckCheck className="h-3.5 w-3.5 text-muted-foreground" />;
      case 'read':
        return <CheckCheck className="h-3.5 w-3.5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn(
        "flex mb-4 items-end gap-2",
        isCurrentUser ? "justify-end" : "justify-start",
        visible ? "message-animation" : "opacity-0",
      )}
    >
      {!isCurrentUser && (
        <div className="flex-shrink-0">
          <div className="relative">
            <img 
              src={senderInfo.avatar} 
              alt={senderInfo.name} 
              className="w-8 h-8 rounded-full"
            />
            {senderInfo.isOnline && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white animate-pulse-status" />
            )}
          </div>
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] px-4 py-2 rounded-chat-bubble",
        isCurrentUser 
          ? "bg-chat-sent text-white rounded-br-none" 
          : "bg-chat-received text-chat-fg rounded-bl-none"
      )}>
        <p className="text-sm">{message.text}</p>
      </div>
      
      <div className="text-xs text-muted-foreground flex items-center">
        <span>{formatTime(message.timestamp)}</span>
        <div className="ml-1">{renderStatus()}</div>
      </div>
    </div>
  );
};

export default Message;
