import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "The Blog — Notes from the Water",
  description:
    "Sailing quotes, docking tips for new sailors, and notes from the Patriot Sailing crew on Lake Erie.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    cat: "Docking tips",
    title: "Docking tips for new sailors",
    body: "The only way to get good at docking is to practice, practice, practice. It's the part that makes new sailors nervous — so we drill it, calmly and often, until coming alongside feels routine.",
  },
  {
    cat: "Quote of the week",
    title: "Adjust the sails",
    body: "“The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.” — William Arthur Ward.",
  },
  {
    cat: "Quote of the week",
    title: "Slowly going nowhere",
    body: "“Sailing: the fine art of slowly going nowhere at great expense — cold, wet, and perfectly content.” A favorite around the dock.",
  },
  {
    cat: "Gifts",
    title: "A gift that isn't a thing",
    body: "Looking for a present that won't gather dust? A certificate for a lesson or a private sail is a memorable birthday or holiday gift — with no date to lock in.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the water."
        intro="Quotes, docking tips, and the occasional story from out on Lake Erie."
      />

      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell max-w-3xl">
          <div className="border-b border-line">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="border-t border-line py-10">
                  <p className="eyebrow text-accent">{p.cat}</p>
                  <h2 className="t-head mt-4 font-medium">{p.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-fg/75">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
