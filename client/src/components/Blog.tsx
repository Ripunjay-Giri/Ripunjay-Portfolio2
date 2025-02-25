import { motion } from "framer-motion";
import { blogPosts } from "../data/blog";

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg border p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-primary hover:underline"
              >
                Read More →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
