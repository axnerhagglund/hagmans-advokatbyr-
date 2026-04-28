import Link from "next/link";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { bloggPosts } from "@/data/blogg";

const categories = Array.from(new Set(bloggPosts.map((p) => p.category)));

export default function BloggPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-16 md:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
            Blogg & nyheter
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Juridik på{" "}
            <mark className="bg-[#ffeb3b] px-1">mänskliga</mark>
            <br />
            villkor.
          </h1>
          <p className="text-[#6b6b6b] text-xl max-w-2xl leading-relaxed">
            Artiklar och guider om familjerätt som du faktiskt förstår. Skrivna
            av jurister som kan förklara utan att krångla till det.
          </p>
        </div>
      </section>

      {/* ─── FEATURED ─── */}
      <section className="py-12 border-b-2 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <Link href={`/blogg/${bloggPosts[0].slug}`} className="block">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 border-2 border-[#0a0a0a] hover:shadow-[6px_6px_0_#0a0a0a] transition-all"
              style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
            >
              <div
                className="h-64 lg:h-auto bg-[#ffeb3b] border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a] flex items-center justify-center p-10"
              >
                <div className="font-display text-8xl text-[#0a0a0a]/20">
                  {bloggPosts[0].category.charAt(0)}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#ff5722] text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
                    Senaste
                  </span>
                  <span className="text-xs font-bold text-[#ff5722] uppercase tracking-widest">
                    {bloggPosts[0].category}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                  {bloggPosts[0].title}
                </h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-6">
                  {bloggPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-semibold">{bloggPosts[0].author}</span>
                    <span className="text-[#888]"> — {bloggPosts[0].authorTitle}</span>
                  </div>
                  <span className="text-[#888]">
                    {bloggPosts[0].date} · {bloggPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── ALL POSTS ─── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="Alla artiklar" title="Fler guider och råd" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bloggPosts.slice(1).map((post) => (
              <Link href={`/blogg/${post.slug}`} key={post.id} className="block">
                <BrutalistCard className="h-full flex flex-col overflow-hidden" hoverable>
                  <div className="h-2 bg-[#ff5722]" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
                        {post.category}
                      </span>
                      <span className="text-[#ddd]">·</span>
                      <span className="text-xs text-[#888]">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl leading-tight mb-3 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#888] pt-4 border-t border-gray-100">
                      <span className="font-semibold text-[#0a0a0a]">
                        {post.author}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </BrutalistCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="py-16 bg-[#0a0a0a] border-t-2 border-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-4">
            Få nya artiklar direkt.
          </h2>
          <p className="text-[#888] mb-8">
            Inga reklammejl. Bara juridiska tips när vi skriver något värt att läsa.
          </p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="din@mejl.se"
              className="flex-1 border-2 border-[#0a0a0a] border-r-0 px-4 py-3 text-sm bg-white focus:outline-none"
              readOnly
            />
            <button className="px-6 py-3 bg-[#ff5722] text-white text-sm font-bold border-2 border-[#0a0a0a] hover:bg-[#e64a19] transition-colors">
              Prenumerera
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
