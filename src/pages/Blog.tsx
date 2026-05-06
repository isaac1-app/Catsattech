import { motion } from 'motion/react';
import { Search, Clock, User, ChevronRight, Tags, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Hidden Costs of Technical Debt in 2024',
      excerpt: 'Why ignoring your legacy infrastructure could be costing your firm up to 30% in operational efficiency every quarter.',
      author: 'David Chen',
      date: 'May 12, 2024',
      readTime: '8 min read',
      tag: 'Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Zero Trust Security: Not Just a Buzzword',
      excerpt: 'A practical guide for CTOs on implementing a zero-trust framework without disrupting existing workflows.',
      author: 'Sarah Miller',
      date: 'April 28, 2024',
      readTime: '12 min read',
      tag: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hybrid Cloud vs Full Public: The Truth',
      excerpt: 'An objective analysis of data residency requirements and total cost of ownership for modern enterprises.',
      author: 'Marcus Brooks',
      date: 'April 15, 2024',
      readTime: '10 min read',
      tag: 'Cloud',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const categories = ['Infrastructure', 'Cybersecurity', 'Cloud Computing', 'AI & Automation', 'Managed Services', 'IT Strategy'];

  return (
    <div className="pt-20">
      {/* Search Header */}
      <section className="bg-[#0A192F] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-cyan-600/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center space-y-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="space-y-4"
           >
              <h2 className="text-cyan-400 font-bold tracking-[0.4em] text-sm uppercase">Nexus Insights</h2>
              <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight">Expert Tech <br/><span className="text-cyan-400">Resources.</span></h1>
              <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
                Stay updated with the latest in enterprise IT, security protocols, and digital transformation strategy from our global lab.
              </p>
           </motion.div>

           <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-3xl p-2 border border-white/10 flex items-center">
              <div className="pl-6 text-white/50"><Search size={24} /></div>
              <input type="text" className="w-full bg-transparent px-6 py-4 outline-none text-white font-medium" placeholder="Search for insights (e.g. Cybersecurity, AWS...)" />
              <button className="bg-cyan-600 text-[#0A192F] font-black px-10 py-4 rounded-2xl hidden sm:block">Search</button>
           </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Sidebar */}
              <div className="lg:w-1/4 space-y-12 shrink-0">
                 <div className="space-y-6">
                    <h4 className="text-sm font-black text-[#0A192F] uppercase tracking-widest flex items-center gap-2">
                       <Tags size={16} /> Categories
                    </h4>
                    <div className="flex flex-wrap lg:flex-col gap-3">
                       {categories.map((cat, i) => (
                         <button key={i} className="text-left px-4 py-2 text-sm font-bold text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all">
                           {cat}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                    <h4 className="text-xl font-black text-[#0A192F]">Stay Compliant</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Join 5,000+ IT leaders who receive our monthly Security Pulse report.</p>
                    <input type="email" className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl outline-none" placeholder="work@email.com" />
                    <button className="w-full bg-[#0A192F] text-white py-3 rounded-xl font-bold">Subscribe</button>
                 </div>
              </div>

              {/* Main List */}
              <div className="lg:w-3/4 space-y-16">
                 {posts.map((post, i) => (
                   <motion.article 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="group flex flex-col md:flex-row gap-10 items-center overflow-hidden"
                   >
                     <div className="w-full md:w-2/5 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-lg">
                        <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-6 left-6 px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-600 shadow-xl">
                           {post.tag}
                        </div>
                     </div>
                     <div className="w-full md:w-3/5 space-y-6">
                        <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                           <span className="flex items-center gap-2"><User size={14} className="text-cyan-600" /> {post.author}</span>
                           <span className="flex items-center gap-2"><Clock size={14} className="text-cyan-600" /> {post.readTime}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-[#0A192F] group-hover:text-cyan-600 transition-colors leading-tight">
                           {post.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed">
                           {post.excerpt}
                        </p>
                        <button className="flex items-center gap-2 text-cyan-600 font-bold group/btn">
                           Read Full Article <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                     </div>
                   </motion.article>
                 ))}

                 {/* Pagination Placeholder */}
                 <div className="pt-12 flex justify-center gap-4">
                    <button className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center font-bold text-[#0A192F]">1</button>
                    <button className="w-12 h-12 hover:bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center font-bold text-slate-400">2</button>
                    <button className="w-12 h-12 hover:bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center font-bold text-slate-400">3</button>
                    <button className="w-12 h-12 hover:bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center font-bold text-slate-400">
                       <ChevronRight size={20} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
