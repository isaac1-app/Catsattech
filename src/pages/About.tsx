import { motion } from 'motion/react';
import { Target, Eye, Users, Award, Milestone, Rocket, ShieldCheck, Globe2 } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', desc: 'NexusTech was established with a focus on helping local businesses manage their growing IT needs.' },
    { year: '2014', title: 'Global Reach', desc: 'Expanded operations to serve clients across 10 countries with our first international office.' },
    { year: '2018', title: 'Cybersecurity Hub', desc: 'Launched our dedicated 24/7 Security Operations Center (SOC) to combat rising threats.' },
    { year: '2023', title: 'Industry Leader', desc: 'Recognized as a Top 50 Managed Service Provider globally by TechInsight.' }
  ];

  const team = [
    { name: 'David Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop' },
    { name: 'Sarah Miller', role: 'Chief Security Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop' },
    { name: 'Marcus Brooks', role: 'VP of Engineering', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop' },
    { name: 'Dr. Elena Rossi', role: 'Lead Tech Consultant', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A192F] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-black text-white"
          >
            Engineering Trust Through <span className="text-cyan-400">Technology</span>
          </motion.h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            For over 15 years, NexusTech has been the silent partner behind some of the world's most resilient enterprises.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team collaborating" className="object-cover w-full h-full opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                 <div className="text-5xl font-black text-cyan-400">2010</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-white/60">Where it all began</div>
               </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-600 rounded-3xl -z-10 flex items-center justify-center p-8">
               <Globe2 className="text-white w-full h-full opacity-20" />
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.4em]">Our Story</h2>
            <h3 className="text-4xl font-black text-[#0A192F] leading-tight">Born in a Basement, Scaling on the Cloud.</h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              We started with a simple belief: businesses shouldn't have to fight their own technology. Our founders saw how enterprise-grade solutions was often locked away behind massive budgets, leaving small and medium enterprises vulnerable.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              NexusTech was built to democratize high-end cybersecurity and infrastructure. Today, we manage over half a million devices globally, but our core mission remains the same: making technology your competitive advantage, not your bottleneck.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <Target className="text-cyan-600 w-8 h-8" />
                <h4 className="font-bold text-[#0A192F]">Our Mission</h4>
                <p className="text-slate-400 text-sm">To empower every organization with bulletproof technology frameworks.</p>
              </div>
              <div className="space-y-2">
                <Eye className="text-cyan-600 w-8 h-8" />
                <h4 className="font-bold text-[#0A192F]">Our Vision</h4>
                <p className="text-slate-400 text-sm">To be the global standard for managed IT service excellence by 2030.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.3em]">Our Journey</h2>
             <h3 className="text-4xl font-black text-[#0A192F]">Milestones of Innovation</h3>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative z-10 space-y-6 lg:text-center">
                  <div className="w-16 h-16 bg-[#0A192F] rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl border-8 border-slate-50 lg:mb-8">
                    {m.year}
                  </div>
                  <h4 className="text-xl font-bold text-[#0A192F]">{m.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.3em]">The Humans Behind the Tech</h2>
             <h3 className="text-4xl font-black text-[#0A192F]">Our Leadership Team</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {team.map((member, i) => (
               <div key={i} className="group">
                 <div className="aspect-square rounded-3xl bg-slate-100 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                 </div>
                 <h4 className="text-xl font-bold text-[#0A192F]">{member.name}</h4>
                 <p className="text-cyan-600 text-xs font-bold uppercase tracking-widest">{member.role}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-lg space-y-6">
            <h3 className="text-3xl lg:text-5xl font-black">Certified for Excellence.</h3>
            <p className="text-slate-400">We maintain the highest level of industry certifications to ensure your data is managed with professional integrity.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-40">
             <span className="text-2xl font-black italic">ISO 27001</span>
             <span className="text-2xl font-black italic">SOC 2 Type II</span>
             <span className="text-2xl font-black italic">HIPAA COMPLIANT</span>
             <span className="text-2xl font-black italic">PCI DSS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
