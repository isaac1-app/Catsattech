import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A192F] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <div className="w-5 h-5 border-2 border-cyan-400 rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Nexus<span className="text-cyan-400">Tech</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Architecting resilient digital foundations for the world's most innovative enterprises. Proactive, expert-driven IT management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-[#0A192F] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-[#0A192F] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-[#0A192F] transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Digital Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Impact Reports</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Knowledge Lab</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-8">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Zero-Trust Security</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Azure/AWS Strategy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">vCTO Consulting</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Healthcare Tech</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-8">Newsletter</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Get our weekly "Security Pulse" delivered directly to your inbox.
            </p>
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 overflow-hidden">
               <input type="email" placeholder="work@email.com" className="bg-transparent px-4 py-2 text-sm outline-none w-full" />
               <button className="bg-cyan-600 text-[#0A192F] px-4 py-2 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-all">
                  Join
               </button>
            </div>
            <p className="text-[10px] text-slate-500">No spam. Only enterprise-grade intelligence. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Global Stats/Trust Badges */}
        <div className="py-12 border-y border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           <div className="text-center group">
              <div className="text-2xl font-black group-hover:text-cyan-400 transition-colors">99.99%</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Infrastructure Uptime</div>
           </div>
           <div className="text-center group">
              <div className="text-2xl font-black group-hover:text-cyan-400 transition-colors">&lt; 15min</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Average Response</div>
           </div>
           <div className="text-center group">
              <div className="text-2xl font-black group-hover:text-cyan-400 transition-colors">150+</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">Certified Experts</div>
           </div>
           <div className="text-center group">
              <div className="text-2xl font-black group-hover:text-cyan-400 transition-colors">Global</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">24/7 SOC Ops</div>
           </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} NexusTech Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
