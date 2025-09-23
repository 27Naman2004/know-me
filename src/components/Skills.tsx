import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  SiPython, SiJavascript, SiReact, SiFlask, SiStreamlit, 
  SiScikitlearn, SiPandas, SiNumpy, SiTensorflow,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub,
  SiMysql, SiPostgresql, SiDocker, SiLinux,
} from 'react-icons/si';
import { FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiTool,
      skills: [
        { name: 'Python', level: 90, icon: SiPython, color: 'text-yellow-400' },
        { name: 'JavaScript', level: 85, icon: SiJavascript, color: 'text-yellow-300' },
        { name: 'Java', level: 75, icon: FiTool, color: 'text-red-500' },
        { name: 'C++', level: 70, icon: FiTool, color: 'text-blue-600' },
        { name: 'SQL', level: 85, icon: FiDatabase, color: 'text-blue-400' },
      ]
    },
    {
      title: 'Machine Learning & Data Science',
      icon: FiCloud,
      skills: [
        { name: 'Scikit-learn', level: 88, icon: SiScikitlearn, color: 'text-orange-400' },
        { name: 'Pandas', level: 85, icon: SiPandas, color: 'text-blue-300' },
        { name: 'NumPy', level: 82, icon: SiNumpy, color: 'text-blue-500' },
        { name: 'Seaborn', level: 75, icon: FiTool, color: 'text-purple-400' },
        { name: 'TensorFlow', level: 65, icon: SiTensorflow, color: 'text-orange-500' },
      ]
    },
    {
      title: 'Web Development',
      icon: FiTool,
      skills: [
        { name: 'React', level: 75, icon: SiReact, color: 'text-cyan-400' },
        { name: 'Flask', level: 78, icon: SiFlask, color: 'text-gray-300' },
        { name: 'Streamlit', level: 90, icon: SiStreamlit, color: 'text-red-400' },
        { name: 'HTML/CSS', level: 88, icon: SiHtml5, color: 'text-orange-400' },
        { name: 'Tailwind CSS', level: 75, icon: SiTailwindcss, color: 'text-cyan-300' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FiDatabase,
      skills: [
        { name: 'Git/GitHub', level: 85, icon: SiGithub, color: 'text-white' },
        { name: 'MySQL', level: 80, icon: SiMysql, color: 'text-blue-400' },
        { name: 'PostgreSQL', level: 50, icon: SiPostgresql, color: 'text-blue-500' },
        { name: 'Docker', level: 60, icon: SiDocker, color: 'text-blue-400' },
        { name: 'Linux', level: 70, icon: SiLinux, color: 'text-yellow-300' },
      ]
    }
  ];

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

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-success/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float-delayed" />

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
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card-glass p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary bg-opacity-20 mr-4">
                  <category.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`text-xl ${skill.color}`} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress h-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: isInView ? `${animatedSkills[skill.name] || 0}%` : '0%' 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 card-glass p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <SiPython className="text-2xl text-primary-foreground" />
              </div>
              <h4 className="font-semibold">Data Science</h4>
              <p className="text-sm text-muted-foreground">
                Machine Learning, Data Analysis, and Statistical Modeling with Python
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center">
                <SiReact className="text-2xl text-accent-foreground" />
              </div>
              <h4 className="font-semibold">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                Full-stack development with modern frameworks and responsive design
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-skill flex items-center justify-center">
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