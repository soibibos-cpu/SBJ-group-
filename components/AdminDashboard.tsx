import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../src/firebase.ts';
import { useAuth } from '../src/AuthContext.tsx';
import { Mail, Trash2, CheckCircle, Clock } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'archived';
  createdAt: any;
}

const AdminDashboard: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const { role } = useAuth();

  useEffect(() => {
    if (role !== 'admin') {
      setLoading(false);
      return;
    }

    const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const inquiryData: Inquiry[] = [];
      snapshot.forEach((doc) => {
        inquiryData.push({ id: doc.id, ...doc.data() } as Inquiry);
      });
      setInquiries(inquiryData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'inquiries');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [role]);

  const markAsRead = async (id: string) => {
    try {
      await updateDoc(doc(db, 'inquiries', id), { status: 'read' });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `inquiries/${id}`);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      await deleteDoc(doc(db, 'inquiries', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `inquiries/${id}`);
    }
  };

  if (role !== 'admin') {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-3xl font-display font-black text-white mb-4">Access Denied</h2>
          <p className="text-white/60">You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-2">Admin Dashboard</h1>
            <p className="text-silt font-bold uppercase tracking-widest text-xs">Inquiry Management System</p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
            <Mail className="text-safety" size={18} />
            <span className="text-white font-bold">{inquiries.filter(i => i.status === 'new').length} New</span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-safety"></div>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
            <p className="text-white/50 font-medium">No inquiries found.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {inquiries.map((inquiry) => (
              <div 
                key={inquiry.id} 
                className={`bg-white/5 border ${inquiry.status === 'new' ? 'border-safety/50 shadow-[0_0_30px_rgba(255,87,34,0.1)]' : 'border-white/10'} rounded-2xl p-6 md:p-8 transition-all`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      {inquiry.status === 'new' ? (
                        <span className="bg-safety/20 text-safety px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                          <Clock size={12} /> New
                        </span>
                      ) : (
                        <span className="bg-white/10 text-white/60 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                          <CheckCircle size={12} /> Read
                        </span>
                      )}
                      <span className="text-white/40 text-xs font-medium">
                        {inquiry.createdAt?.toDate ? new Date(inquiry.createdAt.toDate()).toLocaleString() : 'Just now'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{inquiry.subject}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
                      <span className="font-medium text-white">{inquiry.name}</span>
                      <span>•</span>
                      <a href={`mailto:${inquiry.email}`} className="hover:text-safety transition-colors">{inquiry.email}</a>
                    </div>
                    
                    <div className="bg-black/20 rounded-xl p-6 border border-white/5">
                      <p className="text-white/80 whitespace-pre-wrap leading-relaxed">{inquiry.message}</p>
                    </div>
                  </div>
                  
                  <div className="flex md:flex-col gap-3">
                    {inquiry.status === 'new' && (
                      <button 
                        onClick={() => markAsRead(inquiry.id)}
                        className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle size={14} /> Mark Read
                      </button>
                    )}
                    <button 
                      onClick={() => deleteInquiry(inquiry.id)}
                      className="flex-1 md:flex-none bg-red-500/10 hover:bg-red-500/20 text-red-500 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
