
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  isTyping?: boolean;
}

const MessageInput = ({ onSendMessage, isTyping = false }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="p-3 border-t">
      {isTyping && (
        <div className="text-sm text-muted-foreground ml-2 mb-1">
          Alex is typing...
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-muted p-3 rounded-full outline-none focus:ring-2 focus:ring-primary"
        />
        <Button 
          type="submit" 
          size="icon" 
          className="rounded-full bg-primary hover:bg-primary/90" 
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;
