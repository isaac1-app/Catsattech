import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0A192F]/80 backdrop-blur-sm">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden relative shadow-2xl"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-8 right-8 text-slate-400 hover:text-[#0A192F]"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 bg-cyan-600 p-12 text-white flex flex-col justify-center items-center text-center space-y-6">
               <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                  <Gift size={48} />
               </div>
               <div className="space-y-2">
                  <h3 className="text-3xl font-black">Free Audit</h3>
                  <p className="text-cyan-100 text-sm">Worth over $1,500 for enterprise stacks.</p>
               </div>
            </div>

            <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-8">
               <div className="space-y-4">
                  <h4 className="text-2xl font-black text-[#0A192F]">Wait! Don't Leave Your Security to Chance.</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Download our 2024 "Infrastructure Vulnerability Report" and get a free 30-minute discovery call with our Lead Architect.
                  </p>
               </div>

               <div className="space-y-4">
                  <input type="email" placeholder="work@email.com" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl outline-none focus:border-cyan-600" />
                  <button className="w-full bg-[#0A192F] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
                    Get My Free Report <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
               <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">No Obligation. Strictly Professional.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
