import { siteContent } from "@/data/siteContent";

export default function AboutSection() {
  const { about } = siteContent;
  return (
    <section id="about" className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            {about.kicker}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-[#1E2A3A] sm:text-3xl">
            {about.h2}
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[#1E2A3A]/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
