import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Naman_Katare_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      icon: FiMail,
      href: 'mailto:katare2004@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: FiGithub,
      href: 'https://github.com/27Naman2004',
      label: 'GitHub',
      color: 'hover:text-white'
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/namankatare07/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-noise pointer-events-none">
        <div className="absolute inset-0 bg-gradient-hero opacity-15" />
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float will-change-gpu" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-delayed will-change-gpu" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-success/10 blur-3xl animate-pulse-glow will-change-gpu" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start mb-4"
            >
              <HiLocationMarker className="text-accent mr-2" size={20} />
              <span className="text-muted-foreground">Gwalior, Madhya Pradesh, India</span>
            </motion.div>
 
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Naman</span>
            </motion.h1>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
            >
              <span className="text-accent-gradient">B.Tech Student</span> | 
              <span className="text-gradient"> Aspiring Software Developer</span>
            </motion.div>
 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Computer Science Engineering student passionate about Machine Learning, 
              Data Science, and Web Development. Currently building innovative solutions 
              with modern technologies and contributing to open-source projects.
            </motion.p>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleDownloadResume}
                className="btn-hero flex items-center justify-center gap-2 will-change-gpu"
              >
                <FiDownload size={20} />
                Download Resume
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary flex items-center justify-center gap-2 will-change-gpu"
              >
                Get In Touch
              </a>
            </motion.div>
 
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-card border border-card-border icon-glow transition-colors duration-300 will-change-gpu ${link.color}`}
                  title={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
 
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative will-change-gpu"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-25 animate-pulse-glow will-change-gpu" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card-border shadow-glass-lg">
                <motion.img
                  src={profileImage}
                  alt="Naman Katare"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              {/* Floating particles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/40 blur-sm animate-float will-change-gpu" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary/40 blur-sm animate-float-delayed will-change-gpu" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-success/30 blur-sm animate-pulse-glow will-change-gpu" />
            </motion.div>
          </motion.div>
        </div>
      </div>
 
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 hidden sm:flex"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 font-medium select-none">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center p-1"
        >
          <div className="w-1.5 h-2 rounded-full bg-accent/80 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;