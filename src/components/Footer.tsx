import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/27Naman2004',
      label: 'GitHub',
      color: 'hover:text-white' 
    },
    { 
      icon: FiLinkedin, 
      href: 'https://linkedin.com/in/naman-katare-916214300',
      label: 'LinkedIn',
      color: 'hover:text-blue-400' 
    },
    { 
      icon: FiMail, 
      href: 'mailto:katare2004@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400' 
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding Stats', href: '#coding-profiles' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-background to-background-secondary" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float will-change-gpu pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-float-delayed will-change-gpu pointer-events-none" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 will-change-gpu"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-4">Naman Katare</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  B.Tech Computer Science Engineering student passionate about Machine Learning, 
                  Data Science, and Full-Stack Development. Building innovative solutions and 
                  contributing to the tech community.
                </p>
              </div>
              
              {/* Social Links - Optimized static list */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-card border border-card-border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} icon-glow select-none`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="will-change-gpu"
            >
              <h4 className="text-lg font-semibold mb-6 text-gradient">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-200 cursor-pointer block text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="will-change-gpu"
            >
              <h4 className="text-lg font-semibold mb-6 text-gradient">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:katare2004@gmail.com"
                    className="text-accent hover:text-accent-glow transition-colors duration-300 font-medium"
                  >
                    katare2004@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground text-sm font-medium">Gwalior, MP, India</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2" />
                    <span className="text-success text-sm font-semibold uppercase tracking-wider">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0 will-change-gpu"
            >
              <div className="flex items-center text-sm text-muted-foreground">
                <span>© {currentYear} Naman Katare. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="mx-1"
                >
                  <FiHeart className="text-red-400 fill-red-400" size={14} />
                </motion.div>
                <span>using React & Tailwind CSS</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Built with modern technologies</span>
                
                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-full bg-gradient-primary text-primary-foreground transition-all duration-300 hover:shadow-glow-primary will-change-gpu"
                  aria-label="Scroll to top"
                >
                  <FiArrowUp size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;