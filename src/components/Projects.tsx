import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiDownload, FiPackage } from 'react-icons/fi';
import { SiPython, SiStreamlit, SiFlask, SiScikitlearn, SiPandas, SiReact, SiPypi } from 'react-icons/si';
import yourHealthyHeartImg from '@/assets/yourhealthyheart-project.png';
import cinematchImg from '@/assets/cinematch-project.png';
import pollutionExplorerImg from '@/assets/pollution-explorer-project.png';

const Projects = () => {
  const projects = [
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-glass p-6 relative overflow-hidden"
            >
              {/* Project Image/Gradient */}
              <div className="h-48 rounded-xl mb-6 relative overflow-hidden bg-gradient-primary flex items-center justify-center">
                {typeof project.image === 'string' && project.image.startsWith('gradient-') ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                    <FiCode className="text-6xl text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {project.category}
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {project.date}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      className="flex items-center space-x-1 px-3 py-1 bg-muted rounded-full text-xs"
                    >
                      <tech.icon className={`${tech.color}`} />
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-card-secondary border border-card-border rounded-lg text-sm font-medium transition-all duration-300 hover:border-accent flex-1 justify-center"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  
                  {project.isPyPiPackage && project.installCommand ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center cursor-pointer"
                      onClick={() => navigator.clipboard.writeText(project.installCommand)}
                      title="Click to copy install command"
                    >
                      <FiDownload size={16} />
                      <span>Install</span>
                    </motion.div>
                  ) : (
                    project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center"
                      >
                        <FiExternalLink size={16} />
                        <span>Demo</span>
                      </motion.a>
                    )
                  )}
                </div>

                {/* Install Command Display */}
                {project.isPyPiPackage && project.installCommand && (
                  <div className="mt-3 p-2 bg-muted rounded-lg">
                    <code className="text-xs text-muted-foreground font-mono">
                      $ {project.installCommand}
                    </code>
                  </div>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8">
            <FiStar className="text-4xl text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring cutting-edge technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <motion.a
              href="https://github.com/27Naman2004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero inline-flex items-center gap-2"
            >
              <FiGithub size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;