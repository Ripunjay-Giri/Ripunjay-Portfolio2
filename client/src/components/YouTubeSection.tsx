import { motion } from "framer-motion";
import { FiYoutube } from "react-icons/fi";

export function YouTubeSection() {
  const channels = [
    {
      name: "Ripunjay Giri",
      url: "https://www.youtube.com/@ripunjaygiri"
    },
    {
      name: "Tech with Jay",
      url: "https://www.youtube.com/@techwithjay1976"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My YouTube Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-card rounded-lg border hover:border-primary transition-colors"
            >
              <FiYoutube className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="font-semibold">{channel.name}</h3>
                <p className="text-sm text-muted-foreground">Subscribe Now</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
