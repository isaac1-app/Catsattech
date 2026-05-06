import { motion } from 'motion/react';
import { 
  Shield, Globe, Cloud, Network, Code, BarChart3, Database, HardDrive, 
  CheckCircle2, ArrowRight 
} from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      id: 'managed-it',
      title: 'Managed IT Support',
      icon: <Globe size={40} className="text-cyan-600" />,
      desc: 'Our flagship 24/7 proactive monitoring and helpdesk support. We take the stress out of technology management.',
      features: ['24/7/365 Monitoring', 'Unlimited Helpdesk Access', 'Strategic Planning', 'Asset Management']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      icon: <Shield size={40} className="text-cyan-600" />,
      desc: 'Multi-layered protection designed to secure your identity, endpoints, and perimeter against advanced threats.',
      features: ['Threat Detection & Response', 'Security Awareness Training', 'Email Protection', 'Vulnerability Scanning']
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      icon: <Cloud size={40} className="text-cyan-600" />,
      desc: 'Seamless migration and management for Azure, AWS, and GCP environments optimized for performance.',
      features: ['Cloud Migration Services', 'FinOps Cost Optimization', 'Serverless Architecture', 'Hybrid Cloud Support']
    },
    {
      id: 'network',
      title: 'Network Setup & Maintenance',
      icon: <Network size={40} className="text-cyan-600" />,
      desc: 'Bulletproof network architecture designed for zero downtime and maximum throughput across your entire campus.',
      features: ['Enterprise WiFi Design', 'SD-WAN Deployment', 'VPN & Remote Access', 'Network Auditing']
    },
    {
      id: 'software',
      title: 'Software Development',
      icon: <Code size={40} className="text-cyan-600" />,
      desc: 'Custom enterprise software and API integrations tailored to automate your unique business workflows.',
      features: ['Custom Web Applications', 'API Transformations', 'Legacy System Modernization', 'Agile Delivery']
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      icon: <BarChart3 size={40} className="text-cyan-600" />,
      desc: 'High-level strategic technology roadmap development aligned with your 5-year business growth plan.',
      features: ['vCISO & vCTO Services', 'Digital Transformation', 'Compliance Auditing', 'Budget Forecasting']
    },
    {
      id: 'backup',
      title: 'Data Backup & Recovery',
      icon: <Database size={40} className="text-cyan-600" />,
      desc: 'Comprehensive disaster recovery plans and automated backups to ensure your business remains resilient.',
      features: ['Business Continuity Planning', 'Immutable Cloud Backup', 'Regular Restoration Tests', 'Fast RTO/RPO Metrics']
    },
    {
      id: 'hardware',
      title: 'Hardware Procurement',
      icon: <HardDrive size={40} className="text-cyan-600" />,
      desc: 'Sourcing, configuration, and deployment of enterprise hardware with lifecycle management built-in.',
      features: ['Global Logistics', 'Device Configuration', 'Asset Retirement', 'Hardware Leasing']
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100 opacity-20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-4"
           >
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.4em]">Our Capabilities</h2>
              <h1 className="text-5xl lg:text-7xl font-black text-[#0A192F] leading-tight">
                Solutions That Scale <br/> Without <span className="text-cyan-600">Compromise.</span>
              </h1>
              <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
                From simple helpdesk tickets to global multi-cloud migrations, we provide the expertise needed to keep your business ahead of the curve.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceList.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="group p-10 rounded-[3rem] border border-slate-100 bg-white hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-100/30 transition-all flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-10">
                   <div className="w-20 h-20 bg-cyan-50 rounded-3xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                     {service.icon}
                   </div>
                   <div className="text-5xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors">
                     0{i + 1}
                   </div>
                </div>
                
                <h3 className="text-3xl font-black text-[#0A192F] mb-6">{service.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="text-green-500 shrink-0" size={16} />
                      {feat}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#0A192F] font-bold py-4 border-t border-slate-100 group-hover:text-cyan-600 transition-colors">
                  In-depth Service Overview <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <h3 className="text-4xl lg:text-5xl font-black text-[#0A192F]">Not sure what you need?</h3>
              <p className="text-slate-500 text-xl leading-relaxed">
                Technology can be complex, but choosing the right partner shouldn't be. Speak with one of our senior architects for a no-obligation audit of your current IT stack.
              </p>
              <div className="flex gap-4">
                 <button className="bg-[#F58220] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-orange-200">
                    Book Discovery Call
                 </button>
                 <button className="bg-[#0A192F] text-white px-8 py-4 rounded-xl font-bold">
                    Service Calculator
                 </button>
              </div>
           </div>
           <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 lg:translate-x-12">
              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-cyan-600">1</div>
                   <p className="font-bold text-[#0A192F]">Tell us about your business goals.</p>
                </div>
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-cyan-600">2</div>
                   <p className="font-bold text-[#0A192F]">We perform a deep-dive security audit.</p>
                </div>
                <div className="flex gap-6 items-center">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold text-cyan-600">3</div>
                   <p className="font-bold text-[#0A192F]">Receive a custom technology map.</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
