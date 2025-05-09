
import { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import { Message, User } from '@/types/chat';
import { mockMessages, currentUser, chatPartner } from '@/data/mockData';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    // Simulate "read" status for received messages after a delay
    const timer = setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.senderId !== currentUser.id && msg.status !== 'read'
            ? { ...msg, status: 'read' }
            : msg
        )
      );
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      text,
      senderId: currentUser.id,
      timestamp: Date.now(),
      status: 'sent'
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate message delivered status
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);
    
    // Simulate typing indicator
    setTimeout(() => {
      setIsTyping(true);
      
      // Simulate a reply after "typing"
      setTimeout(() => {
        setIsTyping(false);
        
        const replies = [
          "That's interesting!",
          "Tell me more about that.",
          "I see what you mean.",
          "Good point!",
          "I hadn't thought of it that way before."
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const replyMessage: Message = {
          id: `msg_${Date.now()}`,
          text: randomReply,
          senderId: chatPartner.id,
          timestamp: Date.now(),
          status: 'delivered'
        };
        
        setMessages(prev => [...prev, replyMessage]);
        toast.success("New message from Alex");
      }, 3000);
    }, 2000);
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-4rem)] max-w-md w-full mx-auto overflow-hidden border border-border bg-background shadow-xl">
      <ChatHeader chatPartner={chatPartner} />
      <MessageList 
        messages={messages} 
        currentUser={currentUser} 
        chatPartner={chatPartner}
      />
      <MessageInput 
        onSendMessage={handleSendMessage}
        isTyping={isTyping} 
      />
    </Card>
  );
};

export default ChatContainer;
