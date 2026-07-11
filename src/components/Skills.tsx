import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  SiPython, SiJavascript, SiReact, SiHtml5, SiCss3, SiGithub,
  SiMysql, SiDocker, SiLinux, SiScikitlearn, SiPandas, SiNumpy,
  SiCplusplus, SiSpringboot, SiHibernate, SiJsonwebtokens, SiGooglecloud,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiDatabase, FiCloud, FiTool, FiCode, FiLayers, FiCpu, FiBookOpen, FiGlobe } from 'react-icons/fi';

interface SkillItem {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: FiCode,
    skills: [
      { name: 'Java', level: 80, icon: FaJava, color: 'text-red-500' },
      { name: 'Python', level: 90, icon: SiPython, color: 'text-yellow-400' },
      { name: 'JavaScript', level: 85, icon: SiJavascript, color: 'text-yellow-300' },
      { name: 'C++', level: 75, icon: SiCplusplus, color: 'text-blue-600' },
    ]
  },
  {
    title: 'Frameworks',
    icon: FiLayers,
    skills: [
      { name: 'Spring Boot', level: 80, icon: SiSpringboot, color: 'text-green-500' },
      { name: 'React', level: 85, icon: SiReact, color: 'text-cyan-400' },
      { name: 'REST APIs', level: 85, icon: FiGlobe, color: 'text-blue-400' },
      { name: 'JWT', level: 80, icon: SiJsonwebtokens, color: 'text-purple-500' },
      { name: 'HTML', level: 90, icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', level: 85, icon: SiCss3, color: 'text-blue-500' },
    ]
  },
  {
    title: 'Databases & Tools',
    icon: FiDatabase,
    skills: [
      { name: 'MySQL', level: 85, icon: SiMysql, color: 'text-blue-400' },
      { name: 'JPA/Hibernate', level: 75, icon: SiHibernate, color: 'text-red-400' },
      { name: 'Git/GitHub', level: 88, icon: SiGithub, color: 'text-white' },
      { name: 'Docker', level: 70, icon: SiDocker, color: 'text-cyan-500' },
      { name: 'Linux', level: 75, icon: SiLinux, color: 'text-yellow-500' },
      { name: 'GCP', level: 70, icon: SiGooglecloud, color: 'text-blue-500' },
    ]
  },
  {
    title: 'Machine Learning',
    icon: FiCpu,
    skills: [
      { name: 'Scikit-learn', level: 88, icon: SiScikitlearn, color: 'text-orange-400' },
      { name: 'Pandas', level: 85, icon: SiPandas, color: 'text-blue-300' },
      { name: 'NumPy', level: 82, icon: SiNumpy, color: 'text-blue-500' },
      { name: 'NLP', level: 80, icon: FiCpu, color: 'text-green-400' },
    ]
  },
  {
    title: 'Core Concepts',
    icon: FiBookOpen,
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, icon: FiCode, color: 'text-yellow-400' },
      { name: 'Object-Oriented Programming', level: 88, icon: FiLayers, color: 'text-purple-400' },
      { name: 'DBMS', level: 85, icon: FiDatabase, color: 'text-blue-400' },
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const skills: {[key: string]: number} = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            skills[skill.name] = skill.level;
          });
        });
        setAnimatedSkills(skills);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const activeCategory = skillCategories[activeCategoryIndex];

  // Helper to get custom diagnostic messages for each skill
  const getSkillInsight = (name: string) => {
    switch (name) {
      case 'Java':
        return 'Utilized in academic computer science coursework, object-oriented systems design, and backend development.';
      case 'Python':
        return 'Core language for Machine Learning algorithms, predictive analytics, and backend data processing pipelines.';
      case 'JavaScript':
        return 'Used to implement complex client-side application logic, animations, and interactive components.';
      case 'C++':
        return 'Applied for low-level memory operations, performance-critical problem solving, and structures.';
      case 'Spring Boot':
        return 'Framework for building robust, enterprise-ready Java backend applications and REST microservices.';
      case 'React':
        return 'Primary library for responsive interactive client interfaces, SPA routing, and state management.';
      case 'REST APIs':
        return 'Designing and implementing standard architectural styles for distributed web services and integrations.';
      case 'JWT':
        return 'Securing web endpoints with JSON Web Tokens for stateless user authentication and authorization.';
      case 'HTML':
        return 'Structuring web content with standard semantic markup, ensuring high accessibility and SEO readiness.';
      case 'CSS':
        return 'Crafting responsive layouts, flexboxes, grids, and beautiful visual aesthetics with modern CSS.';
      case 'MySQL':
        return 'Relational database management, transaction handling, constraints, and query analysis.';
      case 'JPA/Hibernate':
        return 'Object-relational mapping framework to bridge Java applications with relational database engines.';
      case 'Git/GitHub':
        return 'Standard version control workflow, collaborative pull requests, branch protection, and actions.';
      case 'Docker':
        return 'Used to package full-stack applications into portable container images for easy deployments.';
      case 'Linux':
        return 'Command line terminal navigation, environment configuration, and server administration tools.';
      case 'GCP':
        return 'Deploying and managing cloud infrastructure using Google Cloud Platform tools and services.';
      case 'Scikit-learn':
        return 'Primary ML tool used for regression, classification, cross-validation, and hyperparameter tuning.';
      case 'Pandas':
        return 'Used extensively for data wrangling, cleaning, correlation analysis, and data exploration.';
      case 'NumPy':
        return 'Leveraged for scientific computation, matrix mathematical calculations, and vector operations.';
      case 'NLP':
        return 'Processing and analyzing textual data using Natural Language Processing concepts and techniques.';
      case 'Data Structures & Algorithms':
        return 'Implementing efficient data representations and optimal algorithms for problem solving.';
      case 'Object-Oriented Programming':
        return 'Designing clean, modular, and maintainable systems using OOP principles like inheritance and polymorphism.';
      case 'DBMS':
        return 'Understanding relational model theory, database administration, and transaction ACID properties.';
      default:
        return 'Demonstrated operational capability, verified through project implementations and academic applications.';
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden contain-section" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float will-change-gpu pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float-delayed will-change-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="text-gradient">Console</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive diagnostic breakdown of technical proficiencies across core development fields
          </p>
        </motion.div>

        {/* Skills Cyber Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Category Tiles Selector */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-accent uppercase tracking-widest pl-2 mb-3">Select System Layer</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {skillCategories.map((category, index) => {
                const isActive = activeCategoryIndex === index;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => {
                      setActiveCategoryIndex(index);
                      setHoveredSkill(null);
                    }}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden group select-none will-change-transform ${
                      isActive 
                        ? 'border-accent bg-accent/5 shadow-glow-accent' 
                        : 'card-glass hover:border-primary/40 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className={`p-3 rounded-xl border transition-colors duration-300 ${
                        isActive 
                          ? 'bg-accent/20 border-accent/40 text-accent' 
                          : 'bg-card border-card-border text-muted-foreground group-hover:text-primary group-hover:border-primary/30'
                      }`}>
                        <category.icon size={20} />
                      </div>
                      <div>
                        <h4 className={`font-bold text-sm transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground'}`}>
                          {category.title}
                        </h4>
                        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">
                          {category.skills.length} operational units
                        </p>
                      </div>
                    </div>
                    {/* Subtle active background glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Skill Diagnostics Matrix */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeCategoryIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="card-glass p-8 relative overflow-hidden min-h-[460px] flex flex-col justify-between will-change-gpu"
            >
              {/* Category Title */}
              <div className="border-b border-card-border pb-4 mb-6">
                <div className="flex items-center space-x-2 text-xs text-accent font-bold uppercase tracking-widest mb-1">
                  <span>Diagnostic Matrix</span>
                  <span>//</span>
                  <span className="text-muted-foreground font-mono">Layer_0{activeCategoryIndex + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{activeCategory.title}</h3>
              </div>

              {/* Skills List with Cyber-Bar Indicators */}
              <div className="space-y-6 flex-1">
                {activeCategory.skills.map((skill, skillIndex) => {
                  const targetLevel = animatedSkills[skill.name] || 0;
                  const activeSegments = Math.round(targetLevel / 10);
                  const isThisHovered = hoveredSkill?.name === skill.name;
                  
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      className="group/item cursor-crosshair select-none"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className={`text-lg transition-transform duration-300 group-hover/item:scale-110 ${
                            isThisHovered ? skill.color : 'text-muted-foreground'
                          }`} />
                          <span className="font-bold text-sm text-foreground transition-colors duration-200 group-hover/item:text-accent">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-accent">
                          {targetLevel}%
                        </span>
                      </div>

                      {/* Cyber Segment Bar */}
                      <div className="flex space-x-1.5 h-3 items-center">
                        {Array.from({ length: 10 }).map((_, segmentIndex) => {
                          const isLit = segmentIndex < activeSegments;
                          return (
                            <div
                              key={segmentIndex}
                              className={`h-full flex-1 rounded-sm transition-all duration-300 ${
                                isLit
                                  ? isThisHovered
                                    ? `bg-accent shadow-[0_0_8px_rgba(17,24,39,0.5)]`
                                    : `bg-primary/60`
                                  : 'bg-muted/35'
                              }`}
                              style={isLit && isThisHovered && skill.color.includes('-') ? {
                                backgroundColor: skill.color.includes('text-yellow') 
                                  ? '#facc15' 
                                  : skill.color.includes('text-cyan') 
                                    ? '#22d3ee' 
                                    : skill.color.includes('text-red') 
                                      ? '#f87171' 
                                      : skill.color.includes('text-blue') 
                                        ? '#60a5fa' 
                                        : skill.color.includes('text-orange') 
                                          ? '#fb923c' 
                                          : skill.color.includes('text-green')
                                            ? '#4ade80'
                                            : skill.color.includes('text-purple')
                                              ? '#c084fc'
                                              : skill.color.includes('text-white')
                                                ? '#ffffff'
                                                : undefined
                              } : undefined}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Terminal Diagnostic Readout */}
              <div className="mt-8 pt-4 border-t border-card-border bg-black/30 p-4 rounded-xl font-mono text-xs relative overflow-hidden">
                <div className="flex items-center space-x-2 text-accent font-bold mb-1.5">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                  <span>DIAGNOSTIC READOUT:</span>
                </div>
                <div className="text-muted-foreground min-h-[40px] leading-relaxed">
                  {hoveredSkill ? (
                    <>
                      <span className="text-foreground font-bold">{hoveredSkill.name}</span>: {getSkillInsight(hoveredSkill.name)}
                    </>
                  ) : (
                    <span>Hover over any operational unit to inspect detailed diagnostic metrics.</span>
                  )}
                </div>
                <div className="absolute top-2 right-2 text-[10px] text-muted-foreground/30 select-none">
                  SYS_STATUS: ACTIVE
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 card-glass p-8 will-change-gpu"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-md">
                <SiPython className="text-2xl text-primary-foreground" />
              </div>
              <h4 className="font-semibold">Data Science</h4>
              <p className="text-sm text-muted-foreground">
                Machine Learning, Data Analysis, and Statistical Modeling with Python
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center shadow-md">
                <SiReact className="text-2xl text-accent-foreground" />
              </div>
              <h4 className="font-semibold">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                Full-stack development with modern frameworks and responsive design
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-skill flex items-center justify-center shadow-md">
                <FiDatabase className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                Analytical thinking and algorithmic problem-solving skills
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;