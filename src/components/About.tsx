import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Lovely Professional University',
      year: '2023 - 2027',
      grade: '8.3 CGPA',
      icon: FiBookOpen,
      color: 'bg-primary'
    },
    {
      degree: 'Higher Secondary',
      field: 'CBSE',
      institution: 'St. John Vianney School',
      year: '2022',
      grade: '76%',
      icon: FiAward,
      color: 'bg-accent'
    }
  ];

  const stats = [
    { number: '8.3', label: 'Current CGPA', suffix: '' },
    { number: '3', label: 'Major Projects', suffix: '+' },
    { number: '15', label: 'Certifications', suffix: '+' },
    { number: '1', label: 'Internship', suffix: '' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float-delayed" />

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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions through code and constantly learning new technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated Computer Science Engineering student at Lovely Professional University 
                  with a strong passion for technology and innovation. Currently maintaining an 8.3 CGPA, 
                  I'm focused on building a solid foundation in software development.
                </p>
                <p>
                  My interests span across <span className="text-accent">Machine Learning</span>, 
                  <span className="text-primary"> Data Science</span>, and 
                  <span className="text-success"> Full-Stack Web Development</span>. 
                  I enjoy working on projects that solve real-world problems and have a meaningful impact.
                </p>
                <p>
                  Gained practical experience as a Data Science Intern at SkillCraft Technology, where I worked on data analysis, visualization, and machine learning model development.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-accent" size={20} />
                  <span className="text-sm">Gwalior, MP, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCalendar className="text-primary" size={20} />
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-6 text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Education</h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card-glass p-6 relative overflow-hidden"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${edu.color} bg-opacity-20 flex-shrink-0`}>
                    <edu.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-accent font-medium mb-1">{edu.field}</p>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{edu.year}</span>
                      <span className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-full blur-xl" />
              </motion.div>
            ))}

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-glass p-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-gradient">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Year</span>
                  <span className="font-medium">2nd Year (4th Semester)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Graduation</span>
                  <span className="font-medium">2027</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Focus Areas</span>
                  <span className="font-medium">ML & Web Dev</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;