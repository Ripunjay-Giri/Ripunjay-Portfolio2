import { ThemeToggle } from "./ThemeToggle";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Ripunjay Giri</a>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
