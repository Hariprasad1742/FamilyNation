import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, User } from "lucide-react";
import { useChat } from "@/context/chatContext";

interface HazelChatProps {
  onComplete?: (responses: string[]) => void;
  isMemberVersion?: boolean;
}

const HazelChat = ({ onComplete, isMemberVersion = false }: HazelChatProps) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const { messages, currentQuestion, sendAnswer, loading } = useChat();

  // Scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (loading) return <p>Loading Hazel...</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 shadow-card">
        {/* Header */}
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

        {/* Messages */}
        <div className="space-y-4 max-h-96 overflow-y-auto" ref={chatContainerRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="w-8 h-8 flex-shrink-0">
                {message.type === "bot" ? (
                  <div className="w-full h-full bg-gradient-trust rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </Avatar>

              <div className={`flex-1 ${message.type === "user" ? "text-right" : ""}`}>
                <div
                  className={`inline-block p-3 rounded-lg max-w-sm ${
                    message.type === "bot"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.content}
                </div>

                {/* Option buttons */}
                {message.options && message.type === "bot" && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        size="sm"
                        onClick={() => sendAnswer(option)}
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

        {/* Text input */}
        {currentQuestion?.type === "text" && (
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const input = (e.target as HTMLFormElement).elements.namedItem("textInput") as HTMLInputElement;
              if (input?.value) {
                sendAnswer(input.value);
                input.value = "";
              }
            }}
          >
            <input
              name="textInput"
              type="text"
              placeholder={currentQuestion.placeholder || "Type here..."}
              className="border rounded px-3 py-2 flex-1"
              autoFocus
              required
            />
            <Button type="submit" size="sm">
              Send
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default HazelChat;
