
import { User } from '@/types/chat';

interface ChatHeaderProps {
  chatPartner: User;
}

const ChatHeader = ({ chatPartner }: ChatHeaderProps) => {
  return (
    <div className="p-3 border-b flex items-center gap-3">
      <div className="relative">
        <img 
          src={chatPartner.avatar} 
          alt={chatPartner.name} 
          className="w-10 h-10 rounded-full"
        />
        {chatPartner.isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse-status" />
        )}
      </div>
      <div>
        <h2 className="font-semibold">{chatPartner.name}</h2>
        <p className="text-xs text-muted-foreground">
          {chatPartner.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
