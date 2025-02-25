import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col gap-6">
            <a
              href="mailto:ripunjaygiri2004@gmail.com"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:border-primary transition-colors"
            >
              <FiMail className="w-6 h-6" />
              <span>ripunjaygiri2004@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/Ripunjay-Giri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:border-primary transition-colors"
            >
              <FiGithub className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/ripunjay-giri-2b8064285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:border-primary transition-colors"
            >
              <FiLinkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
