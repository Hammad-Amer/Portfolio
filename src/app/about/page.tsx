export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-16">
      {/* About intro */}
      <section className="relative z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none">
          <div className="relative">
            <div className="glow-1" style={{ left: -150, top: -80 }} />
            <div className="glow-3" style={{ left: 100, top: -40 }} />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pt-10 md:px-0 md:pt-20 relative z-10">
          <p className="mb-5 text-left text-xl font-light tracking-widest text-neutral-300">
            {"< Profile />"}
          </p>
          <div className="rounded-lg border border-neutral-700 p-6 md:p-8">
            <p className="text-neutral-300 leading-relaxed text-[15px]">
              Hey, I&apos;m Hammad — a Full-Stack &amp; AI/ML developer who just graduated and somehow convinced machines to be smarter than me. I spend my days building things that either predict the future or break in production at 3 AM. From training neural networks that actually learn (unlike me in 8 AM lectures) to shipping full-stack apps that real humans use, I&apos;ve done the whole circus.
            </p>
            <p className="text-neutral-300 leading-relaxed text-[15px] mt-4">
              I write Python like poetry and JavaScript like a desperate prayer. My code has more layers than my personality — deep learning pun absolutely intended. When I&apos;m not arguing with GPU drivers or questioning my life choices in a 47-tab debugging session, you can find me turning caffeine into production-ready software. I believe every bug is just an undocumented feature, and every deploy is a leap of faith.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm mt-4 italic">
              Currently open to roles where I can break things professionally and get paid for it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
