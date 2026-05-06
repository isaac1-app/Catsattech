import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEngaged, setIsEngaged] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can we help your business today?', sender: 'bot', time: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState('chat'); // chat, lead_capture
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Proactive engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isEngaged) {
        setIsOpen(true);
        setIsEngaged(true);
      }
    }, 10000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, [isEngaged]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = { id: messages.length + 1, text: inputValue, sender: 'user', time: new Date() };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Trigger lead capture if not already done
    if (step === 'chat' && messages.length > 2) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          text: "To better assist you, could you please provide your contact details?", 
          sender: 'bot', 
          time: new Date() 
        }]);
        setStep('lead_capture');
      }, 1000);
    } else if (step === 'chat') {
       setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          text: "That sounds interesting. Our experts would love to discuss this further.", 
          sender: 'bot', 
          time: new Date() 
        }]);
      }, 1000);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadInfo.name && leadInfo.email) {
      setStep('chat');
      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        text: `Thanks ${leadInfo.name}! One of our consultants will reach out to you at ${leadInfo.email} soon.`, 
        sender: 'bot', 
        time: new Date() 
      }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-[#0A192F] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#0A192F] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">NexusTech Support</h4>
                  <p className="text-[10px] text-cyan-300 uppercase tracking-widest font-bold">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-cyan-600 text-white rounded-tr-none' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {step === 'lead_capture' && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white border border-cyan-100 p-4 rounded-xl shadow-sm"
                >
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      required
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      value={leadInfo.name}
                      onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      required
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      value={leadInfo.email}
                      onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                    />
                    <button className="w-full bg-cyan-600 text-white font-bold py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                      Connect Me
                    </button>
                  </form>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white space-y-3">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type your message..."
                  className="flex-grow text-sm focus:outline-none"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 pt-1">
                 <div className="h-px bg-slate-100 flex-grow" />
                 <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Or Connect via</span>
                 <div className="h-px bg-slate-100 flex-grow" />
              </div>
              <button className="w-full bg-[#25D366] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all">
                 <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                 WhatsApp Direct
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#0A192F] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
             <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
               <X size={28} />
             </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white animate-bounce flex items-center justify-center text-[10px] font-bold">1</span>
        )}
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg text-[#0A192F] font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with an Expert
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
