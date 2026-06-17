import Encabezado from "./components/Encabezado";
import PiePagina from "./components/PiePagina";
import Informacion from "./components/informacion";

function App() {
  return (
    <div className="min-h-screen bg-[#05050a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Encabezado />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="group bg-slate-900/30 border border-slate-800/60 hover:border-cyan-500/30 rounded-2xl p-8 md:p-12 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] backdrop-blur-md transition-all duration-700">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.7)]">
            Conoce más sobre la Programación
          </h2>
          <p className="text-slate-300/80 leading-relaxed text-base sm:text-lg mb-8 transition-colors duration-500 group-hover:text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus iusto placeat in,
            odio molestias laborum sit quod obcaecati repudiandae iure ea reiciendis consectetur alias debitis
            odit accusamus illo non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore
            quibusdam ratione ut, voluptas iste sequi exercitationem atque ipsam. Quos autem voluptate
            labore necessitatibus accusantium voluptates laudantium rem non in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50 hover:bg-slate-900/80 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-4px_rgba(6,182,212,0.4)] transition-all duration-500 cursor-pointer">
              <h3 className="text-xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Fundamentos de Programación</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Domina los conceptos básicos como variables, control de flujo, algoritmos y estructuras de datos para crear bases sólidas.
              </p>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50 hover:bg-slate-900/80 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_-4px_rgba(192,132,252,0.4)] transition-all duration-500 cursor-pointer">
              <h3 className="text-xl font-bold text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">Tecnologías Modernas</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Aprende sobre control de versiones con Git, frameworks frontend como React, y despliegues automáticos en la nube.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Informacion />
      
      <PiePagina />
    </div>
  );
}

export default App;
