const Informacion = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="group relative bg-slate-900/40 border border-slate-800/60 hover:border-fuchsia-500/40 rounded-2xl p-8 md:p-12 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.3)] backdrop-blur-md transition-all duration-700 overflow-hidden">
        {/* Glow effect behind */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl group-hover:bg-fuchsia-500/20 transition-all duration-700"></div>
        
        <h2 className="text-3xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(217,70,239,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(217,70,239,0.6)] transition-all duration-500">
          Perfil del Desarrollador
        </h2>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 hover:bg-slate-900/80 hover:border-fuchsia-400/50 hover:translate-x-2 transition-all duration-500 cursor-default">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Nombre</p>
              <p className="text-lg text-slate-200 font-medium group-hover:text-fuchsia-300 transition-colors">Enzo Girón</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 hover:bg-slate-900/80 hover:border-pink-400/50 hover:translate-x-2 transition-all duration-500 cursor-default">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.2)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Edad</p>
              <p className="text-lg text-slate-200 font-medium group-hover:text-pink-300 transition-colors">20</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 hover:bg-slate-900/80 hover:border-rose-400/50 hover:translate-x-2 transition-all duration-500 cursor-default">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.2)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Correo</p>
              <p className="text-lg text-slate-200 font-medium group-hover:text-rose-300 transition-colors">enzogiron@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informacion;