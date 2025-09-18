import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, User } from "lucide-react";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
}

interface HazelChatProps {
  onComplete: (responses: string[]) => void;
  isMemberVersion?: boolean;
}

const triageQuestions = [
  {
    question: "What kind of situation are you dealing with?",
    options: ["Family conflict", "Mental health crisis", "Substance abuse", "Safety concern", "Other emergency"]
  },
  {
    question: "How urgent does this feel right now?",
    options: ["Immediate danger", "Very urgent", "Concerning but manageable", "Need guidance soon"]
  },
  {
    question: "Where are you located?",
    options: ["At home", "At school", "In public", "At work", "Other location"]
  },
  {
    question: "What kind of help would be most useful?",
    options: ["Professional counselor", "Crisis intervention", "Community support", "Educational resources"]
  }
];

const HazelChat = ({ onComplete, isMemberVersion = false }: HazelChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: isMemberVersion 
        ? "Hi, I'm Hazel. I'm here to help you find the right support and resources. Let's start with a few questions to understand your situation better."
        : "Hi, I'm Hazel. I'm here to help you right now. I'll ask a few quick questions to understand what's happening and get you the right support immediately.",
      options: triageQuestions[0].options
    }
  ]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    const newResponses = [...responses, option];
    setResponses(newResponses);

    // Add user response
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: option
    };

    setMessages(prev => [...prev, userMessage]);

    // Check if we have more questions
    if (currentQuestion < triageQuestions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: triageQuestions[nextQuestion].question,
        options: triageQuestions[nextQuestion].options
      };

      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
        setCurrentQuestion(nextQuestion);
      }, 2000);
    } else {
      // Complete the triage
      const completionMessage: Message = {
        id: `completion-${Date.now()}`,
        type: 'bot',
        content: "Thank you for those answers. I'm analyzing your situation and preparing personalized recommendations for you.",
      };

      setMessages(prev => [...prev, completionMessage]);
      
      setTimeout(() => {
        onComplete(newResponses);
      }, 2000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-12 h-12">
            <div className="w-full h-full bg-gradient-trust rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">Hazel AI Assistant</h3>
            <p className="text-muted-foreground text-sm">
              {isMemberVersion ? "Comprehensive Support Specialist" : "Crisis Triage Specialist"}
            </p>
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <Avatar className="w-8 h-8 flex-shrink-0">
                {message.type === 'bot' ? (
                  <div className="w-full h-full bg-gradient-trust rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </Avatar>
              
              <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-lg max-w-sm ${
                  message.type === 'bot' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  {message.content}
                </div>
                
                {message.options && message.type === 'bot' && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleOptionClick(option)}
                        className="mr-2 mb-2 hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HazelChat;