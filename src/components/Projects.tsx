import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiDownload, FiPackage, FiX, FiInfo } from 'react-icons/fi';
import { SiPython, SiStreamlit, SiFlask, SiScikitlearn, SiPandas, SiReact, SiPypi, SiSpringboot, SiPostgresql, SiDocker, SiTypescript } from 'react-icons/si';
import yourHealthyHeartImg from '@/assets/yourhealthyheart-project.png';
import cinematchImg from '@/assets/cinematch-project.png';
import pollutionExplorerImg from '@/assets/pollution-explorer-project.png';
import splitwiseImg from '@/assets/splitwise-project.png';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: { name: string; icon: React.ComponentType<{ className?: string; size?: number }>; color: string }[];
  github: string;
  demo: string;
  image: string;
  category: string;
  date: string;
  isPyPiPackage?: boolean;
  installCommand?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Splitwise Auditor - Expense & Anomaly Engine',
      description: 'A full-stack roommate expense management system featuring strategy pattern splits and a database-backed dynamic exchange rate calculator.',
      longDescription: 'Developed a robust platform with a min-max greedy debt simplification algorithm to settle accounts in minimal transactions, custom dark glassmorphic UI, JWT auth, and an intelligent CSV data auditor identifying 10 anomaly types.',
      tech: [
        { name: 'React', icon: SiReact, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { name: 'Docker', icon: SiDocker, color: 'text-cyan-500' }
      ],
      github: 'https://github.com/27Naman2004/splitwise',
      demo: 'https://splitwise-swart-omega.vercel.app/',
      image: splitwiseImg,
      category: 'Full-stack Development',
      date: 'July 2026'
    },
    {
      title: 'YourHealthyHeart - Heart Disease Prediction',
      description: 'A Streamlit web application utilizing machine learning to predict heart disease risk with live accuracy comparisons between Logistic Regression and Decision Tree models.',
      longDescription: 'Developed comprehensive ML web app featuring data visualizations (heatmaps, charts), user-friendly interface for instant risk predictions, personalized health tips, and educational data insights.',
      tech: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-400' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
        { name: 'Pandas', icon: SiPandas, color: 'text-blue-300' }
      ],
      github: 'https://github.com/27Naman2004/heart-disease-prediction',
      demo: '#',
      image: yourHealthyHeartImg,
      category: 'Machine Learning',
      date: 'July 2025'
    },
    {
      title: 'AI Movie Recommendation System',
      description: 'An AI-powered content-based movie recommendation engine using TF-IDF vectorization and cosine similarity with a responsive Flask frontend.',
      longDescription: 'Built full-stack application with autocomplete search, interactive movie cards, and optimized data processing pipeline reducing computation time by 40%.',
      tech: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'Flask', icon: SiFlask, color: 'text-gray-300' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' }
      ],
      github: 'https://github.com/27Naman2004/movie-recommendation',
      demo: '#',
      image: cinematchImg,
      category: 'Web Development',
      date: 'September 2025'
    },
    {
      title: 'Pollution Insight Dashboard',
      description: 'Interactive Streamlit dashboard for visualizing and analyzing air pollution data across multiple cities with comprehensive analytics.',
      longDescription: 'Features trend analysis, pollutant comparisons, outlier detection, custom data exploration, and multiple visualization types (histograms, scatter plots, heatmaps, pie charts).',
      tech: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-400' },
        { name: 'Pandas', icon: SiPandas, color: 'text-blue-300' }
      ],
      github: 'https://github.com/27Naman2004/pollution-dashboard',
      demo: '#',
      image: pollutionExplorerImg,
      category: 'Data Science',
      date: 'June 2025'
    },
    {
      title: 'GitFind Py Library',
      description: 'A Python CLI library for searching and discovering GitHub repositories with advanced filtering and sorting capabilities.',
      longDescription: 'Command-line tool that simplifies GitHub repository discovery with intelligent search algorithms, customizable filters, and easy installation via pip.',
      tech: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'PyPI', icon: SiPypi, color: 'text-blue-400' },
        { name: 'CLI', icon: FiPackage, color: 'text-green-400' },
        { name: 'File Managment', icon: FiPackage, color: 'text-orange-400' }
      ],
      github: 'https://github.com/27Naman2004/gitfind',
      demo: '#',
      image: 'gradient-primary',
      category: 'CLI Tool',
      date: 'September 2025',
      isPyPiPackage: true,
      installCommand: 'pip install gitfind'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden contain-section">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float will-change-gpu pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float-delayed will-change-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my recent work and contributions to innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setActiveProject(project)}
              className="group card-glass p-6 relative overflow-hidden will-change-gpu cursor-pointer hover:scale-[1.02] hover:border-accent/40 hover:shadow-glow-accent transition-all duration-300"
            >
              {/* Project Image/Gradient */}
              <div className="h-48 rounded-xl mb-6 relative overflow-hidden bg-gradient-primary flex items-center justify-center shadow-inner">
                {typeof project.image === 'string' && project.image.startsWith('gradient-') ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
                    <FiCode className="text-6xl text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-wider uppercase border border-white/10">
                  {project.category}
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-wider uppercase border border-white/10">
                  {project.date}
                </div>

                {/* Case Study Glow on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-xl text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <FiInfo size={14} />
                    <span>View Case Details</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[60px] line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-1 px-2.5 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground select-none"
                    >
                      <tech.icon className={`${tech.color}`} size={12} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glowing Background Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 will-change-gpu">
            <FiStar className="text-4xl text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm constantly working on new projects and exploring cutting-edge technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <motion.a
              href="https://github.com/27Naman2004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-hero inline-flex items-center gap-2 will-change-gpu shadow-md font-bold"
            >
              <FiGithub size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-card border border-card-border p-8 rounded-2xl shadow-2xl z-10 max-h-[85vh] overflow-y-auto scrollbar-thin will-change-transform"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full bg-muted/40 transition-colors duration-200"
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-wide uppercase">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold mt-3 mb-2 text-foreground">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-muted-foreground">{activeProject.date}</p>
              </div>

              {/* Project Image */}
              <div className="h-64 rounded-xl overflow-hidden bg-gradient-primary mb-6 flex items-center justify-center shadow-lg border border-card-border">
                {typeof activeProject.image === 'string' && activeProject.image.startsWith('gradient-') ? (
                  <FiCode className="text-7xl text-white/80" />
                ) : (
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Descriptions */}
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-bold text-gradient">Overview</h4>
                <p className="text-foreground leading-relaxed">
                  {activeProject.description}
                </p>
                <h4 className="text-lg font-bold text-gradient">Key Implementations</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {activeProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-gradient">Core Architecture Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-2 px-3 py-2 bg-muted rounded-xl text-sm font-semibold text-muted-foreground select-none"
                    >
                      <tech.icon className={`${tech.color}`} size={16} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-card-border pt-6">
                {activeProject.github !== '#' && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-card-secondary border border-card-border rounded-xl text-sm font-semibold transition-all duration-200 hover:border-accent hover:text-accent flex-1"
                  >
                    <FiGithub size={18} />
                    <span>View Repository</span>
                  </a>
                )}

                {activeProject.isPyPiPackage && activeProject.installCommand ? (
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(activeProject.installCommand);
                      alert(`Copied: ${activeProject.installCommand}`);
                    }}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl text-sm font-bold transition-all duration-200 flex-1 cursor-pointer shadow-md hover:opacity-90"
                    title="Click to copy install command"
                  >
                    <FiDownload size={18} />
                    <span>Copy Install Command</span>
                  </div>
                ) : (
                  activeProject.demo !== '#' && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl text-sm font-bold transition-all duration-200 flex-1 shadow-md hover:opacity-90"
                    >
                      <FiExternalLink size={18} />
                      <span>Launch Live Demo</span>
                    </a>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;