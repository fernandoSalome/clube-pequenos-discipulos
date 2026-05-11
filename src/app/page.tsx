"use client";

import Image from "next/image";
import { useState } from "react";

const CDN = "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures";
const img = (file: string) => `${CDN}/${file}`;

const APP = "Clube dos Pequenos Discípulos";

/* ─── FAQ accordion ─── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-gray-800 hover:bg-gray-100 transition-colors"
      >
        <span>{q}</span>
        <span className="text-green-500 text-2xl ml-4 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-200 bg-white">
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
  "300 Histórias e desenhos biblicos",
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
    <main className="bg-white text-gray-900 overflow-x-hidden font-[Roboto,sans-serif]">

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
          2. ASSINE AGORA (sub-banner)
      ══════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 py-5 px-4 text-center">
        <a href="#oferta" className="inline-block bg-green-500 hover:bg-green-400 text-white font-black text-lg px-8 py-3 rounded-full uppercase tracking-wide transition-all shadow mb-3">
          ASSINE AGORA
        </a>
        <p className="text-gray-600 text-sm">
          Garanta acesso vitalício ao <strong>{APP}</strong> e a todos os produtos extras por{" "}
          <strong>metade do preço</strong>
        </p>
        <a href="#oferta" className="inline-block mt-2 text-green-600 font-bold text-sm underline hover:text-green-500 transition-colors">
          VEJA TUDO QUE VOCÊ VAI RECEBER
        </a>
      </section>

      {/* ══════════════════════════════════════════
          3. HERO
      ══════════════════════════════════════════ */}
      <section className="bg-white pt-10 pb-0 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            SEU FILHO <span className="text-green-500">PRÓXIMO DE DEUS</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-2 max-w-2xl mx-auto">
            Histórias e Filmes Bíblicos, Atividades e jogos inspirados na Palavra de Deus!
          </p>
          <p className="text-gray-700 text-base md:text-lg font-semibold mb-8 max-w-2xl mx-auto">
            A única plataforma de entretenimento <strong>segura</strong> e <strong>edificante</strong> para sua criança
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <Image
              src={img("sbPphD9474894.webp?quality=81")}
              alt={APP}
              width={800}
              height={500}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. PROVA SOCIAL
      ══════════════════════════════════════════ */}
      <section className="bg-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            o aplicativo que já transformou{" "}
            <span className="text-green-500">milhares de famílias</span>
          </h2>
          <p className="text-gray-600 mb-8">
            + de 500 mil seguidores no Instagram e 1,3 milhão de assinantes
          </p>
          <Image
            src={img("xPbgbN3745792.png?quality=74")}
            alt="500k seguidores e 1,3 milhão de inscritos"
            width={700}
            height={320}
            className="w-full object-contain mx-auto"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. VEJA O QUE VOCÊ VAI RECEBER
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            VEJA O QUE VOCÊ VAI RECEBER{" "}
            <span className="text-green-500">NESSA OFERTA ESPECIAL</span>
          </h2>

          {/* Linha 1 — imagem esquerda */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-14">
            <div className="w-full md:w-1/2">
              <Image src={img("wDXwAv4663906.webp?quality=83")} alt="+300 filmes" width={520} height={340} className="w-full rounded-2xl shadow-md object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex items-start gap-3">
              <Check />
              <p className="text-gray-800 text-lg font-semibold leading-snug">
                Plataforma completa com <strong className="text-green-600">+300 filmes e desenhos animados</strong> com histórias bíblicas;
              </p>
            </div>
          </div>

          {/* Linha 2 — imagem direita */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-14">
            <div className="w-full md:w-1/2">
              <Image src={img("uRnJSb4663906.webp?quality=79")} alt="+200 histórias" width={520} height={340} className="w-full rounded-2xl shadow-md object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex items-start gap-3">
              <Check />
              <p className="text-gray-800 text-lg font-semibold leading-snug">
                <strong className="text-green-600">+200 histórias bíblicas ilustradas</strong> para leitura
              </p>
            </div>
          </div>

          {/* Linha 3 — imagem esquerda */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-14">
            <div className="w-full md:w-1/2">
              <Image src={img("EjxEcn4663906.webp?quality=78")} alt="Jogos didáticos" width={520} height={340} className="w-full rounded-2xl shadow-md object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex items-start gap-3">
              <Check />
              <p className="text-gray-800 text-lg font-semibold leading-snug">
                Aplicativo com <strong className="text-green-600">Jogos didáticos</strong>
              </p>
            </div>
          </div>

          {/* Linha 4 — imagem direita */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-14">
            <div className="w-full md:w-1/2">
              <Image src={img("kblbYQ4663906.webp?quality=71")} alt="Missão e episódios" width={520} height={340} className="w-full rounded-2xl shadow-md object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-start gap-3">
                <Check />
                <p className="text-gray-800 text-lg font-semibold leading-snug">
                  Faça parte da missão de <strong className="text-green-600">reformar o Brasil</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check />
                <p className="text-gray-800 text-lg font-semibold leading-snug">
                  <strong className="text-green-600">Episódios novos todos os dias</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Linha 5 e 6 — grid 2 colunas */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center gap-4">
              <Image src={img("QIhgmp4663906.webp?quality=90")} alt="Conteúdo extra" width={520} height={340} className="w-full rounded-2xl shadow-md object-cover" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image src={img("PjChyI4663906.webp?quality=81")} alt="Conteúdo extra" width={520} height={340} className="w-full rounded-2xl shadow-md object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BÔNUS ESPECIAIS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            BÔNUS ESPECIAIS
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-12 max-w-2xl mx-auto">
            ADQUIRINDO NESSA <strong>OFERTA ESPECIAL</strong>, VOCÊ RECEBERÁ TODOS ESSES BÔNUS{" "}
            <strong className="text-green-500">GRATUITAMENTE ⬇️</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bônus 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <Image src={img("DQdRhl7526117.webp?quality=78")} alt="Atividades e Jogos Bíblicos" width={600} height={380} className="w-full object-cover" />
              <div className="p-5">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 1</span>
                <h3 className="font-black text-gray-900 text-lg mb-1">ATIVIDADES E JOGOS BÍBLICOS</h3>
                <p className="text-gray-600 text-sm">Mais de 1.500 atividades e jogos bíblicos para educação infantil</p>
              </div>
            </div>

            {/* Bônus 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <Image src={img("yHMWjK7538741.webp?quality=84")} alt="Quizzes Bíblicos" width={600} height={380} className="w-full object-cover" />
              <div className="p-5">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 2</span>
                <h3 className="font-black text-gray-900 text-lg mb-1">Quizzes Bíblicos</h3>
                <p className="text-gray-600 text-sm">Quizzes interativos sobre histórias da Bíblia para testar e reforçar o aprendizado</p>
              </div>
            </div>

            {/* Bônus 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <Image src={img("metiru7549951.webp?quality=86")} alt="Grupo VIP" width={600} height={380} className="w-full object-cover" />
              <div className="p-5">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 3</span>
                <h3 className="font-black text-gray-900 text-lg mb-1">GRUPO VIP</h3>
                <p className="text-gray-600 text-sm">História bíblica nova todos os dias em seu Whatsapp</p>
              </div>
            </div>

            {/* Bônus 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <Image src={img("QIhgmp4663906.webp?quality=90")} alt="Músicas Bíblicas Infantis" width={600} height={380} className="w-full object-cover" />
              <div className="p-5">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full mb-2">BÔNUS 4</span>
                <h3 className="font-black text-gray-900 text-lg mb-1">MÚSICAS BÍBLICAS INFANTIS</h3>
                <p className="text-gray-600 text-sm">Ajudam os pequenos a aprender sobre Deus enquanto se diverte e memoriza com facilidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. E TEM MAIS...
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            E TEM MAIS...
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Nesta Oferta Especial você vai receber todos os produtos extras que vendemos separadamente,{" "}
            <strong className="text-green-500">totalmente grátis!</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Mapas Mentais */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm text-center">
              <Image src={img("qexhuK7780024.png?quality=86")} alt="Mapas mentais infantis" width={400} height={300} className="w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-gray-900 mb-2">Mapas mentais infantis</h3>
                <p className="text-gray-600 text-sm">Aprender sobre a Bíblia fica muito mais divertido e fácil com esses mapas mentais coloridos e ilustrados!</p>
              </div>
            </div>

            {/* Colorindo */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm text-center">
              <Image src={img("qSybXW8168388.webp?quality=86")} alt="Colorindo com Jesus" width={400} height={300} className="w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-gray-900 mb-1">Colorindo com Jesus</h3>
                <p className="text-green-600 text-xs font-bold mb-1">Estilo Bobbie Goods</p>
                <p className="text-gray-600 text-sm">São mais de 100 paginas incríveis para colorir com muito amor e fé</p>
              </div>
            </div>

            {/* Devocionais */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm text-center">
              <Image src={img("DMdmlL8281663.webp?quality=73")} alt="Devocionais Infantis" width={400} height={300} className="w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-gray-900 mb-2">DEVOCIONAIS INFANTIS</h3>
                <p className="text-gray-600 text-sm">Ensinam valores cristãos e ajudam as crianças a se conectarem com Deus desde cedo</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#oferta"
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all shadow-lg shadow-green-200"
            >
              QUERO APROVEITAR A OFERTA ESPECIAL
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. DEPOIMENTOS (vídeos)
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            QUEM ADQUIRIU AMOU!{" "}
            <span className="text-green-500">VEJA OS DEPOIMENTOS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Depoimento 1", "Depoimento 2", "Depoimento 3"].map((label) => (
              <div key={label} className="bg-gray-100 rounded-2xl overflow-hidden aspect-[9/16] flex items-center justify-center border border-gray-200">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. NÃO É SÓ DESENHOS
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            O <span className="text-green-500">{APP.toUpperCase()}</span> NÃO SE TRATA{" "}
            <em>&quot;APENAS DE DESENHOS&quot;</em>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            E sim uma plataforma intuitiva que irá cuidar por completo da educação da sua criança da melhor maneira possível!{" "}
            <strong>Desenvolvida por profissionais da área, Pedagogos e Psicólogos Cristãos!</strong>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. COMO RECEBER O ACESSO
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            COMO RECEBEREI ACESSO AO{" "}
            <span className="text-green-500">APLICATIVO</span>
          </h2>
          <p className="text-gray-600 mb-10">
            Após a assinatura você irá receber em seu e-mail o login para acessar a plataforma exclusiva diretamento no seu dispositivo...
          </p>
          <Image
            src={img("jffYgL5564137.webp?quality=81")}
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
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white border-2 border-green-200 rounded-3xl p-8 shadow-sm text-center md:text-left">
            <Image
              src={img("PYibNH5698813.webp?quality=83")}
              alt="Garantia 7 dias"
              width={180}
              height={180}
              className="flex-shrink-0 object-contain"
            />
            <p className="text-gray-700 leading-relaxed">
              A única maneira de você saber se a plataforma é para você ou não é estando por dentro.
              E para tornar essa decisão ainda mais fácil, te damos total liberdade para juntar-se a nós e caso você não aprove,
              nós te devolveremos seu dinheiro!{" "}
              <strong className="text-green-600">Você tem 7 dias de garantia.</strong>{" "}
              Basta solicitar que fazemos o estorno sem lhe perguntar nada. Cancelamento rápido e fácil.
              Você não tem o que perder, não é mesmo?
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12. PLANOS DE ASSINATURA
      ══════════════════════════════════════════ */}
      <section id="oferta" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* ── Mensal ── */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col">
              <h3 className="text-2xl font-black text-center text-gray-900 uppercase mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                PLANO MENSAL
              </h3>
              <div className="text-center mb-8">
                <p className="text-gray-500 text-sm">
                  De <s className="font-bold">R$ 79,90</s> por apenas
                </p>
                <div className="flex items-end justify-center gap-1 mt-1">
                  <span className="text-gray-800 text-2xl font-black mb-1">R$</span>
                  <span className="text-gray-800 text-7xl font-black leading-none">39</span>
                  <span className="text-gray-800 text-2xl font-black mb-1">,90</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Cancele quando quiser</p>
              </div>
              <div className="space-y-2.5 mb-8 flex-1">
                {PLAN_FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                    <Check />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-black py-4 rounded-2xl uppercase tracking-wide transition-colors text-sm"
              >
                ASSINAR O APP (7 DIAS DE GARANTIA)
              </a>
              <p className="text-center text-red-500 text-xs font-bold mt-3">Oferta válida até 09/05/2026</p>
            </div>

            {/* ── Vitalício ── */}
            <div className="relative bg-white border-2 border-green-400 rounded-3xl p-8 shadow-lg flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-black px-5 py-2 rounded-full uppercase whitespace-nowrap shadow">
                ⭐ Mais Popular
              </div>
              <h3 className="text-2xl font-black text-center text-gray-900 uppercase mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                PLANO VITALÍCIO
              </h3>
              <div className="flex justify-center mb-4">
                <Image
                  src={img("diJDri8014590.webp?quality=75")}
                  alt="Acesso vitalício"
                  width={220}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="text-center mb-8">
                <p className="text-gray-500 text-sm">
                  De <s className="font-bold">R$ 337,00</s> por apenas
                </p>
                <p className="text-gray-700 font-bold text-base mt-1">12x de</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-green-500 text-2xl font-black mb-1">R$</span>
                  <span className="text-green-500 text-7xl font-black leading-none">23</span>
                  <span className="text-green-500 text-2xl font-black mb-1">,34</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Pagamento único e acesso para sempre</p>
              </div>
              <div className="space-y-2.5 mb-8 flex-1">
                {[...PLAN_FEATURES, "🔥 Acesso Vitalício"].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                    <Check />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="block w-full text-center bg-green-500 hover:bg-green-400 text-white font-black py-4 rounded-2xl uppercase tracking-wide transition-colors text-sm shadow-lg shadow-green-100"
              >
                APROVEITAR AGORA (7 dias de garantia)
              </a>
              <p className="text-center text-red-500 text-xs font-bold mt-3">Oferta válida até 09/05/2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13. DISPOSITIVOS
      ══════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            Assista em <span className="text-green-500">qualquer dispositivo</span>
          </h2>
          <p className="text-gray-600 mb-10">
            Assista em Smart Tvs, Playstation, Xbox, Celulares, tablet e laptop.{" "}
            <strong>Em até 5 telas simultâneas!</strong>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { file: "nokLxo7958643.webp?quality=80", label: "Smart TV" },
              { file: "QYWFIu7958644.webp?quality=75", label: "PlayStation" },
              { file: "gbmzXE7958644.webp?quality=88", label: "Xbox" },
              { file: "kouwQH7958644.webp?quality=75", label: "Celular" },
              { file: "JeItzA7958644.webp?quality=76", label: "Tablet" },
              { file: "WAidlS7958644.webp?quality=75", label: "Laptop" },
            ].map(({ file, label }) => (
              <div key={file} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={img(file)}
                  alt={label}
                  width={400}
                  height={280}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          14. COMPARAÇÃO TRADICIONAIS X CRISTÃOS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-10 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            DIFERENÇA ENTRE DESENHOS TRADICIONAIS{" "}
            <span className="text-red-500">X</span>{" "}
            <span className="text-green-500">CRISTÃOS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="font-black text-red-500 text-lg mb-4 uppercase">TRADICIONAIS (NÃO RECOMENDADO)</p>
              <Image
                src={img("xzGkiY1701237.webp?quality=74")}
                alt="Desenhos tradicionais - não recomendado"
                width={500}
                height={400}
                className="w-full object-contain rounded-2xl shadow-sm"
              />
            </div>
            <div className="text-center">
              <p className="font-black text-green-500 text-lg mb-4 uppercase">CRISTÃOS (RECOMENDADO)</p>
              <Image
                src={img("NWqDkR1783179.webp?quality=73")}
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
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
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
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all shadow-lg shadow-green-100"
            >
              QUERO EXPERIMENTAR O {APP.toUpperCase()}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          16. CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            Cadastre agora e experimente o{" "}
            <span className="text-green-500">{APP.toUpperCase()}</span>
          </h2>
          <Image
            src={img("xYoJdj5170164.png?quality=88")}
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
      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 font-bold mb-4">Feito Com ❤️ Para Sua Família!</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-gray-400 text-xs mb-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Política de Reembolso</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Contato</a>
          </div>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} {APP}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}
