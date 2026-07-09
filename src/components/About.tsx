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

  // ✅ Location logic (NO array change)
  const getLocation = (institution) => {
    if (institution === 'Lovely Professional University') {
      return 'Phagwara, Punjab, India';
    }
    return 'Gwalior, Madhya Pradesh, India';
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float will-change-gpu pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float-delayed will-change-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* Bio */}
            <div className="card-glass p-8 will-change-gpu">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated Computer Science Engineering student at Lovely Professional University
                  with a strong passion for technology and innovation. Currently maintaining an 8.3 CGPA,
                  I'm focused on building a solid foundation in software development.
                </p>

                <p>
                  My interests span across <span className="text-accent font-medium">Machine Learning</span>,
                  <span className="text-primary font-medium"> Data Science</span>, and
                  <span className="text-success font-medium"> Full-Stack Web Development</span>.
                </p>

                <p>
                  Gained practical experience as a Data Science Intern at SkillCraft Technology.
                </p>
              </div>

              {/* Contact */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-card-border pt-6">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300">
                  <FiMapPin className="text-accent" size={20} />
                  <span className="text-sm">Gwalior, MP, India</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-6 text-center will-change-gpu"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Education Pathway */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Education Pathway</h3>

            <div className="relative pl-8 border-l border-muted/30 ml-4 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group card-glass p-6 will-change-gpu"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-card border-2 border-accent flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${edu.color} bg-opacity-20 flex-shrink-0 text-foreground`}>
                      <edu.icon className="text-2xl" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-200">
                        {edu.degree}
                      </h4>
                      <p className="text-accent font-medium mb-1 text-sm">{edu.field}</p>
                      <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <FiMapPin className="text-accent" size={12} />
                        <span>{getLocation(edu.institution)}</span>
                      </div>

                      <div className="flex justify-between items-center border-t border-card-border pt-4 mt-2">
                        <span className="text-xs text-muted-foreground font-mono">{edu.year}</span>
                        <span className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-xs font-bold shadow-md">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-5 rounded-full blur-xl pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Academic Domain Focus Area Visualization */}
            <div className="card-glass p-6 will-change-gpu">
              <h4 className="text-lg font-bold mb-4 text-gradient">Academic Focus Breakdown</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-foreground">Machine Learning & Data Science</span>
                    <span className="font-mono text-accent font-semibold">60%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-accent origin-left rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-foreground">Full-Stack Software Development</span>
                    <span className="font-mono text-primary font-semibold">40%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-primary origin-left rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6 border-t border-card-border pt-4 text-center">
                <div className="text-xs text-muted-foreground font-medium">
                  <div className="font-bold text-foreground">3rd Year</div>
                  Current Year
                </div>
                <div className="text-xs text-muted-foreground font-medium border-x border-card-border">
                  <div className="font-bold text-foreground">2027</div>
                  Graduation Year
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  <div className="font-bold text-foreground">8.3 CGPA</div>
                  Grade
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;