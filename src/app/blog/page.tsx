import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

import { File } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-semibold text-5xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 cursor-pointer mb-4 w-full border-border border hover:bg-foreground/5 px-4 py-3 rounded-lg transition-colors"
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-row gap-4">
                <File />

                <div className="w-full flex flex-col">
                  <p className="tracking-tight font-medium">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
