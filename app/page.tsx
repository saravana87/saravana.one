import React from "react";

// Minimal-Pro, single-file React component you can drop into Next.js/App Router
// TailwindCSS required. Replace placeholders as noted.

const LINKS = {
  calendly: "https://calendly.com/techiesarava/30min",
  linkedin: "https://www.linkedin.com/in/saravanakumar-subramani-8bb38854/",
  github: "https://github.com/saravana87",
  // Use YouTube embed URLs for iframe src (more reliable for embedding)
  yt1: "https://www.youtube.com/embed/DKGa9V6M9Vg?list=PLR96MtlaP8iIQXOVbvgA1KApj4LHDWpl0",
  yt2: "https://www.youtube.com/embed/Kti61_g6GFM?list=PLR96MtlaP8iK1QmzUCvmdDwLsTqoX7Zea",
};

export default function SaravanaPortfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-100">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white font-bold">S</span>
            <span>Saravana</span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a href="#about" className="hover:text-red-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-red-600 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-red-600 transition">Projects</a></li>
            <li><a href="#case" className="hover:text-red-600 transition">Case Study</a></li>
            <li><a href="#content" className="hover:text-red-600 transition">Content</a></li>
            <li><a href="#contact" className="hover:text-red-600 transition">Contact</a></li>
          </ul>
          <a
            href={LINKS.calendly}
            target="_blank"
            className="ml-4 inline-flex items-center gap-2 rounded-xl border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white transition"
          >
            Book a Call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-20">
        <div className="">
          <p className="text-xs tracking-widest uppercase text-slate-500">AI Engineer & Full-Stack Developer</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            I build <span className="text-red-600">advanced query systems</span> &
            <br className="hidden md:block" /> LLM pipelines that ship to production—fast.
          </h1>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• 14+ years in IT • 4+ years AI/Vector DB (pgvector, Redis, Pinecone)</li>
            <li>• AWS Solutions Architect • Snowflake Core Pro</li>
            <li>• Full‑stack: FastAPI, Streamlit, Next.js, WordPress</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={LINKS.calendly} target="_blank" className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 transition">Book a Call</a>
            <a href="#projects" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-slate-400 transition">View Projects</a>
            <a href={LINKS.linkedin} target="_blank" className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-3 font-medium hover:border-slate-400">LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-3 font-medium hover:border-slate-400">GitHub</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <span>Works with</span>
            <div className="flex flex-wrap gap-2">
              {['AWS','Azure AI','OpenAI','LlamaIndex','PostgreSQL/pgvector','Redis'].map(x=> (
                <span key={x} className="rounded-full border border-slate-200 px-3 py-1">{x}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Replace src with your photo URL when deploying */}
          <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-red-50 to-white rounded-[2rem]" />
          <img
            src="https://placehold.co/720x900/png"
            alt="Saravanakumar Subramani portrait"
            className="w-full h-auto rounded-[2rem] shadow-xl object-cover"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 py-20 items-center">
          <div className="">
            <h2 className="text-3xl md:text-4xl font-extrabold">About</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m an AI application engineer, not a data scientist. I design and deliver
              <span className="font-semibold"> advanced query systems</span>,
              <span className="font-semibold"> LLM pipelines</span>, and robust APIs with a focus on
              retrieval quality, observability, and performance. No model fine‑tuning services here—
              I specialize in application engineering and production delivery.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• 14 years overall • 4 years AI & vector DB</li>
              <li>• Certifications: AWS SAA, Developer, CCP • Snowflake Core Pro</li>
              <li>• Stack: LlamaIndex, FastAPI, Streamlit, PostgreSQL/pgvector, Redis, Next.js</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={LINKS.linkedin} target="_blank" className="rounded-xl border border-slate-300 px-4 py-2 font-semibold hover:border-slate-400">LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="rounded-xl border border-slate-300 px-4 py-2 font-semibold hover:border-slate-400">GitHub</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-slate-500">Core Focus</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• RAG on pgvector/Redis</li>
                <li>• Hybrid retrieval & filters</li>
                <li>• Prompt & tool orchestration</li>
                <li>• Caching & evals</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-slate-500">Delivery</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• FastAPI microservices</li>
                <li>• Streamlit prototypes → prod</li>
                <li>• Docker & CI/CD</li>
                <li>• Cloudflare, AWS/Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Services</h2>
        <p className="mt-3 text-slate-600">Outcome‑focused engineering. No buzzwords, just shipped systems.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Advanced Query Systems (RAG)",
              bullets: ["LlamaIndex on pgvector/Redis", "Hybrid retrieval, metadata filters"],
            },
            {
              title: "LLM Pipelines",
              bullets: ["Prompts, tools, guardrails", "Evals, caching, observability"],
            },
            {
              title: "APIs & Microservices",
              bullets: ["FastAPI, Streamlit", "Docker, CI/CD"],
            },
            {
              title: "Cloud & WordPress",
              bullets: ["AWS/Azure, Cloudflare, Hetzner", "Perf & cost tuning"],
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {card.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-500 flex flex-wrap gap-2">
          {["LlamaIndex","FastAPI","PostgreSQL/pgvector","Redis","Bedrock/OpenAI","Azure AI","Next.js"].map((x)=> (
            <span key={x} className="rounded-full border border-slate-200 px-3 py-1">{x}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">Featured Projects</h2>
          <div className="mt-10 space-y-10">
            {/* DealCloser Assist */}
            <article className="grid md:grid-cols-2 gap-8 items-center">
              <img src="/images/dealcloser.png" alt="DealCloser Assist placeholder" className="rounded-2xl shadow-lg border border-slate-200" />
              <div>
                <h3 className="text-2xl font-bold">DealCloser Assist</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Live cues for reps during calls; fewer context switches.</li>
                  <li>• <span className="text-slate-500">Metrics:</span> coming soon.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {["Next.js","FastAPI","LlamaIndex","OpenAI","pgvector"].map((x)=> (
                    <span key={x} className="rounded-full border border-slate-200 px-3 py-1">{x}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="https://github.com/saravana87/DealCloser-Assist" target="_blank" className="rounded-xl bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700">Code</a>
                </div>
              </div>
            </article>

            {/* Clinical Summarization */}
            <article className="grid md:grid-cols-2 gap-8 items-center">
              <img src="images/clinical_summarization.png" alt="Clinical Summarization placeholder" className="rounded-2xl shadow-lg border border-slate-200" />
              <div>
                <h3 className="text-2xl font-bold">Clinical Summarization (POC)</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Notes → structured summaries; faster clinical review.</li>
                  <li>• <span className="text-slate-500">Metrics:</span> coming soon.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {["Python","BiomedBERT","Streamlit","PostgreSQL"].map((x)=> (
                    <span key={x} className="rounded-full border border-slate-200 px-3 py-1">{x}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="https://github.com/saravana87/AI_ClinicalSummarization" target="_blank" className="rounded-xl bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700">Code</a>
                </div>
              </div>
            </article>

            {/* Appeal Letter Automation */}
            <article className="grid md:grid-cols-2 gap-8 items-center">
              <img src="images/appealletter_1.png" alt="Appeal Letter Automation placeholder" className="rounded-2xl shadow-lg border border-slate-200" />
              <div>
                <h3 className="text-2xl font-bold">Appeal Letter Automation</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Drafts consistent medical appeal letters from docs/images.</li>
                  <li>• <span className="text-slate-500">Metrics:</span> coming soon.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {["AWS Comprehend Medical","Bedrock","OpenAI","S3","Lambda"].map((x)=> (
                    <span key={x} className="rounded-full border border-slate-200 px-3 py-1">{x}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Deep Case Study */}
      <section id="case" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Deep Case Study — Clinical Summarization</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li><span className="font-semibold">Problem:</span> Manual review of unstructured clinical notes is slow.</li>
              <li><span className="font-semibold">Approach:</span> Extraction + rules → standardized summaries; human‑in‑the‑loop.</li>
              <li><span className="font-semibold">Stack:</span> Python, BiomedBERT, Streamlit, PostgreSQL.</li>
              <li><span className="font-semibold">Result:</span> Review time ↓, edits ↓, consistency ↑ (validating).</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-sm text-slate-600">Planned metrics (to instrument):</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Avg. review time per case</li>
              <li>• Extraction coverage (% fields filled)</li>
              <li>• Manual edits per summary</li>
              <li>• Clinician agreement rate (spot‑checks)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content / YouTube */}
      <section id="content" className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">Content</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                className="w-full h-full"
                src={LINKS.yt1}
                title="Saravana YouTube video 1"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                className="w-full h-full"
                src={LINKS.yt2}
                title="Saravana YouTube video 2"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Let’s Chat</h2>
            <p className="mt-3 text-slate-700">Book time or drop a message. I respond quickly.</p>
            <div className="mt-6 flex gap-3">
              <a href={LINKS.linkedin} target="_blank" className="rounded-xl border border-slate-300 px-4 py-2 font-semibold hover:border-slate-400">LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="rounded-xl border border-slate-300 px-4 py-2 font-semibold hover:border-slate-400">GitHub</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <iframe
              title="Calendly"
              src="https://calendly.com/techiesarava/30min?hide_gdpr_banner=1"
              className="w-full h-[560px]"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Saravanakumar Subramani — saravana.one
      </footer>
    </div>
  );
}
