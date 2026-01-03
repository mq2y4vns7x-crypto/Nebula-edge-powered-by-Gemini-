'use client';
import { useChat } from '@ai-sdk/react';
import { Zap, Send } from 'lucide-react';

export default function NebulaEngine() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-screen bg-[#020104] text-white font-sans overflow-hidden relative">
      {/* 🌌 Pulsing Nebula Core */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <main className="flex-1 flex flex-col z-10">
        <header className="p-6 border-b border-white/5 flex items-center gap-3 bg-black/20 backdrop-blur-md">
          <div className="p-2 bg-purple-600 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.4)]">
             <Zap size={18} fill="white" />
          </div>
          <h1 className="font-black italic uppercase tracking-tighter text-xl">Nebula Edge</h1>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-2xl max-w-[80%] ${m.role === 'user' ? 'bg-purple-600 shadow-xl' : 'bg-[#12121a] border border-white/5'}`}>
                <p className="text-sm">{m.content}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className="p-6">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
            <input
              className="w-full bg-[#12121a] border border-white/10 rounded-full py-4 px-6 pr-14 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
              placeholder="Inject command..."
              value={input}
              onChange={handleInputChange}
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-purple-400 transition-all">
              <Send size={18} />
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
}
