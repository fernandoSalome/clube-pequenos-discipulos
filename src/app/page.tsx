"use client";

import Image from "next/image";
import { useState } from "react";

const CDN = "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures";
const img = (file: string) => `${CDN}/${file}`;

const APP = "CaminhoFlix";

/* ─── FAQ accordion ─── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden bg-[#1a1a1a]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-gray-100 hover:bg-[#222] transition-colors"
      >
        <span>{q}</span>
        <span className="text-green-500 text-2xl ml-4 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-3 text-gray-400 text-sm leading-relaxed border-t border-gray-700 bg-[#0d0d0d]">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Check icon ─── */
const Check = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PLAN_FEATURES = [
  "+50 Histórias e desenhos biblicos",
  "Filmes bíblicos",
  "100 músicas bíblicas",
  "Histórias para leitura",
  "Jogos biblicos e quizzes",
  "Atividades sobre a bíblias",
  "Episódios novos novidades todos os dias no whatsapp",
  "🔥 Mapas Mentais Bíblicos Infantis",
  "🔥 Bobbie goods bíblicos",
  "🔥 Devocionais infantis",
];

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-gray-100 overflow-x-hidden font-[Roboto,sans-serif]">

      {/* ══════════════════════════════════════════
          1. BANNER MARQUEE "OFERTA ESPECIAL"
      ══════════════════════════════════════════ */}
      <div className="bg-red-600 text-white py-2.5 text-sm font-black tracking-widest overflow-hidden">
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="flex-shrink-0">
              OFERTA ESPECIAL &nbsp;•&nbsp; OFERTA ESPECIAL &nbsp;•&nbsp; OFERTA ESPECIAL &nbsp;•
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          2. LOGO / OFERTA (f1)
      ══════════════════════════════════════════ */}
      <div className="bg-[#0d0d0d] flex justify-center py-6 px-4">
        <Image
          src="/page-1/f1.png"
          alt="CaminhoFlix — Oferta Especial"
          width={400}
          height={260}
          className="object-contain"
          priority
        />
      </div>

      {/* ══════════════════════════════════════════
          3. HERO
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] pt-6 pb-0 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            SEU FILHO <span className="text-green-500">PRÓXIMO DE DEUS</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-2 max-w-2xl mx-auto">
            Histórias e Filmes Bíblicos, Atividades e jogos inspirados na Palavra de Deus!
          </p>
          <p className="text-gray-300 text-base md:text-lg font-semibold max-w-2xl mx-auto">
            A única plataforma de entretenimento <strong className="text-white">segura</strong> e <strong className="text-white">edificante</strong> para sua criança
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. PROVA SOCIAL
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            O APLICATIVO QUE JÁ TRANSFORMOU{" "}
            <span className="text-green-500">MILHARES DE FAMÍLIAS</span>
          </h2>
          <p className="text-gray-400 mb-8">
            + de <strong className="text-green-500">10 mil</strong> famílias e mais de{" "}
            <strong className="text-green-500">5 mil</strong> assinantes
          </p>
        </div>
      </section>

      {/* Divisor f2 */}
      <div className="bg-[#0d0d0d] flex justify-center py-4">
        <Image
          src="/page-1/f2.png"
          alt="divisor"
          width={500}
          height={160}
          className="object-contain"
        />
      </div>

      {/* ══════════════════════════════════════════
          5. VEJA O QUE VOCÊ VAI RECEBER
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            VEJA O QUE VOCÊ VAI RECEBER{" "}
            <span className="text-green-500">NESSA OFERTA ESPECIAL</span>
          </h2>

          <div className="space-y-5 mb-12">
            {(
              [
                { icon: "🎬", text: (<>Plataforma completa com <strong className="text-green-400">+50 filmes e desenhos animados</strong> com histórias bíblicas;</>) },
                { icon: "📖", text: (<><strong className="text-green-400">+20 histórias bíblicas ilustradas</strong> para leitura</>) },
                { icon: "🎮", text: (<>Aplicativo com <strong className="text-green-400">Jogos didáticos</strong></>) },
                { icon: "✝️", text: (<>Faça parte da missão de <strong className="text-green-400">reformar o Brasil</strong></>) },
              ] as { icon: string; text: React.ReactNode }[]
            ).map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  {item.icon}
                </div>
                <p className="text-gray-200 text-lg font-semibold leading-snug">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl font-black text-center mb-6 text-white">
            <span className="text-green-500">EPISÓDIOS NOVOS</span> TODOS OS DIAS
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { src: "/page-1/davi-1.png", label: "Davi e Golias" },
              { src: "/page-1/jonas-1.png", label: "Jonas e o Peixe" },
              { src: "/page-1/noe-3.png", label: "A Arca de Noé" },
              { src: "/page-1/daniel-4.png", label: "Daniel e os Leões" },
            ].map(({ src, label }) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt={label} width={300} height={300} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BÔNUS ESPECIAIS
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            BÔNUS ESPECIAIS
          </h2>
          <p className="text-center text-gray-300 text-base md:text-lg mb-12 max-w-2xl mx-auto">
            ADQUIRINDO NESSA <strong className="text-white">OFERTA ESPECIAL</strong>, VOCÊ RECEBERÁ TODOS ESSES BÔNUS{" "}
            <strong className="text-green-500">GRATUITAMENTE ⬇️</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bônus 1 */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden shadow-sm">
              <Image src="/page-1/monte-davi.png" alt="Atividades e Jogos Bíblicos" width={600} height={380} className="w-full object-cover" />
              <div className="p-5">
                <span className="inline-block bg-green-900 text-green-400 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 1</span>
                <h3 className="font-black text-white text-lg mb-1">ATIVIDADES E JOGOS BÍBLICOS</h3>
                <p className="text-gray-400 text-sm">Mais de 1.500 atividades e jogos bíblicos para educação infantil</p>
              </div>
            </div>

            {/* Bônus 2 */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden shadow-sm">
              <Image src="/page-1/quiz.png" alt="Quizzes Bíblicos" width={600} height={380} className="w-full object-cover" />
              <div className="p-5">
                <span className="inline-block bg-green-900 text-green-400 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 2</span>
                <h3 className="font-black text-white text-lg mb-1">Quizzes Bíblicos</h3>
                <p className="text-gray-400 text-sm">Quizzes interativos sobre histórias da Bíblia para testar e reforçar o aprendizado</p>
              </div>
            </div>

            {/* Bônus 3 */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex justify-center bg-[#1a1a1a] pt-4">
                <Image src="/page-1/celular.png" alt="Grupo VIP" width={200} height={280} className="object-contain" />
              </div>
              <div className="p-5">
                <span className="inline-block bg-green-900 text-green-400 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 3</span>
                <h3 className="font-black text-white text-lg mb-1">GRUPO VIP</h3>
                <p className="text-gray-400 text-sm">História bíblica nova todos os dias em seu Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. E TEM MAIS...
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            E TEM MAIS...
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Nesta Oferta Especial você vai receber todos os produtos extras que vendemos separadamente,{" "}
            <strong className="text-green-500">totalmente grátis!</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Mapas Mentais */}
            <div className="bg-[#0d0d0d] border border-gray-700 rounded-2xl overflow-hidden shadow-sm text-center">
              <Image src="/page-1/mapa.png" alt="Mapas mentais infantis" width={400} height={300} className="w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-white mb-2">Mapas mentais infantis</h3>
                <p className="text-gray-400 text-sm">Aprender sobre a Bíblia fica muito mais divertido e fácil com esses mapas mentais coloridos e ilustrados!</p>
              </div>
            </div>

            {/* Colorindo */}
            <div className="bg-[#0d0d0d] border border-gray-700 rounded-2xl overflow-hidden shadow-sm text-center">
              <Image src="/page-1/bobbie%20goods.png" alt="Colorindo com Jesus" width={400} height={300} className="w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-white mb-1">Colorindo com Jesus</h3>
                <p className="text-green-500 text-xs font-bold mb-1">Estilo Bobbie Goods</p>
                <p className="text-gray-400 text-sm">São mais de 100 paginas incríveis para colorir com muito amor e fé</p>
              </div>
            </div>

            {/* Devocionais */}
            <div className="bg-[#0d0d0d] border border-gray-700 rounded-2xl overflow-hidden shadow-sm text-center">
              <Image src="/page-1/devocional.png" alt="Devocionais Infantis" width={400} height={300} className="w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-white mb-2">DEVOCIONAIS INFANTIS</h3>
                <p className="text-gray-400 text-sm">Ensinam valores cristãos e ajudam as crianças a se conectarem com Deus desde cedo</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#oferta"
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all shadow-lg shadow-green-900"
            >
              QUERO APROVEITAR A OFERTA ESPECIAL
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. DEPOIMENTOS (vídeos)
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            QUEM ADQUIRIU AMOU!{" "}
            <span className="text-green-500">VEJA OS DEPOIMENTOS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-[#1a1a1a]">
              <video
                src="/page-1/menino.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
                style={{ aspectRatio: "9/16" }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm bg-[#1a1a1a]">
              <video
                src="/page-1/valentina.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
                style={{ aspectRatio: "9/16" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. NÃO É SÓ DESENHOS
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            O <span className="text-green-500">{APP.toUpperCase()}</span> NÃO SE TRATA{" "}
            <em>&quot;APENAS DE DESENHOS&quot;</em>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            E sim uma plataforma intuitiva que irá cuidar por completo da educação da sua criança da melhor maneira possível!{" "}
            <strong className="text-white">Desenvolvida por profissionais da área, Pedagogos e Psicólogos Cristãos!</strong>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. COMO RECEBER O ACESSO
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            COMO RECEBEREI ACESSO AO{" "}
            <span className="text-green-500">APLICATIVO</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Após a assinatura você irá receber em seu e-mail o login para acessar a plataforma exclusiva diretamento no seu dispositivo...
          </p>
          <Image
            src="/page-1/login.png"
            alt="Como acessar o aplicativo"
            width={700}
            height={420}
            className="w-full object-contain mx-auto"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11. GARANTIA
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#0d0d0d] border-2 border-green-700 rounded-3xl p-8 shadow-sm text-center md:text-left">
            <Image
              src="/page-1/garantia7.png"
              alt="Garantia 7 dias"
              width={180}
              height={180}
              className="flex-shrink-0 object-contain"
            />
            <p className="text-gray-300 leading-relaxed">
              A única maneira de você saber se a plataforma é para você ou não é estando por dentro.
              E para tornar essa decisão ainda mais fácil, te damos total liberdade para juntar-se a nós e caso você não aprove,
              nós te devolveremos seu dinheiro!{" "}
              <strong className="text-green-400">Você tem 7 dias de garantia.</strong>{" "}
              Basta solicitar que fazemos o estorno sem lhe perguntar nada. Cancelamento rápido e fácil.
              Você não tem o que perder, não é mesmo?
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12. PLANOS DE ASSINATURA
      ══════════════════════════════════════════ */}
      <section id="oferta" className="bg-[#0d0d0d] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* ── Mensal ── */}
            <div className="border-2 border-gray-700 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="bg-[#7a1010] py-4 px-6 text-center">
                <h3 className="text-2xl font-black text-white uppercase tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                  PLANO MENSAL
                </h3>
                <p className="text-red-200 text-xs mt-1">Cancele quando quiser</p>
              </div>
              <div className="bg-[#0d0d0d] p-8 flex flex-col flex-1">
                <div className="text-center mb-6 bg-[#1a1a1a] rounded-2xl py-5 px-4">
                  <p className="text-gray-400 text-base font-semibold">
                    De <s className="font-black text-gray-200 text-lg">R$ 79,90</s> por apenas
                  </p>
                  <div className="flex items-end justify-center gap-1 mt-2">
                    <span className="text-white text-3xl font-black mb-2">R$</span>
                    <span className="text-white text-8xl font-black leading-none">37</span>
                    <span className="text-white text-3xl font-black mb-2">,90</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 font-semibold">por mês</p>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  {PLAN_FEATURES.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-gray-300">
                      <Check />
                      <span className="text-base leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://pay.cakto.com.br/3aoobk8"
                  onClick={() => (window as unknown as { fbq: (...a: unknown[]) => void }).fbq?.('track', 'InitiateCheckout')}
                  className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-black py-4 rounded-2xl uppercase tracking-wide transition-colors"
                >
                  ASSINAR AGORA — 7 DIAS DE GARANTIA
                </a>
                <p className="text-center text-red-400 text-xs font-bold mt-3">⏳ Oferta por tempo limitado</p>
              </div>
            </div>

            {/* ── Anual ── */}
            <div className="relative border-2 border-green-500 rounded-3xl shadow-lg flex flex-col mt-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-black px-6 py-2 rounded-full uppercase whitespace-nowrap shadow z-10">
                ⭐ MAIS POPULAR
              </div>
              <div className="bg-[#111] py-4 px-6 text-center rounded-t-3xl">
                <h3 className="text-2xl font-black text-white uppercase tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                  PLANO ANUAL
                </h3>
                <p className="text-green-400 text-xs mt-1 font-bold">OFERTA ESPECIAL</p>
              </div>
              <div className="bg-[#0d0d0d] p-8 flex flex-col flex-1">
                <div className="flex justify-center mb-4">
                  <Image src="/page-1/caminho50.png" alt="CaminhoFlix 50% de desconto" width={320} height={220} className="object-contain" />
                </div>
                <div className="text-center mb-6 bg-[#111] rounded-2xl py-5 px-4">
                  <span className="inline-block bg-green-500 text-white text-sm font-black px-4 py-1.5 rounded-full mb-3">
                    🔥 59% DE DESCONTO
                  </span>
                  <p className="text-gray-400 text-base font-semibold">
                    De <s className="font-black text-gray-300 text-xl">R$ 454,80</s> por apenas
                  </p>
                  <p className="text-gray-300 font-bold text-base mt-1">12x de</p>
                  <div className="flex items-end justify-center gap-1 mt-1">
                    <span className="text-green-400 text-3xl font-black mb-2">R$</span>
                    <span className="text-green-400 text-8xl font-black leading-none">19</span>
                    <span className="text-green-400 text-3xl font-black mb-2">,32</span>
                  </div>
                  <p className="text-gray-300 text-base font-bold mt-2">ou <span className="text-green-400">R$ 187,00</span> à vista</p>
                  <p className="text-gray-500 text-xs mt-1">Pagamento único · acesso de 1 ano</p>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  {[...PLAN_FEATURES, "🔥 Acesso Anual — nunca paga mais nada"].map((f) => (
                    <div key={f} className="flex items-start gap-3 text-gray-300">
                      <Check />
                      <span className="text-base leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://pay.cakto.com.br/pjq4t8x"
                  onClick={() => (window as unknown as { fbq: (...a: unknown[]) => void }).fbq?.('track', 'InitiateCheckout')}
                  className="bounce-slow block w-full text-center bg-green-500 hover:bg-green-400 text-white font-black py-5 rounded-2xl uppercase tracking-wide transition-colors text-base shadow-lg shadow-green-900"
                >
                  🔓 APROVEITAR AGORA — 7 DIAS DE GARANTIA
                </a>
                <p className="text-center text-red-400 text-xs font-bold mt-3">⏳ Oferta por tempo limitado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13. DISPOSITIVOS (grid)
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            Assista em <span className="text-green-500">qualquer dispositivo</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Assista em Smart Tvs, Playstation, Xbox, Celulares, tablet e laptop.{" "}
            <strong className="text-white">Em até 5 telas simultâneas!</strong>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/page-1/jesus-atividade.png",        label: "Atividades Bíblicas" },
              { src: "/page-1/dispositivo.png",            label: "Disponível em qualquer dispositivo" },
              { src: "/page-1/menina-leitura.png",         label: "Histórias para Leitura" },
              { src: "/page-1/desenho-animado-crianca.png",label: "Desenhos Animados" },
            ].map(({ src, label }) => (
              <div key={src} className="bg-[#0d0d0d] border border-gray-700 rounded-2xl overflow-hidden shadow-sm">
                <Image src={src} alt={label} width={400} height={280} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13b. ASSISTA EM QUALQUER DISPOSITIVO
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            ASSISTA EM QUALQUER<br />DISPOSITIVO
          </h2>
          <p className="text-gray-300 font-bold text-lg md:text-xl mb-8">
            Assista em Smart Tvs, Playstation, Xbox, Celulares, tablet e laptop. Em até 5 telas simultâneas!
          </p>
          <Image
            src="/page-1/dispositivo.png"
            alt="Disponível em qualquer dispositivo"
            width={700}
            height={500}
            className="w-full object-contain mx-auto mb-8"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-gray-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-[#222] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.32-2.16 3.93.03 3.13 2.63 4.17 2.67 4.19-.03.07-.42 1.44-1.36 2.5M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="text-left leading-tight text-sm">
                <span className="block text-xs font-normal opacity-80">Disponível na</span>
                App Store
              </span>
            </a>
            <a href="#" className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-gray-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-[#222] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0"><path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.54-2.54-10.57 9.39zm-1.76-21.3C1.16 2.76 1 3.16 1 3.64v16.72c0 .48.16.88.42 1.18l.06.06 9.37-9.37v-.22L1.48 2.4l-.06.06zM20.95 10.6l-2.83-1.63-2.84 2.84 2.84 2.84 2.85-1.65c.81-.47.81-1.93-.02-2.4zm-18.6 10.2 10.57-9.38-2.54-2.54L2.35 16.88l.03 3.92z"/></svg>
              <span className="text-left leading-tight text-sm">
                <span className="block text-xs font-normal opacity-80">DISPONÍVEL NO</span>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          14. COMPARAÇÃO TRADICIONAIS X CRISTÃOS
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-10 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            DIFERENÇA ENTRE DESENHOS TRADICIONAIS{" "}
            <span className="text-red-500">X</span>{" "}
            <span className="text-green-500">CRISTÃOS</span>
          </h2>
          <div className="flex flex-col items-center gap-10 max-w-xl mx-auto">
            <div className="text-center w-full">
              <p className="font-black text-red-500 text-lg mb-4 uppercase">TRADICIONAIS (NÃO RECOMENDADO)</p>
              <Image
                src="/page-1/folha-gospel.png"
                alt="Desenhos tradicionais - não recomendado"
                width={500}
                height={400}
                className="w-full object-contain rounded-2xl shadow-sm"
              />
            </div>
            <div className="text-center w-full">
              <p className="font-black text-green-500 text-lg mb-4 uppercase">CRISTÃOS (RECOMENDADO)</p>
              <Image
                src="/page-1/folha-boa.png"
                alt="Desenhos cristãos - recomendado"
                width={500}
                height={400}
                className="w-full object-contain rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          15. FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            PERGUNTAS <span className="text-green-500">FREQUENTES</span>
          </h2>
          <div className="space-y-3 mb-12">
            <FAQ
              q={`O que é o ${APP}?`}
              a={`O ${APP} é um aplicativo infantil cristão criado para aproximar as crianças de Deus de forma divertida e segura. Nele, seu filho encontra filmes cristãos, desenhos com histórias bíblicas, jogos educativos, atividades interativas e histórias em quadrinhos em um só lugar.`}
            />
            <FAQ
              q={`Para quais idades o ${APP} é voltado?`}
              a="Nossos programas são voltados para crianças de 1 a 15 anos."
            />
            <FAQ
              q="Como será disponibilizado o meu acesso à plataforma?"
              a="Após a confirmação do pagamento, o acesso à plataforma será imediatamente liberado. Você receberá um e-mail contendo o link de acesso para baixar o aplicativo, além de seu login e senha exclusivos."
            />
            <FAQ
              q="Posso baixar vídeos para assistir offline?"
              a="Sim, agora você pode baixar nos dispositivos! Baixe seus episódios favoritos enquanto estiver no WIFI e assista-os em qualquer lugar."
            />
            <FAQ
              q="Como faço para cancelar?"
              a={`O ${APP} é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.`}
            />
            <FAQ
              q="Onde posso assistir?"
              a={`Assista onde quiser, quando quiser. Faça login com sua conta para começar a assistir no computador ou em qualquer aparelho como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar os seus episódios favoritos com iOS, Android ou Windows 10. Use downloads para levar o ${APP} para onde quiser sem precisar de conexão com a Internet.`}
            />
          </div>
          <div className="text-center">
            <a
              href="#oferta"
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all shadow-lg shadow-green-900"
            >
              QUERO EXPERIMENTAR O {APP.toUpperCase()}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          16. CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            Cadastre agora e experimente o{" "}
            <span className="text-green-500">{APP.toUpperCase()}</span>
          </h2>
          <Image
            src="/page-1/caminho-flix.png"
            alt="Cadastre-se agora"
            width={500}
            height={160}
            className="object-contain mx-auto"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          17. FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#111] border-t border-gray-800 py-8 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 font-bold mb-4">Feito Com ❤️ Para Sua Família!</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-gray-600 text-xs mb-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Reembolso</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Contato</a>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {APP}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}
