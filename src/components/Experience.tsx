import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import { SiPython, SiPandas, SiScikitlearn, SiStreamlit } from 'react-icons/si';

const Experience = () => {
  const experience = [
    {
      title: 'Data Science Intern',
      company: 'SkillCraft Technology',
      location: 'Remote (Work From Home)',
      duration: 'June 2025 - July 2025',
      type: 'Internship',
      description: 'Selected as a Data Science Intern under the Ministry of MSME initiative. Working on data analysis, visualization, and machine learning model building.',
      achievements: [
        'Working with Python, pandas, NumPy, and scikit-learn for data analysis',
        'Performing exploratory data analysis (EDA) on real-time datasets',
        'Generating actionable insights from complex data patterns',
        'Contributing to dashboards and reports for better decision making',
        'Cleaning and preprocessing large datasets for ML model development'
      ],
      tech: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'Pandas', icon: SiPandas, color: 'text-blue-300' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
        { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-400' }
      ],
      icon: FiBriefcase,
      color: '',
      status: 'Previous Works'
    }
  ];

  const timeline = [
    {
      date: 'June 2025',
      title: 'Started Data Science Internship',
      description: 'Joined SkillCraft Technology as Data Science Intern',
      icon: FiBriefcase,
      color: 'text-primary'
    },
    {
      date: 'April 2025',
      title: 'Completed Multiple Projects',
      description: 'Built Heart Disease Prediction and Movie Recommendation systems',
      icon: FiTrendingUp,
      color: 'text-accent'
    },
    {
      date: 'March 2024',
      title: 'Advanced Certifications',
      description: 'Earned multiple certifications in ML and Data Science and In the Field Of Computer Science',
      icon: FiAward,
      color: 'text-success'
    },
    {
      date: 'September 2023',
      title: 'Started B.Tech Journey',
      description: 'Enrolled in Computer Science Engineering at LPU',
      icon: FiUsers,
      color: 'text-warning'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl animate-float will-change-gpu pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl animate-float-delayed will-change-gpu pointer-events-none" />

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
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and key milestones in my career development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Details */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl font-bold text-gradient mb-8"
            >
              Professional Experience
            </motion.h3>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass p-8 relative overflow-hidden will-change-gpu"
              >
                {/* Status Badge */}
                {exp.status && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-success bg-opacity-20 text-success rounded-full text-xs font-semibold tracking-wide uppercase">
                      {exp.status}
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl ${exp.color || 'bg-primary'} bg-opacity-20 flex-shrink-0 text-primary`}>
                    <exp.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">{exp.title}</h4>
                    <div className="space-y-2 mb-4 border-b border-card-border pb-4">
                      <div className="flex items-center text-accent font-medium">
                        <FiUsers className="mr-2" size={16} />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <FiMapPin className="mr-2" size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <FiCalendar className="mr-2" size={16} />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    {/* Key Achievements - Optimized static list */}
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-gradient">Key Responsibilities & Achievements</h5>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start text-sm text-muted-foreground leading-relaxed"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used - Optimized static tags */}
                    <div>
                      <h5 className="font-semibold mb-3 text-gradient">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center space-x-1.5 px-3 py-2 bg-muted rounded-xl text-xs font-medium text-muted-foreground select-none hover:bg-muted/80 transition-colors duration-200"
                          >
                            <tech.icon className={`${tech.color}`} />
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl font-bold text-gradient mb-8"
            >
              Career Timeline
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-20" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative flex items-start space-x-6 pb-8 will-change-gpu"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-card-border flex items-center justify-center shadow-md">
                      <item.icon className={`text-xl ${item.color}`} />
                    </div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="flex-1 min-w-0">
                    <div className="card-glass p-6 hover:border-accent/40 transition-colors duration-300">
                      <div className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">{item.date}</div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;