import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Zap, CheckCircle2, ChevronRight, BarChart3, Users, Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { title: 'Managed IT Support', icon: <Globe className="text-cyan-600" />, desc: '24/7 proactive monitoring and expert support for your complete IT infrastructure.' },
    { title: 'Cybersecurity', icon: <Shield className="text-cyan-600" />, desc: 'Advanced threat protection, security audits, and real-time response to keep tools safe.' },
    { title: 'Cloud Infrastructure', icon: <ArrowUpRight className="text-cyan-600" />, desc: 'Scalable cloud solutions optimized for performance, security, and cost-efficiency.' },
    { title: 'IT Consulting', icon: <BarChart3 className="text-cyan-600" />, desc: 'Strategic technology planning aligned with your long-term business objectives.' }
  ];

  const stats = [
    { label: 'Years Excellence', val: '15+' },
    { label: 'Devices Managed', val: '500k+' },
    { label: 'Client Retention', val: '98%' },
    { label: 'Experts Team', val: '150+' }
  ];

  const industries = ['Healthcare', 'Finance', 'Education', 'Government'];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 bg-white flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full">
              <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 font-mono">Managed IT Solutions 2024</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-[#0A192F] tracking-tight">
              Enterprise IT Solutions <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800">
                For Modern Businesses
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              Optimizing your infrastructure with world-class cybersecurity, cloud management, and proactive support tailored for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0A192F] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Link to="/services">
                <button className="w-full border-2 border-slate-200 text-[#0A192F] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                  View Services
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Animated Hero Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl border border-slate-100 p-8 shadow-2xl backdrop-blur-sm bg-white/80">
               <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[400px]">
                <div className="col-span-4 row-span-2 bg-[#0A192F] rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative group">
                  <div className="text-cyan-400 text-xs font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    SYS_MONITOR: ACTIVE
                  </div>
                  <div className="text-white font-bold text-2xl">Infrastructure Health</div>
                  <div className="mt-4 flex gap-1 items-end h-20">
                    {[30, 50, 40, 70, 60, 45, 80, 55, 90, 65].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                        className="w-full bg-cyan-400/30 hover:bg-cyan-400 rounded-sm" 
                      />
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                </div>
                
                <div className="col-span-2 row-span-1 bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-center items-center shadow-sm">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Security</div>
                  <div className="text-3xl font-black text-green-500">100%</div>
                </div>

                <div className="col-span-2 row-span-1 bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-center items-center shadow-sm">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Uptime</div>
                  <div className="text-3xl font-black text-[#0A192F]">99.9%</div>
                </div>

                <div className="col-span-2 row-span-2 bg-orange-50/50 border border-orange-100 rounded-2xl p-6 flex flex-col justify-center gap-4">
                  <div className="w-12 h-12 bg-[#F58220] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-orange-800 uppercase tracking-widest">Global Ops</div>
                    <div className="text-2xl font-black text-orange-900 leading-none mt-1">24/7</div>
                  </div>
                </div>

                <div className="col-span-4 row-span-2 bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-8 shadow-sm">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center shrink-0 border border-cyan-100">
                     <Shield className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="w-full">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Threat Detection</div>
                    <div className="text-sm font-bold text-[#0A192F] mt-1">Real-time AI Shield Active</div>
                    <div className="w-full h-1.5 bg-slate-100 mt-3 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-cyan-500" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between opacity-50 grayscale">
          <span className="text-xl font-bold">TECHCORP</span>
          <span className="text-xl font-bold">V-NET</span>
          <span className="text-xl font-bold">CYBERLY</span>
          <span className="text-xl font-bold">DATAFLOW</span>
          <span className="text-xl font-bold hidden md:block">SYNERGY</span>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.3em]">Our Expertise</h2>
             <h3 className="text-4xl lg:text-5xl font-black text-[#0A192F]">Full-Stack Tech Solutions</h3>
             <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
               We don't just fix computers. We build the digital foundation that allows your enterprise to scale without technical debt or security risks.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-cyan-200 transition-all hover:shadow-2xl hover:shadow-cyan-100/50 cursor-pointer"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0A192F] mb-3">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm">
                  Learn More <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A192F] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.5)_0%,transparent_100%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-8">
                <div className="text-5xl lg:text-7xl font-black text-white mb-2">{stat.val}</div>
                <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
             <div className="space-y-4">
               <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.3em]">The Nexus Difference</h2>
               <h3 className="text-4xl lg:text-6xl font-black text-[#0A192F]">Why Leading Firms Trust NexusTech</h3>
             </div>

             <div className="space-y-6">
               {[
                 { title: 'Proactive Over Reactive', desc: 'We predict failures before they happen, saving our clients thousands in potential downtime.' },
                 { title: 'Zero Trust Security', desc: 'Every connection and device is verified. We provide bank-grade security protocols for every client.' },
                 { title: 'Scalable Growth Support', desc: 'Our infrastructure grows with you. From 10 to 10,000 employees, we have you covered.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#0A192F] mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-[#0A192F] rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent p-12 flex flex-col justify-end">
                   <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-4">
                      <Star className="text-orange-400 w-10 h-10 fill-orange-400" />
                      <p className="text-xl italic font-medium text-white italic">
                        "NexusTech didn't just fix our server issues; they transformed our entire digital workflow. We've seen a 40% increase in productivity since moving to their managed cloud environment."
                      </p>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-slate-400 rounded-full" />
                         <div>
                            <div className="font-bold text-white">Sarah Jenkins</div>
                            <div className="text-cyan-400 text-xs">CTO, Global Finance Inc.</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Abstract Floating Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Industries Slider (Simple Row) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-md">
                 <h3 className="text-3xl font-black text-[#0A192F] mb-4">Deep Industry Knowledge</h3>
                 <p className="text-slate-500">We specialize in highly regulated sectors where security and compliance are non-negotiable.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                 {industries.map((ind, i) => (
                   <div key={i} className="px-8 py-6 border border-slate-100 rounded-2xl flex items-center justify-center font-bold text-[#0A192F] hover:bg-slate-50 transition-colors uppercase tracking-widest text-xs">
                     {ind}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.3em]">Proven Results</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#0A192F]">Market Impact stories</h3>
            </div>
            <Link to="/case-studies" className="flex items-center gap-2 text-cyan-600 font-bold group">
               View All Case Studies <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="group relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda5366fd9?q=80&w=800&auto=format&fit=crop" alt="Case Study 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 text-white space-y-2">
                   <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">Fintech</div>
                   <h4 className="text-2xl font-black">Global Apex: 400% Capacity Increase</h4>
                </div>
             </div>
             <div className="group relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Case Study 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 text-white space-y-2">
                   <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">Healthcare</div>
                   <h4 className="text-2xl font-black">LifeNet: Zero Downtime Infrastructure</h4>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.3em]">Common Queries</h2>
             <h3 className="text-4xl font-black text-[#0A192F]">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
             {[
               { q: "What defines 'managed' IT support?", a: "It's a proactive model where we monitor and manage your entire infrastructure for a flat monthly fee, rather than waiting for things to break and charging hourly." },
               { q: "How fast is your emergency response time?", a: "For critical infrastructure failures, our SLA guarantees an engineer begins working on the issue in under 15 minutes, 24/7." },
               { q: "Do you handle HIPAA or SOC2 compliance?", a: "Yes, we specialize in regulated industries. Our core frameworks are built on NIST and ISO standards as default." },
               { q: "Can you help with cloud cost optimization?", a: "Absolutely. Most clients save 20-35% on their monthly Azure/AWS bills after our FinOps team performs an initial audit." }
             ].map((faq, i) => (
               <details key={i} className="group border border-slate-100 rounded-2xl bg-slate-50/50">
                  <summary className="list-none p-6 font-bold text-[#0A192F] cursor-pointer flex justify-between items-center group-open:text-cyan-600">
                     {faq.q}
                     <ChevronRight size={20} className="group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                     {faq.a}
                  </div>
               </details>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#0A192F] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
           
           <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight"> Ready to Secure Your <br/> Digital Future? </h2>
              <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto">
                Join 500+ enterprises that rely on NexusTech for their mission-critical infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                 <button className="bg-[#F58220] hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-900/40">
                   Book Your Consultation
                 </button>
                 <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg backdrop-blur-sm transition-all">
                   Speak with an Expert
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
