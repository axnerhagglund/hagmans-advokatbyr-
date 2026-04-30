import Link from "next/link";
import { notFound } from "next/navigation";
import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import { bloggPosts } from "@/data/blogg";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bloggPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = bloggPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} – Hagmans`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <h3 key={i} className="font-display text-2xl mt-8 mb-3">
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    const rendered = para.replace(
      /\*\*([^*]+)\*\*/g,
      '<strong>$1</strong>'
    );
    return (
      <p
        key={i}
        className="text-[#444] leading-relaxed text-lg"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    );
  });
}

export default async function BloggPostPage({ params }: Props) {
  const { slug } = await params;
  const post = bloggPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = bloggPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#888] hover:text-[#c9521a] transition-colors mb-8"
          >
            ← Tillbaka till bloggen
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#c9521a] text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
              {post.category}
            </span>
            <span className="text-sm text-[#888]">
              {post.date} · {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-[#6b6b6b] text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 border-2 border-[#0a0a0a] flex items-center justify-center font-display text-lg bg-[#c9521a] text-white"
            >
              {post.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="font-semibold text-sm">{post.author}</div>
              <div className="text-xs text-[#888]">{post.authorTitle}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── YELLOW TAPE DIVIDER ─── */}
      <div className="h-4 bg-[#ffeb3b] border-b-2 border-[#0a0a0a]" />

      {/* ─── CONTENT ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-5">{renderContent(post.content)}</div>

              <div className="mt-12 bg-[#fafaf8] border-2 border-[#0a0a0a] p-6" style={{ boxShadow: "4px 4px 0 #0a0a0a" }}>
                <h3 className="font-display text-xl mb-3">
                  Har du frågor om {post.category.toLowerCase()}?
                </h3>
                <p className="text-sm text-[#6b6b6b] mb-4">
                  Boka ett kostnadsfritt samtal med en av våra jurister.
                </p>
                <BrutalistButton href="/kontakt">
                  Boka gratis samtal →
                </BrutalistButton>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 self-start space-y-6">
              <div className="border-2 border-[#0a0a0a] p-5" style={{ boxShadow: "4px 4px 0 #0a0a0a" }}>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4">
                  Skriven av
                </h3>
                <div className="flex items-start gap-3">
                  <div
                    className="w-12 h-12 border-2 border-[#0a0a0a] flex items-center justify-center font-display text-lg bg-[#c9521a] text-white flex-shrink-0"
                  >
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{post.author}</div>
                    <div className="text-xs text-[#888]">{post.authorTitle}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <BrutalistButton
                    href="/kontakt"
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Boka tid →
                  </BrutalistButton>
                </div>
              </div>

              <div className="bg-[#ffeb3b] border-2 border-[#0a0a0a] p-5">
                <div className="font-display text-2xl mb-2">
                  Första samtalet är gratis.
                </div>
                <p className="text-sm text-[#444] mb-4">
                  Inga förpliktelser, ingen juridikjargong – bara ett vanligt samtal.
                </p>
                <BrutalistButton href="/kontakt" variant="secondary" size="sm" className="w-full justify-center">
                  Ring oss →
                </BrutalistButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      <section className="py-12 border-t-2 border-[#0a0a0a] bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-8">Fler artiklar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link href={`/blogg/${p.slug}`} key={p.id} className="block">
                <BrutalistCard className="h-full flex flex-col overflow-hidden" hoverable>
                  <div className="h-2 bg-[#c9521a]" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#c9521a] mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-display text-lg leading-tight mb-2 flex-1">
                      {p.title}
                    </h3>
                    <div className="text-xs text-[#888] pt-3 border-t border-gray-100">
                      {p.author} · {p.date}
                    </div>
                  </div>
                </BrutalistCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
