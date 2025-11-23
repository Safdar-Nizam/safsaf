import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Subtle warm background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{ filter: 'blur(1px)' }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 glass-strong border-b border-primary/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center font-display font-bold text-lg text-primary-foreground warm-shadow group-hover:scale-105 transition-all duration-300">
                SN
              </div>
              <span className="hidden sm:block font-display font-semibold text-xl text-foreground">
                Safdar Nizam
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-3/4"
                  activeClassName="text-primary after:w-3/4"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/40 transition-colors text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-2 overflow-hidden"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                      activeClassName="text-primary bg-muted/60 border-l-2 border-primary"
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};
