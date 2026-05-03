export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          A/B Test AI Prompts with{" "}
          <span className="text-[#58a6ff]">Performance Metrics</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Compare prompt variants side-by-side across multiple LLM providers. Get automated quality scores, latency benchmarks, and cost analysis — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Testing Prompts — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            ["10x", "Faster iteration"],
            ["GPT-4 + Claude", "Multi-provider"],
            ["Real-time", "Cost tracking"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{stat}</div>
              <div className="text-[#8b949e] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited A/B test campaigns",
              "GPT-4, Claude, Gemini support",
              "Automated quality scoring",
              "Cost & latency analytics",
              "Export results as CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Which LLM providers are supported?",
              "PromptAB supports OpenAI (GPT-3.5, GPT-4), Anthropic Claude, and Google Gemini. You bring your own API keys — we never store them."
            ],
            [
              "How does automated quality scoring work?",
              "Each response is evaluated on relevance, coherence, and task completion using a lightweight scoring model. You can also define custom rubrics for your specific use case."
            ],
            [
              "Can I export my test results?",
              "Yes. All test campaigns and metrics can be exported as CSV for further analysis in your own tools like Excel, Notion, or a BI dashboard."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} PromptAB. All rights reserved.
      </footer>
    </main>
  )
}
