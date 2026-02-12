import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your ToothLab.Ai assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'What services do you offer?',
    'What are your prices?',
    'How fast is turnaround?',
    'How do I submit a case?',
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('what do you do')) {
      return "We offer three main services:\n\n1. **Scan QC** - Real-time quality control (~15 min turnaround)\n2. **CAD Design** - Precision digital designs (1hr/6hr/24hr options)\n3. **Finished Restorations** - World-class removable prostheses and fixed restorations\n\nWould you like to know more about any specific service?";
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return "We offer flexible pricing:\n\n**CAD Design:**\n• Economy (24hr): Best value\n• Standard (6hr): Popular choice\n• Rush (1hr): Premium service\n\n**Full Service:** Includes CAD + finishing\n\nWe have both per-case and monthly subscription options. Book a demo to discuss what works best for your practice!";
    }

    if (lowerMessage.includes('turnaround') || lowerMessage.includes('fast') || lowerMessage.includes('how long') || lowerMessage.includes('speed')) {
      return "Our turnaround times:\n\n• **Scan QC**: ~15 minutes (real-time feedback)\n• **CAD Design**: 1hr (rush), 6hr (standard), or 24hr (economy)\n• **Full Service**: Depends on restoration type\n\nOur scan QC is fast enough to catch issues while the patient is still in the chair!";
    }

    if (lowerMessage.includes('submit') || lowerMessage.includes('upload') || lowerMessage.includes('send case')) {
      return "Submitting cases is easy!\n\n1. Upload your scan files through our web platform\n2. Fill out a simple intake form with case details\n3. We'll send you updates throughout the process\n\nWe support all major scanner formats including 3Shape, iTero, CEREC, and Medit.";
    }

    if (lowerMessage.includes('scanner') || lowerMessage.includes('file format') || lowerMessage.includes('support')) {
      return "We support all major intraoral scanners:\n\n• 3Shape\n• iTero\n• CEREC\n• Medit\n• And more!\n\nWe accept STL files and most proprietary scanner formats.";
    }

    if (lowerMessage.includes('qc') || lowerMessage.includes('quality control') || lowerMessage.includes('scan check')) {
      return "Our Scan QC service provides:\n\n• Comprehensive quality analysis\n• Margin clarity assessment\n• Interproximal contact verification\n• Occlusion checks\n• Clear pass/fail feedback\n• Specific rescan recommendations\n\n~15 minute turnaround means you can fix issues while the patient is still in the chair!";
    }

    if (lowerMessage.includes('cad') || lowerMessage.includes('design') || lowerMessage.includes('stl')) {
      return "Our CAD design service includes:\n\n✓ Precision-engineered designs\n✓ Accurate margins and contacts\n✓ Natural occlusion and aesthetics\n✓ Complete STL package ready to mill or print\n✓ Organized folders\n\nChoose from 1hr rush, 6hr standard, or 24hr economy turnaround!";
    }

    if (lowerMessage.includes('demo') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
      return "I'd love to help you schedule a demo! You can:\n\n• Click the 'Book a demo' button at the top of the page\n• Fill out the demo form on this page\n• Email us directly\n\nOur team will show you exactly how ToothLab.Ai can streamline your workflow!";
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to hear from you! 👋\n\nI'm here to answer any questions about ToothLab.Ai. What would you like to know?";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Happy to help! If you have any other questions, feel free to ask. 😊";
    }

    return "That's a great question! I'd recommend:\n\n1. Checking out our FAQ section below\n2. Booking a demo to speak with our team\n3. Or ask me about our services, pricing, or turnaround times!\n\nWhat else can I help you with?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-600'
            : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
        }`}
        aria-label="Toggle chat"
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          {isOpen ? <X className="text-white" size={24} /> : <MessageCircle className="text-white" size={24} />}
        </div>
      </button>

      <div
        className={`fixed bottom-24 right-6 z-40 w-96 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Bot className="text-amber-600" size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold">ToothLab.Ai Assistant</h3>
            <p className="text-amber-50 text-xs">Always here to help</p>
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="text-amber-600" size={16} />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.isBot
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
              </div>
              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                  <User className="text-white" size={16} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Bot className="text-amber-600" size={16} />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-200">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <div className="px-4 py-2 bg-white border-t border-slate-200">
            <p className="text-xs text-slate-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs rounded-full transition-all duration-300 hover:scale-105 border border-amber-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 bg-white border-t-2 border-slate-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
