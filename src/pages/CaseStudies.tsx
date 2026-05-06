import { motion } from 'motion/react';
import { ArrowRight, BarChart, Server, Shield, Cloud, Briefcase } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Global Fintech Expansion',
      client: 'Apex Capital',
      icon: <BarChart className="text-cyan-600" />,
      tag: 'Cloud & Security',
      challenge: 'Scaling infrastructure across 4 continents while maintaining strict banking compliance.',
      solution: 'Automated multi-region AWS deployment with Zero-Trust security layers and 24/7 SIEM monitoring.',
      result: '400% increase in transaction capacity with 0 security breaches over 24 months.',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366fd9?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hospital Network Modernization',
      client: 'Healthcare Heights',
      icon: <Server className="text-cyan-600" />,
      tag: 'Managed Services',
      challenge: 'Legacy server hardware causing frequent downtime in critical care environments.',
      solution: 'Phase-shifted hybrid cloud migration and redundant high-speed internal fiber networking.',
      result: 'Uptime increased to 99.999% with sub-second data retrieval for EHR systems.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'EduTech Shield Initiative',
      client: 'Global Uni Group',
      icon: <Shield className="text-cyan-600" />,
      tag: 'Cybersecurity',
      challenge: 'Massive surge in ransomware attempts targeting student personal data.',
      solution: 'Identity-first security framework with AI-driven threat hunting and staff training protocols.',
      result: '98% reduction in unauthorized access attempts and successful phishing mitigation.',
      image: 'https://images.unsplash.com/photo-1523240715632-d984bb4b990a?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-100 opacity-20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="max-w-3xl space-y-4"
           >
              <h2 className="text-cyan-600 font-bold tracking-[0.4em] text-sm uppercase">Impact Studies</h2>
              <h1 className="text-5xl lg:text-7xl font-black text-[#0A192F] leading-tight">
                Proven Results for <br/> Complex <span className="text-cyan-600">Enterprises.</span>
              </h1>
              <p className="text-slate-500 text-xl leading-relaxed">
                We measure our success by yours. Explore how we've helped leading organizations navigate their most difficult technical challenges.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {cases.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                 <div className="aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl group">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent" />
                    <div className="absolute top-10 left-10">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                           {project.tag}
                        </div>
                    </div>
                 </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-10">
                 <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm uppercase tracking-widest">
                       <Briefcase size={16} /> {project.client}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-[#0A192F]">{project.title}</h3>
                 </div>

                 <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <h4 className="font-black text-[#0A192F] uppercase text-xs tracking-widest">The Challenge</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{project.challenge}</p>
                       </div>
                       <div className="space-y-2">
                          <h4 className="font-black text-cyan-600 uppercase text-xs tracking-widest">The Solution</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{project.solution}</p>
                       </div>
                    </div>

                    <div className="p-8 bg-cyan-50 rounded-3xl border border-cyan-100 flex items-center justify-between group cursor-default">
                       <div>
                          <h4 className="text-cyan-800 font-black text-xs uppercase tracking-[0.2em] mb-1">Key Result</h4>
                          <div className="text-xl lg:text-2xl font-black text-[#0A192F]">{project.result}</div>
                       </div>
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm border border-cyan-100">
                          {project.icon}
                       </div>
                    </div>
                 </div>

                 <button className="flex items-center gap-3 text-[#0A192F] font-bold py-2 border-b-2 border-cyan-600 hover:text-cyan-600 transition-colors">
                    Read Full Case Study <ArrowRight size={20} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="max-w-2xl text-center lg:text-left space-y-4">
              <h3 className="text-4xl lg:text-5xl font-black">Want Similar Results?</h3>
              <p className="text-slate-400 text-xl leading-relaxed">Let's audit your current infrastructure and see how much value is being left on the table.</p>
           </div>
           <button className="bg-[#F58220] hover:bg-orange-600 px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-orange-900/40">
              Calculate Potential ROI
           </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
