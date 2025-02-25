import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent dark:from-primary/5" />

      {/* Animated shapes */}
      <motion.div 
        className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Ripunjay Giri
            </span>
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Prompt Engineer | BCA Student | Tech Explorer
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I am a BCA student with a passion for technology, prompt engineering, and creativity. 
            I love exploring new things and always strive to improve myself.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#contact"
              className="bg-gradient-to-r from-primary to-purple-600 text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Get in Touch
            </a>
            <a 
              href="#projects"
              className="border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}