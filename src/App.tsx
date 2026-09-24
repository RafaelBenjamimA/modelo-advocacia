import { motion } from "framer-motion";
import { Scale, ShieldCheck, Briefcase, ChevronRight, MessageSquare, Clock } from "lucide-react";

// Importe o seu botão de WhatsApp aqui. Ajuste o caminho se necessário.
import WhatsAppButton from "./components/buttonWpp"; 

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-adv-light font-sans text-slate-800 selection:bg-adv-gold selection:text-white">
      
      {/* HEADER SIMPLES */}
      <header className="fixed top-0 w-full bg-adv-dark/95 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-white font-serif text-2xl font-bold tracking-wider">
            SILVA<span className="text-adv-gold">.</span>
          </div>
          <a href="#contato" className="hidden sm:flex items-center gap-2 text-sm text-white hover:text-adv-gold transition-colors">
            <MessageSquare size={16} />
            Atendimento Rápido
          </a>
        </div>
      </header>

      {/* HERO SECTION PREMIUM */}
      {/* Ajuste: pt-32 para compensar o header e pb-32 para dar espaço aos cards no mobile */}
      <section className="relative min-h-screen bg-adv-dark flex items-center justify-center pt-32 pb-32 lg:pb-20 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
            alt="Escritório" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-adv-dark/80 via-adv-dark/95 to-adv-dark" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-adv-gold/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            
            <div className="lg:col-span-8 relative p-6 sm:p-8 md:p-12 rounded-sm border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl mt-4 lg:mt-0">
              <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-adv-gold" />
              
              <p className="text-adv-gold text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
                <span className="w-8 sm:w-12 h-[1px] bg-adv-gold/50" />
                Alta Complexidade Jurídica
              </p>
              
              {/* Ajuste: Fontes menores no mobile (text-3xl) e quebra de linha ajustada */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif leading-[1.2] sm:leading-[1.15] mb-6 sm:mb-8 font-normal">
                Estratégia e solidez na <br className="hidden sm:block" />
                <span className="italic text-slate-300">defesa do seu patrimônio.</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-light">
                Atuação consultiva e contenciosa especializada. Protegemos os interesses de empresas e famílias com discrição, ética e excelência técnica inegociável.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <button className="w-full sm:w-auto bg-adv-gold text-adv-dark px-6 sm:px-10 py-4 font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                  Consultoria Estratégica
                  <ChevronRight size={16} />
                </button>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <ShieldCheck size={20} className="text-adv-gold shrink-0" />
                  <span>Sigilo Absoluto</span>
                </div>
              </div>
            </div>

            {/* Ajuste: mt-8 no mobile para afastar do bloco de texto, e flex-wrap para telas muito finas */}
            <div className="lg:col-span-4 flex flex-row flex-wrap lg:flex-col gap-6 sm:gap-8 justify-center lg:justify-end lg:border-l border-white/10 lg:pl-10 mt-6 lg:mt-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-serif text-white mb-1">10+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest">Anos de Atuação</p>
              </div>
              <div className="hidden lg:block w-8 h-[1px] bg-white/10" />
              {/* Adicionado divisor vertical apenas no mobile para separar as estatísticas */}
              <div className="block lg:hidden w-[1px] h-12 bg-white/10" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-serif text-white mb-1">500+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest">Casos Resolvidos</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
      
      {/* FEATURES / DIFERENCIAIS */}
      {/* Ajuste: Margem negativa diferente para mobile e desktop, e gap maior no mobile */}
      <section className="relative z-20 -mt-20 lg:-mt-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-1">
          {[
            { icon: ShieldCheck, title: "Segurança Absoluta", desc: "Sigilo e proteção total dos seus dados e interesses." },
            { icon: Scale, title: "Estratégia Focada", desc: "Análise minuciosa para soluções jurídicas resolutivas." },
            { icon: Clock, title: "Agilidade no Retorno", desc: "Comunicação clara e atualizações constantes do seu caso." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col gap-3 sm:gap-4 border-t-2 border-transparent hover:border-adv-gold transition-colors"
            >
              <item.icon className="text-adv-gold" size={28} />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-adv-dark">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="py-20 sm:py-24 max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-adv-dark font-bold mb-4">Nossas Especialidades</h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">Foco total em áreas onde possuímos profundo conhecimento técnico e prático.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { area: "Direito Empresarial", desc: "Prevenção de passivos, contratos societários e defesa estruturada para sua empresa crescer com segurança." },
            { area: "Direito de Família", desc: "Resolução de conflitos familiares, divórcios, partilha de bens e sucessões com humanidade e discrição." },
            { area: "Direito Imobiliário", desc: "Assessoria em compras, vendas, regularização de imóveis e estruturação de negócios imobiliários." },
            { area: "Direito Digital", desc: "Adequação à LGPD, contratos de tecnologia e defesa em crimes cibernéticos." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1 }}
              className="group p-6 sm:p-8 border border-slate-200 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <Briefcase className="text-slate-300 group-hover:text-adv-gold transition-colors mb-4 sm:mb-6" size={24} />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-adv-dark mb-2 sm:mb-3">{item.area}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* O ADVOGADO / AUTORIDADE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
              alt="Dr. Roberto Silva" 
              className="w-full object-cover aspect-[4/5] sm:aspect-square lg:aspect-[4/5] object-top rounded-sm"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h2 className="text-3xl sm:text-4xl font-serif text-adv-dark font-bold mb-4 sm:mb-6">Dr. Roberto Silva</h2>
            <p className="text-xs sm:text-sm font-bold text-adv-gold tracking-widest uppercase mb-6 sm:mb-8">OAB/MG 123.456</p>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>Com mais de 10 anos de experiência nos tribunais, meu compromisso é traduzir a complexidade da lei em soluções claras e seguras para os meus clientes.</p>
              <p>Acredito que uma boa defesa não começa no tribunal, mas sim na estratégia preventiva e no entendimento profundo do problema de cada cliente que senta à minha mesa.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPONENTE DO WHATSAPP INJETADO AQUI */}
      <WhatsAppButton />

    </div>
  );
}