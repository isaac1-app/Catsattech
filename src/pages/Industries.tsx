import { motion } from 'motion/react';
import { Stethoscope, Landmark, GraduationCap, Building2, ShieldCheck, FileText, Lock, Users, ArrowRight } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: <Stethoscope size={48} className="text-cyan-600" />,
      desc: 'HIPAA-compliant infrastructure and secure patient data management systems designed for zero compromise.',
      challenges: ['HIPAA/HITECH Compliance', 'EHR Integration Support', 'Secure Telehealth Frameworks', 'Critical System Uptime']
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: <Landmark size={48} className="text-cyan-600" />,
      desc: 'Bank-grade security and low-latency infrastructure for trading firms, banks, and fintech startups.',
      challenges: ['PCI DSS Compliance', 'Zero-Trust Architecture', 'Secure Remote Access', 'DR/BCP Planning']
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap size={48} className="text-cyan-600" />,
      desc: 'Scalable campus-wide networks and student data protection for K-12 and higher education institutions.',
      challenges: ['FERPA Compliance', 'High-Density WiFi Deployment', 'Endpoint Security for Labs', 'Cloud Learning Support']
    },
    {
      id: 'government',
      title: 'Government',
      icon: <Building2 size={48} className="text-cyan-600" />,
      desc: 'Resilient and highly secure IT solutions meeting strict federal and local compliance requirements.',
      challenges: ['NIST/CMMC Standards', 'Secure Supply Chain IT', 'Cloud-First Initiatives', 'Legacy Modernization']
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A192F] py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-600/30 blur-[150px] -top-96 -left-96" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl space-y-6"
          >
            <h2 className="text-cyan-400 font-bold tracking-[0.4em] text-sm uppercase">Sector Specialization</h2>
            <h1 className="text-5xl lg:text-8xl font-black leading-tight">Expertise That Understands <span className="text-cyan-400">Your Lane.</span></h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              We don't offer generic IT. Every industry has unique regulatory hurdles and operational flows. We build solutions that respect those nuances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
           {industries.map((ind, i) => (
             <div key={ind.id} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                   <div className="w-20 h-20 bg-cyan-50 rounded-3xl flex items-center justify-center">
                     {ind.icon}
                   </div>
                   <h3 className="text-4xl lg:text-5xl font-black text-[#0A192F]">{ind.title}</h3>
                   <p className="text-slate-500 text-xl leading-relaxed">
                     {ind.desc}
                   </p>
                   <div className="space-y-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Compliance & Solutions</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {ind.challenges.map((challenge, idx) => (
                           <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-[#0A192F]">
                              <ShieldCheck className="text-cyan-600 shrink-0" size={18} />
                              {challenge}
                           </div>
                         ))}
                      </div>
                   </div>
                   <button className="px-10 py-4 bg-[#0A192F] text-white rounded-xl font-bold flex items-center gap-3 hover:bg-cyan-600 transition-colors group">
                      Consult Our {ind.title} Experts
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="w-full lg:w-1/2"
                >
                   <div className="aspect-video bg-slate-100 rounded-[3rem] relative overflow-hidden group">
                      <img 
                        src={`https://images.unsplash.com/photo-${ind.id === 'healthcare' ? '1519494026892-80bbd2d6fd0d' : ind.id === 'finance' ? '1450101499163-c8848c66ca85' : ind.id === 'education' ? '1523050338392-06ba54431b7e' : '1517048676732-d65bc937f952'}?q=80&w=800&auto=format&fit=crop`} 
                        alt={ind.title} 
                        className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 font-mono"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent flex items-end p-12">
                         <div className="text-white">
                           <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-2 text-cyan-400">Industry Insight</div>
                           <p className="text-xl font-bold italic leading-relaxed">
                             "Tailored solutions for {ind.title} aren't just about speed, they're about the safety and integrity of the data that fuels our society."
                           </p>
                         </div>
                      </div>
                   </div>
                </motion.div>
             </div>
           ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12">
           <h3 className="text-3xl lg:text-4xl font-black text-[#0A192F]">Compliant. Secure. Performant.</h3>
           <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-30">
              <div className="flex items-center gap-3 font-black text-2xl">
                 <Lock className="shrink-0" /> SECURITY_O1
              </div>
              <div className="flex items-center gap-3 font-black text-2xl">
                 <FileText className="shrink-0" /> PROTOCOL_X
              </div>
              <div className="flex items-center gap-3 font-black text-2xl">
                 <Users className="shrink-0" /> GLOBAL_STANDARDS
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
