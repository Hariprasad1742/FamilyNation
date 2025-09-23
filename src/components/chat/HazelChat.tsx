import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { User } from "lucide-react";
import HazelIcon from "./Hazel.png";
import GraphImage from "./graph.png";
import ChartImage from "./chart.png";
import FamilyImage from "./family.png";
import { useEffect, useRef } from "react";

// Define a type for your resource cards for better type safety
interface ResourceCardData {
  type: string;
  category: string;
  logo_description: string;
  title: string;
  subtitle: string;
  specialties: string[];
  approach?: string;
  schedule?: string;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  location_info: string;
}

// Define a type for your plan data
interface PlanData {
  steps: string[];
  predictedOutcome: string;
}

interface QuestionData {
  id: string;
  question: string;
  type?: 'buttons' | 'chips' | 'text' | 'graph_display' | 'plan_display' | 'resource_display'; // Added graph_display and plan_display
  multiSelect?: boolean;
  options?: string[];
  graph?: string;
  placeholder?: string;
  resources?: ResourceCardData[];
  plan?: PlanData;
  condition?: { id: string; value: string; };
}

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
  graph?: string;
  placeholder?: string;
  resources?: ResourceCardData[];
  plan?: PlanData;
  questionType?: 'buttons' | 'chips' | 'text' | 'graph_display' | 'plan_display' | 'resource_display'; // To help with rendering specific inputs
}

interface HazelChatProps {
  onComplete: (responses: string[]) => void;
  isMemberVersion?: boolean;
}

const hazelTriageQuestions: QuestionData[] = [
  {
    id: 'who',
    question: "Who needs help today?",
    type: 'buttons',
    multiSelect: false,
    options: ["Identify Issues", "Explore Solutions", "Plan Ahead", "Connect to Resources"]
  },
  {
    id: 'what',
    question: "What's the most urgent issue right now?",
    type: 'chips',
    multiSelect: true,
    options: ["Daughter's Drug Use", "Parents' Conflict", "Son's Behavior", "Mother's Mental Health", "Job Risk"]
  },
  {
    id: 'intensity',
    question: "If left unaddressed, risk Of family breakdown increases by 65 %,\nHere's what similar families have done that improved stability.",
    type: 'graph_display', // Explicitly marking this as a display type
    graph: GraphImage
  },
  {
    id: 'solution_plan',
    question: "Based on similar family situations, here's a potential solution plan:",
    type: 'plan_display', // Custom type for plan rendering
    plan: {
      steps: [
        "Academic & anti-bullying resources for daughter.",
        "Communication support for parents.",
        "Therapy & peer group for son.",
        "Ongoing care for mother.",
        "Job security planning for father."
      ],
      predictedOutcome: "70% improved stability in 3 months."
    }
  },
  {
    id: 'resource_recommendations',
    question: "Here are some professionally curated resources I've found for you nearby:",
    type: 'resource_display', // Custom type for resource rendering
    resources: [
      {
        "type": "resource_card",
        "category": "Therapist",
        "logo_description": "A stylized icon representing mental health, like a calm leaf or gentle wave.",
        "title": "Dr. Eleanor Vance",
        "subtitle": "Child & Adolescent Therapist",
        "specialties": [
          "Anxiety",
          "Social Skills",
          "Family Transitions"
        ],
        "approach": "Cognitive Behavioral Therapy (CBT), Play Therapy",
        "contact": {
          "phone": "(555) 123-4567",
          "email": "dr.vance@example.com",
          "website": "www.drelvancetherapy.com"
        },
        "location_info": "In-person at 123 Therapy Rd, Anytown | Online sessions available"
      },
      {
        "type": "resource_card",
        "category": "Financial Advisor",
        "logo_description": "A modern icon related to finance, like a growing bar chart or a shield.",
        "title": "Horizon Financial Planning",
        "subtitle": "Family Services Division",
        "specialties": [
          "Budgeting & Savings",
          "Future Planning (Education/Retirement)",
          "Job Security Consultation"
        ],
        "approach": "Personalized, goal-oriented financial guidance",
        "contact": {
          "phone": "(555) 987-6543",
          "email": "info@horizonfp.com",
          "website": "www.horizonfp.com"
        },
        "location_info": "Office at 456 Main St, Anytown | Virtual consultations available"
      },
      {
        "type": "resource_card",
        "category": "Peer Support Group",
        "logo_description": "An icon showing connected people or a community circle.",
        "title": "The Social Hub",
        "subtitle": "Teen Peer Support Group",
        "specialties": [
          "Building Friendships",
          "Communication Skills",
          "Shared Activities"
        ],
        "schedule": "Tuesdays & Thursdays, 4:00 PM - 5:30 PM",
        "contact": {
          "email": "socialhub@communitycenter.org",
          "website": "www.anytowncommunity.org/socialhub"
        },
        "location_info": "Anytown Community Center, 789 Park Ave"
      },
      {
        "type": "resource_card",
        "category": "Academic & Anti-Bullying",
        "logo_description": "An open book with a protective shield or a guiding light.",
        "title": "Bright Futures Learning & Advocacy",
        "subtitle": "Academic Support & Anti-Bullying Resources",
        "specialties": [
          "Tutoring (all subjects)",
          "Bullying Intervention Strategies",
          "School Advocacy Support"
        ],
        "approach": "Personalized academic plans, empathetic support",
        "contact": {
          "phone": "(555) 234-5678",
          "email": "support@brightfutures.org",
          "website": "www.brightfutures.org"
        },
        "location_info": "Virtual and in-person sessions available"
      }
    ]
  },
  
  {
    id: 'preferences',
    question: "Any preferences?",
    type: 'chips',
    multiSelect: true,
    options: ["Female counselor", "Low cost", "In-person"]
  }
];

