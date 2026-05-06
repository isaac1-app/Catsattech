import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Globe, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A192F] py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-cyan-400 font-bold tracking-[0.4em] text-sm uppercase">Get In Touch</h2>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">Let's Secure Your <br/><span className="text-cyan-400">Next Chapter.</span></h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
              Have a complex technical hurdle? Or just need reliable management? Our experts are standing by to architect your solution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                   <Clock className="text-white" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">Response Time</div>
                <div className="text-2xl font-black">Under 2h</div>
             </div>
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                   <ShieldCheck className="text-white" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-green-400">Secure Comms</div>
                <div className="text-2xl font-black">Encrypted</div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
               <div className="space-y-8">
                  <h3 className="text-3xl font-black text-[#0A192F]">Contact Infomation</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Support</div>
                        <div className="text-lg font-bold text-[#0A192F]">+1 (555) 000-TECH</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                        <Mail className="text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Enquiries</div>
                        <div className="text-lg font-bold text-[#0A192F]">solutions@nexustech.io</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin className="text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global HQ</div>
                        <div className="text-lg font-bold text-[#0A192F]">100 Tech Plaza, Silicon Valley, CA</div>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-6">
                  <h4 className="text-xl font-black text-[#0A192F]">Live Chat Available</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Our support engineers are available via our secure portal for immediate hardware/software triage.</p>
                  <button className="w-full bg-[#0A192F] text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 group">
                    <MessageSquare size={20} />
                    Open Live Portal
                  </button>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
               <div className="bg-white border border-slate-200 rounded-[3rem] p-8 lg:p-16 shadow-2xl shadow-slate-100">
                  <div className="space-y-4 mb-12">
                    <h3 className="text-4xl font-black text-[#0A192F]">Ready to Start?</h3>
                    <p className="text-slate-500">Fill out the form below and a representative will reach out shortly for a discovery call.</p>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A192F] ml-2">Full Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-colors" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A192F] ml-2">Email Address</label>
                        <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-colors" placeholder="john@company.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A192F] ml-2">Company Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-colors" placeholder="Acme Corp" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A192F] ml-2">Estimated Devices</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-colors appearance-none">
                           <option>1-50</option>
                           <option>51-200</option>
                           <option>201-500</option>
                           <option>500+</option>
                        </select>
                     </div>
                     <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-[#0A192F] ml-2">How can we help?</label>
                        <textarea className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-colors min-h-[150px]" placeholder="Briefly describe your current IT challenges..."></textarea>
                     </div>
                     <div className="md:col-span-2">
                        <button className="w-full bg-[#F58220] hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-100 flex items-center justify-center gap-3 transition-all">
                           Send Request <Send size={24} />
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4">By submitting this form you agree to our privacy policy regarding data handling.</p>
                     </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-100 relative grayscale group">
         <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center space-y-4">
                <Globe className="w-16 h-16 text-slate-300 mx-auto group-hover:animate-spin" />
                <div className="font-bold text-slate-400 text-sm uppercase tracking-widest italic">Global Operations Centre Display</div>
             </div>
         </div>
         <img 
           src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
           alt="Map" 
           className="h-full w-full object-cover opacity-50"
         />
      </section>
    </div>
  );
};

export default Contact;
