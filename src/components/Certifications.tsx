import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiUser, FiStar, FiEye, FiChevronRight } from 'react-icons/fi';
import { SiGoogle, SiCoursera, SiHackerrank, SiNvidia } from 'react-icons/si';
import { useState } from 'react';

// Certificate images
import oracleOciCert from '@/assets/certificates/oracle-oci-certificate.png';
import nvidiaAiCert from '@/assets/certificates/nvidia-ai-certificate.png';
import networkFundamentalsCert from '@/assets/certificates/network-fundamentals-certificate.png';
import machineLearningCert from '@/assets/certificates/machine-learning-certificate.png';
import chatgptCert from '@/assets/certificates/chatgpt-certificate.png';
import computerCommCert from '@/assets/certificates/computer-communications-certificate.png';
import bitsBytesCert from '@/assets/certificates/bits-bytes-certificate.png';

const Certifications = () => {
  const certifications = [
    {
      title: 'OCI Data Science',
      issuer: 'Oracle',
      date: '2025',
      category: 'Data Science',
      icon: FiAward,
      color: 'text-red-600',
      bgColor: 'bg-red-600',
      description: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional certification demonstrating expertise in data science and machine learning on OCI.',
      skills: ['Data Science', 'Oracle Cloud', 'Machine Learning', 'Analytics', 'Big Data'],
      verificationLink: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7172313&trackId=OCI25DSOCP&key=1662611864fbf45b4b9adfc27fe54985ec43f21d',
      certificateImage: oracleOciCert
    },
    {
      title: 'AI for All: From Basics to GenAI Practice',
      issuer: 'NVIDIA Academy',
      date: '2025',
      category: 'Artificial Intelligence',
      icon: SiNvidia,
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      description: 'Comprehensive AI course covering fundamentals to advanced GenAI practices.',
      skills: ['AI', 'GenAI', 'Machine Learning', 'Neural Networks'],
      verificationLink: '#', // No link provided
      certificateImage: nvidiaAiCert
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: '2025',
      category: 'Networking',
      icon: SiGoogle,
      color: 'text-red-400',
      bgColor: 'bg-red-400',
      description: 'Comprehensive understanding of computer networking fundamentals and protocols.',
      skills: ['Networking', 'TCP/IP', 'Network Protocols', 'Network Security'],
      verificationLink: 'https://www.coursera.org/account/accomplishments/verify/V7AX1P5XXCYU',
      certificateImage: bitsBytesCert
    },
    {
      title: 'Machine Learning With Data Science',
      issuer: 'Cipher Schools',
      date: '2025',
      category: 'Machine Learning',
      icon: SiHackerrank,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400',
      description: 'Comprehensive course covering ML algorithms, data preprocessing, and model evaluation techniques.',
      skills: ['Python', 'Scikit-learn', 'Data Analysis', 'ML Algorithms'],
      verificationLink: 'https://www.cipherschools.com/certificate/preview?id=688735a3ca64e035786b2a84',
      certificateImage: machineLearningCert
    },
    {
      title: 'SQL (Advanced)',
      issuer: 'HackerRank',
      date: '2025',
      category: 'Database',
      icon: SiHackerrank,
      color: 'text-green-400',
      bgColor: 'bg-green-400',
      description: 'Advanced SQL concepts including complex queries, joins, and database optimization.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Modeling'],
      verificationLink: 'https://www.hackerrank.com/certificates/2c6ab8278fbf',
      certificateImage: null
    },
    {
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      date: '2025',
      category: 'Programming',
      icon: SiHackerrank,
      color: 'text-green-400',
      bgColor: 'bg-green-400',
      description: 'Algorithmic problem solving and data structures implementation.',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving', 'Competitive Programming'],
      verificationLink: 'https://www.hackerrank.com/certificates/2de3d8061293',
      certificateImage: null
    },
    {
      title: 'ChatGPT-4 Prompt Engineering',
      issuer: 'Infosys',
      date: '2025',
      category: 'AI & Prompt Engineering',
      icon: FiStar,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400',
      description: 'Advanced techniques for effective prompt engineering with ChatGPT and LLMs.',
      skills: ['Prompt Engineering', 'ChatGPT', 'LLMs', 'AI Integration'],
      verificationLink: 'https://drive.google.com/drive/u/0/folders/17_gpja7xylDYvrpAonWuRd8HjGhO25eg',
      certificateImage: chatgptCert
    },
    {
      title: 'Computer Communications',
      issuer: 'Coursera',
      date: '2025',
      category: 'Networking',
      icon: SiCoursera,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      description: 'Deep dive into computer communication systems and network architectures.',
      skills: ['Network Architecture', 'Communication Protocols', 'Network Design'],
      verificationLink: 'https://www.coursera.org/account/accomplishments/specialization/DAR5MTAP4WXZ',
      certificateImage: computerCommCert
    },
    {
      title: 'Cloud Computing',
      issuer: 'Swayam (NPTEL)',
      date: '2025',
      category: 'Cloud Technology',
      icon: FiAward,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400',
      description: 'Fundamentals of cloud computing, deployment models, and cloud services.',
      skills: ['Cloud Computing', 'AWS', 'Cloud Architecture', 'Distributed Systems'],
      verificationLink: '#', // No link provided
      certificateImage: null
    },
    {
      title: 'Fundamentals of Network Communication',
      issuer: 'Coursera',
      date: '2025',
      category: 'Networking',
      icon: SiCoursera,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      description: 'Core concepts of network communication and data transmission.',
      skills: ['Network Communication', 'Data Transmission', 'Network Fundamentals'],
      verificationLink: 'https://www.coursera.org/account/accomplishments/verify/IQJPJB0MRRKC',
      certificateImage: networkFundamentalsCert
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5" />
        
        {/* Multiple floating orbs with enhanced animations */}
        <motion.div 
          className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-50"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-success/20 to-warning/20 blur-3xl opacity-50"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 blur-3xl opacity-30"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Animated geometric patterns */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-primary/10 opacity-20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transform: 'rotate(45deg)' }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-24 h-24 border border-accent/10 opacity-20"
          animate={{ 
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ transform: 'rotate(12deg)' }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center space-x-2 text-accent mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FiAward size={24} />
              </motion.div>
              <span className="text-sm font-medium tracking-wider uppercase">Professional Certifications</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              Industry Expertise
            </span>
            <br />
            <span className="text-foreground">& Achievements</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Committed to continuous learning and excellence through verified certifications from leading technology companies and institutions
          </motion.p>
        </motion.div>

        {/* Enhanced Category Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const count = certifications.filter(cert => cert.category === category).length;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="card-glass p-6 text-center relative overflow-hidden group cursor-pointer"
              >
                {/* Animated background effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div 
                  className="text-3xl font-bold text-gradient mb-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {count}
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground font-medium"
                  whileHover={{ color: "hsl(var(--accent))" }}
                  transition={{ duration: 0.3 }}
                >
                  {category}
                </motion.div>
                
                {/* Decorative corner element */}
                <motion.div 
                  className="absolute top-2 right-2 w-6 h-6 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.5, rotate: 180 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* All Certifications - Horizontal Scrollable Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Section Title */}
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
              >
                <FiStar className="text-accent text-xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gradient">All Certifications</h3>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-3 rounded-full bg-gradient-to-l from-primary/20 to-accent/20"
              >
                <FiAward className="text-primary text-xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Horizontal Scrollable Container */}
          <div className="relative">
            {/* Scroll indicators with enhanced styling */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-12 h-full bg-gradient-to-r from-background via-background/80 to-transparent" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-12 h-full bg-gradient-to-l from-background via-background/80 to-transparent" />
            </div>
            
            {/* Scrollable certificates container */}
            <div 
              className="overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/50 hover:scrollbar-thumb-primary/70" 
            >
              <motion.div 
                className="flex space-x-6 min-w-max px-6"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -15,
                      rotateY: 5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group flex-shrink-0 w-80 card-glass p-6 relative overflow-hidden cursor-pointer transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d',
                      minHeight: '500px'
                    }}
                  >
                    {/* Enhanced Hover Effects */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"
                      whileHover={{ 
                        background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15), hsl(var(--success) / 0.15))"
                      }}
                    />
                    
                    {/* Animated border glow */}
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-success/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      whileHover={{ opacity: 1, scale: 1.02 }}
                    />

                    {/* Certificate Icon & Category */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`p-3 rounded-xl ${cert.bgColor} bg-opacity-20 flex-shrink-0 relative overflow-hidden`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        />
                        <cert.icon className={`text-2xl ${cert.color} relative z-10`} />
                      </motion.div>
                      <div className="text-right">
                        <motion.div 
                          className="text-xs text-accent font-medium mb-1 px-2 py-1 bg-accent/10 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {cert.category}
                        </motion.div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <FiCalendar className="mr-1" size={12} />
                          </motion.div>
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Image with Enhanced Animation */}
                    {cert.certificateImage && (
                      <motion.div 
                        className="mb-4"
                        whileHover={{ y: -8, rotateX: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-card-border shadow-lg">
                          <motion.img 
                            src={cert.certificateImage} 
                            alt={`${cert.title} Certificate`}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />
                          {/* Overlay with enhanced animation */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                            whileHover={{ opacity: 1 }}
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                              className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                            >
                              <FiEye className="text-white text-2xl" />
                            </motion.div>
                          </motion.div>
                          
                          {/* Shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Certificate Details */}
                    <div className="space-y-3">
                      <motion.h3 
                        className="text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {cert.title}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center text-sm text-accent"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400, delay: 0.05 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FiUser className="mr-2" size={14} />
                        </motion.div>
                        {cert.issuer}
                      </motion.div>

                      <motion.p 
                        className="text-sm text-muted-foreground leading-relaxed line-clamp-3"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                      >
                        {cert.description}
                      </motion.p>

                      {/* Skills with Enhanced Staggered Animation */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: (index * 0.05) + (skillIndex * 0.1),
                              type: "spring",
                              stiffness: 300
                            }}
                            whileHover={{ 
                              scale: 1.15, 
                              y: -3, 
                              rotate: 5,
                              transition: { duration: 0.2 }
                            }}
                            className="px-3 py-1 bg-gradient-to-r from-muted to-muted/80 rounded-full text-xs font-medium hover:from-accent/20 hover:to-accent/10 transition-all duration-300 cursor-pointer"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Enhanced Action Buttons */}
                      {cert.verificationLink && cert.verificationLink !== '#' ? (
                        <motion.a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -3 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-sm font-medium transition-all duration-300 hover:from-primary/20 hover:to-accent/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/25 group"
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            <FiExternalLink size={14} className="text-primary" />
                          </motion.div>
                          <span className="text-primary font-semibold">Verify Certificate</span>
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                            animate={{ 
                              scale: [1, 1.5, 1], 
                              opacity: [0.5, 1, 0.5] 
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          />
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02, y: -3 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-card-secondary/50 to-card-secondary border border-card-border rounded-lg text-sm font-medium transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/25 group cursor-default"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <FiEye size={14} className="group-hover:text-accent transition-colors" />
                          </motion.div>
                          <span className="group-hover:text-accent transition-colors">Certificate Available</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Enhanced Decorative Elements */}
                    <motion.div 
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-xl"
                      whileHover={{ scale: 1.5, opacity: 0.3 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-lg"
                      whileHover={{ scale: 1.3, opacity: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Scroll instruction with animation */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 text-sm text-muted-foreground bg-card-glass px-6 py-3 rounded-full border border-card-border"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>Scroll horizontally to explore all certifications</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center space-x-1"
              >
                <FiChevronRight size={16} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievement Summary with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 card-glass p-8 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5"
            animate={{
              background: [
                "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05), hsl(var(--success) / 0.05))",
                "linear-gradient(225deg, hsl(var(--success) / 0.05), hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05))",
                "linear-gradient(315deg, hsl(var(--accent) / 0.05), hsl(var(--success) / 0.05), hsl(var(--primary) / 0.05))"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiAward className="text-5xl text-accent mx-auto mb-6" />
          </motion.div>
          
          <h3 className="text-3xl font-bold mb-4 text-gradient">Commitment to Excellence</h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            These certifications represent my dedication to continuous learning and staying updated 
            with the latest technologies and industry best practices. Each certification has enhanced 
            my skills and contributed to my professional growth in the ever-evolving tech landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {15}+
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">Total Certifications</div>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-4xl font-bold text-accent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                {categories.length}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">Different Categories</div>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-4xl font-bold text-success"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                2025
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">Most Recent Year</div>
            </motion.div>
          </div>
        </motion.div>

        {/* View All Certifications Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://drive.google.com/drive/u/1/folders/1RRcuuXe9Zd_YyRo1LenabGwUnJAeFjmd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-primary via-accent to-success text-primary-foreground font-bold text-lg rounded-2xl shadow-2xl overflow-hidden transform-gpu"
          >
            {/* Animated background overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Pulsing indicator */}
            <motion.div 
              className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Icon with rotation animation */}
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </motion.div>
            
            {/* Text content */}
            <span className="relative z-10">View All My Certifications</span>
            
            {/* Arrow indicator */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiChevronRight className="w-5 h-5" />
            </motion.div>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ["-200%", "200%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;  