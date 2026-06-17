const Encabezado = () => {
  return (
    <header className="relative overflow-hidden bg-transparent py-24 px-6 text-center">
      {/* Animated background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-120 w-120 rounded-full bg-violet-600/20 blur-[100px] animate-pulse" />
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -z-10 h-72 w-72 rounded-full bg-cyan-600/20 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="mx-auto max-w-3xl relative z-10 group">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-500 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Sistema Iniciado
        </span>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 transition-transform duration-700 hover:scale-105">
          La programacion <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">Programación</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300/80 group-hover:text-slate-200 transition-colors duration-500">
          Explora los límites de la tecnología. Conecta, crea y diseña el futuro mediante líneas de código que cobran vida en el ciberespacio.
        </p>
        
        {/* Futuristic decorative line */}
        <div className="mt-12 h-px w-full max-w-md mx-auto bg-linear-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>
    </header>
  );
};

export default Encabezado;