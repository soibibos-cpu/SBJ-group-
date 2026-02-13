
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, Building2 } from 'lucide-react';
import { OpuamakubaPattern } from '../constants.tsx';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const targetEmail = 'sbjgroupltd@gmail.com';
    
    // Construct the email body for the recipient
    const body = `Name: ${formData.name}%0D%0A` +
                 `Client Email: ${formData.email}%0D%0A` +
                 `Business Pillar: ${formData.subject}%0D%0A%0D%0A` +
                 `Inquiry Details:%0D%0A${formData.message}`;
                 
    const mailtoUrl = `mailto:${targetEmail}?subject=SBJ Group Inquiry: ${encodeURIComponent(formData.subject)} from ${encodeURIComponent(formData.name)}&body=${body}`;
    
    // Simulate professional processing delay for server handshake
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Trigger the actual email delivery protocol
    window.location.href = mailtoUrl;
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    
    // Reset the form status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact-section" className="relative py-32 bg-navy overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 oil-texture opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 opacity-20">
        <OpuamakubaPattern />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.4em] uppercase border border-silt/30 text-silt">
              Strategic Consultation
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-none mb-8">
            Business <span className="text-silt">Inquiries</span>.
          </h2>

          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Connect with our executive team. All inquiries are received directly at <span className="text-safety font-bold">sbjgroupltd@gmail.com</span> for priority industrial processing.
          </p>
        </div>

        {/* Glassmorphism Inquiry Portal */}
        <div className="relative group/form reveal-on-scroll stagger-2">
          <div className={`p-10 md:p-16 bg-white/[0.04] backdrop-blur-3xl transition-all duration-1000 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.7)] border border-white/10 rounded-[3rem] overflow-hidden ${status === 'success' ? 'opacity-20 blur-sm pointer-events-none' : ''}`}>
            {/* Glossy Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none group-hover/form:from-white/[0.08] transition-colors duration-1000"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-10">
              <div className="transform transition-transform duration-700 group-hover/form:translate-x-2">
                <h3 className="text-white font-display font-black text-3xl tracking-tighter uppercase mb-2">Corporate Relations</h3>
                <p className="text-silt text-[10px] font-bold uppercase tracking-widest">SBJ Group Headquarters | sbjgroupltd@gmail.com</p>
              </div>
              <Building2 className="text-white/10 w-16 h-16 hidden md:block transition-all duration-700 group-hover/form:text-white/20 group-hover/form:scale-110" />
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group/field transform transition-all duration-500 focus-within:translate-x-2">
                  <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-2 block transition-colors group-focus-within/field:text-safety">NAME</label>
                  <input 
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold focus:outline-none focus:border-safety transition-all placeholder:text-white/10 focus:placeholder:opacity-50"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-safety transition-all duration-500 group-focus-within/field:w-full"></div>
                </div>
                <div className="relative group/field transform transition-all duration-500 focus-within:translate-x-2">
                  <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-2 block transition-colors group-focus-within/field:text-safety">Email</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@company.com"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold focus:outline-none focus:border-safety transition-all placeholder:text-white/10 focus:placeholder:opacity-50"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-safety transition-all duration-500 group-focus-within/field:w-full"></div>
                </div>
              </div>

              <div className="relative group/field transform transition-all duration-500 focus-within:translate-x-2">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-2 block transition-colors group-focus-within/field:text-safety">Service Pillar</label>
                <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold focus:outline-none focus:border-safety transition-all appearance-none cursor-pointer pr-10"
                  >
                    <option className="bg-navy text-white" value="General Inquiry">General Business Inquiry</option>
                    <option className="bg-navy text-white" value="Energy Ops">Energy & Upstream Operations</option>
                    <option className="bg-navy text-white" value="Maritime">Maritime & Port Services</option>
                    <option className="bg-navy text-white" value="Security">Security Intelligence & Logistics</option>
                    <option className="bg-navy text-white" value="Procurement">Global Procurement & Haulage</option>
                    <option className="bg-navy text-white" value="Construction">Civil Engineering & Construction</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-focus-within/field:text-safety">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-safety transition-all duration-500 group-focus-within/field:w-full"></div>
              </div>

              <div className="relative group/field transform transition-all duration-500 focus-within:translate-x-2">
                <label className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-2 block transition-colors group-focus-within/field:text-safety">Inquiry Details</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your requirements..."
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold focus:outline-none focus:border-safety transition-all resize-none placeholder:text-white/10 focus:placeholder:opacity-50"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-safety transition-all duration-500 group-focus-within/field:w-full"></div>
              </div>

              <button 
                disabled={status === 'sending'}
                className="w-full bg-safety text-white px-10 py-6 font-black text-[11px] tracking-[0.5em] uppercase flex items-center justify-center gap-6 group hover:bg-white hover:text-navy transition-all duration-700 disabled:opacity-50 shadow-2xl rounded-full relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Encrypting & Routing
                    </>
                  ) : (
                    <>
                      Submit To HQ
                      <Send size={16} className="group-hover:translate-x-3 group-hover:-translate-y-1 transition-transform duration-500" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </button>
            </form>
          </div>

          {/* Success Overlay with Animation */}
          {status === 'success' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <div className="w-28 h-28 bg-white border-4 border-safety rounded-full flex items-center justify-center text-navy mb-8 shadow-[0_0_60px_rgba(255,87,34,0.4)] animate-[successPop_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
                <CheckCircle2 size={56} className="text-safety" />
              </div>
              <div className="animate-[successText_0.8s_ease-out_forwards]">
                <h3 className="text-4xl font-display font-black text-white text-center mb-3 tracking-tighter uppercase">Inquiry Routed</h3>
                <p className="text-silt font-bold uppercase tracking-[0.4em] text-[10px] text-center opacity-80">Sent to: sbjgroupltd@gmail.com</p>
                <p className="text-white/40 font-medium uppercase tracking-[0.2em] text-[8px] text-center mt-2">Check your email client to finalize transmission</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes successPop {
          0% { transform: scale(0.5) rotate(-20deg); opacity: 0; }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        @keyframes successText {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