const HazelChat = ({ onComplete, isMemberVersion = false }: HazelChatProps) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: isMemberVersion
        ? "Hi, I'm Hazel, your Family Support Agent. Let's work through this together."
        : "Hi, I'm Hazel, your Family Support Agent. Let's work through this together.",
      options: hazelTriageQuestions[0].options,
      questionType: hazelTriageQuestions[0].type
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [currentTextInput, setCurrentTextInput] = useState("");

  const advanceQuestion = (userResponse: string | null = null) => {
    let newResponses = [...responses];
    if (userResponse !== null) {
      newResponses.push(userResponse);
      setResponses(newResponses);

      // Add user response message if it was an active interaction
      setMessages(prev => [...prev, {
        id: `user-${Date.now()}`,
        type: 'user',
        content: userResponse
      }]);
    }

    // Determine the next question index, skipping conditions for now for simplicity
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < hazelTriageQuestions.length) {
      const nextQuestionData = hazelTriageQuestions[nextQuestionIndex];

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: nextQuestionData.question,
        options: nextQuestionData.options,
        graph: nextQuestionData.graph,
        placeholder: nextQuestionData.placeholder,
        resources: nextQuestionData.resources,
        plan: nextQuestionData.plan,
        questionType: nextQuestionData.type // Store the question type for rendering logic
      };

      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
        setCurrentQuestionIndex(nextQuestionIndex);
        setCurrentTextInput(""); // Clear input field for next question
      }, 1000); // Shorter delay for automated advances
    } else {
      // End of questions
      // First completion message
      const completionMessage: Message = {
        id: `completion-${Date.now()}`,
        type: 'bot',
        content: "Thank you for those answers. I'm analyzing your situation and preparing personalized recommendations for you.",
      };

      setMessages(prev => [...prev, completionMessage]);

      // Add chart image message after a short delay
      setTimeout(() => {
        const chartImageMessage: Message = {
          id: `chart-image-${Date.now()}`,
          type: 'bot',
          content: "Here's a summary of our conversation:",
          graph: ChartImage,
          questionType: 'graph_display'
        };
        setMessages(prev => [...prev, chartImageMessage]);

        // Add final family image message after another short delay
        setTimeout(() => {
          const familyMessage: Message = {
            id: `family-${Date.now()}`,
            type: 'bot',
            content: "I'll be with you every step of the way.",
            graph: FamilyImage,
            questionType: 'graph_display'
          };
          setMessages(prev => [...prev, familyMessage]);
        }, 1500);
      }, 1000);
    }
  };

  const handleOptionClick = (option: string) => {
    advanceQuestion(option);
  };

  const handleTextInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentTextInput.trim()) {
      advanceQuestion(currentTextInput.trim());
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Determine if the current bot message is the last one in the chat (for rendering controls)
  const lastBotMessage = messages.filter(m => m.type === 'bot').pop();
  const currentQuestionData = hazelTriageQuestions[currentQuestionIndex];
  const isLastMessage = messages[messages.length - 1]?.id === lastBotMessage?.id;
  const isTextInputQuestion = currentQuestionData?.type === 'text';
  const isOptionQuestion = currentQuestionData?.type === 'buttons' || currentQuestionData?.type === 'chips';
  const isDisplayQuestion = currentQuestionData?.type === 'graph_display' || currentQuestionData?.type === 'plan_display' || currentQuestionData?.type === 'resource_display';

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-12 h-12">
            <img
              src={HazelIcon}
              alt="Hazel AI Assistant"
              className="w-full h-full object-cover rounded-full"
            />
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">Hazel AI Assistant</h3>
            <p className="text-muted-foreground text-sm">
              {isMemberVersion ? "Comprehensive Support Specialist" : "Crisis Triage Specialist"}
            </p>
          </div>
        </div>

        <div className="space-y-4 max-h-[600px] overflow-y-auto" ref={chatContainerRef}>
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <Avatar className="w-8 h-8 flex-shrink-0">
                {message.type === 'bot' ? (
                  <img
                    src={HazelIcon}
                    alt="Hazel AI Assistant"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </Avatar>

              <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-3 rounded-lg max-w-md ${
                  message.type === 'bot'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}>
                  <div className="whitespace-pre-line">{message.content}</div>

                  {/* Render Graph Display */}
                  {message.type === 'bot' && message.graph && message.questionType === 'graph_display' && (
                    <div className="mt-3 bg-white p-2 rounded-lg shadow-inner">
                      <img
                        src={message.graph}
                        alt="Family Stability Improvement Graph"
                        className="max-w-full h-auto rounded"
                      />
                      <p className="text-xs text-center mt-1 text-muted-foreground">
                        "FamilyNation: Stronger Families. Stronger Future."
                      </p>
                    </div>
                  )}

                  {/* Render Solution Plan (Project Board) */}
                  {message.type === 'bot' && message.plan && message.questionType === 'plan_display' && (
                    <div className="mt-3 p-4 bg-background border border-gray-200 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-base mb-2">Solution Plan:</h4>
                      <ul className="list-decimal list-inside space-y-1 text-sm">
                        {message.plan.steps.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-200 rounded text-sm font-medium">
                        **Predicted Outcome:** {message.plan.predictedOutcome}
                      </div>
                    </div>
                  )}

                  {/* Render Resource Cards */}
                  {message.type === 'bot' && message.resources && message.questionType === 'resource_display' && (
                    <div className="mt-3 space-y-4">
                      {message.resources.map((resource, index) => (
                        <Card key={index} className="p-4 bg-background border border-gray-200 shadow-sm">
                          <h4 className="font-semibold text-lg text-foreground">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.subtitle}</p>
                          <ul className="text-xs text-muted-foreground mt-2 list-disc list-inside">
                            {resource.specialties.map((spec, sIdx) => (
                              <li key={sIdx}>{spec}</li>
                            ))}
                          </ul>
                          {resource.approach && <p className="text-xs mt-1">**Approach:** {resource.approach}</p>}
                          {resource.schedule && <p className="text-xs mt-1">**Schedule:** {resource.schedule}</p>}
                          <div className="text-xs mt-2 space-y-1">
                            {resource.contact.phone && <p>📞 {resource.contact.phone}</p>}
                            {resource.contact.email && <p>📧 {resource.contact.email}</p>}
                            {resource.contact.website && <p>🌐 <a href={resource.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{resource.contact.website}</a></p>}
                            <p>📍 {resource.location_info}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>

                {/* Interaction controls for the LATEST bot message */}
                {message.type === 'bot' && isLastMessage && (
                  <>
                    {/* Text Input for 'text' type questions */}
                    {isTextInputQuestion && (
                      <form className="mt-3 flex gap-2" onSubmit={handleTextInputSubmit}>
                        <input
                          name="textInput"
                          type="text"
                          placeholder={currentQuestionData?.placeholder || 'Type your answer...'}
                          className="border rounded px-3 py-2 flex-1"
                          value={currentTextInput}
                          onChange={(e) => setCurrentTextInput(e.target.value)}
                          autoFocus
                          required
                        />
                        <Button type="submit" size="sm">Send</Button>
                      </form>
                    )}

                    {/* Options for 'buttons' or 'chips' type questions */}
                    {isOptionQuestion && message.options && (
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

                    {/* "Continue" button for display-only messages (if no other interaction) */}
                    {!isOptionQuestion && !isTextInputQuestion && isDisplayQuestion && (
                      <div className="mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => advanceQuestion(null)} // Advance without specific user response
                          className="hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          Continue
                        </Button>
                      </div>
                    )}
                  </>
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