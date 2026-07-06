import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiUser, FiStar, FiEye, FiChevronRight } from 'react-icons/fi';
import { SiGoogle, SiCoursera, SiHackerrank, SiNvidia, SiPostman } from 'react-icons/si';
import { useState } from 'react';

// Certificate images
import oracleOciCert from '@/assets/certificates/oracle-oci-certificate.png';
import nvidiaAiCert from '@/assets/certificates/nvidia-ai-certificate.png';
import networkFundamentalsCert from '@/assets/certificates/network-fundamentals-certificate.png';
import machineLearningCert from '@/assets/certificates/machine-learning-certificate.png';
import chatgptCert from '@/assets/certificates/chatgpt-certificate.png';
import computerCommCert from '@/assets/certificates/computer-communications-certificate.png';
import bitsBytesCert from '@/assets/certificates/bits-bytes-certificate.png';
import postmanApiCert from '@/assets/certificates/postman-api-certificate.png';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      verificationLink: '#',
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
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: '2025',
      category: 'API Development',
      icon: SiPostman,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      description: 'Comprehensive understanding of API fundamentals, testing, and development using Postman platform.',
      skills: ['API Testing', 'REST APIs', 'Postman', 'API Documentation', 'HTTP Methods'],
      verificationLink: 'https://badgr.com/public/assertions/giskFoFbRR6eHdIFQ8usmA',
      certificateImage: postmanApiCert
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
      verificationLink: '#',
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

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = selectedCategory
    ? certifications.filter(cert => cert.category === selectedCategory)
    : certifications;

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5" />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-success/20 to-warning/20 blur-3xl opacity-50 animate-float-delayed" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-accent mb-2">
              <FiAward size={20} className="animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase">Professional Certifications</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Industry Expertise</span>
            <br />
            <span className="text-foreground">& Achievements</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Committed to continuous learning and excellence through verified certifications from leading technology companies and institutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12"
        >
          {categories.map((category) => {
            const count = category === 'All'
              ? certifications.length
              : certifications.filter(cert => cert.category === category).length;
            const isActive = (category === 'All' && selectedCategory === null) || selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                className={`p-4 text-center rounded-xl border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-center items-center gap-1 ${
                  isActive 
                    ? 'border-accent bg-accent/10 shadow-lg shadow-accent/5' 
                    : 'card-glass hover:border-primary/40'
                }`}
              >
                <div className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-accent' : 'text-gradient'}`}>
                  {count}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {category}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Certifications Horizontal Scrollable Row */}
        <div className="relative min-h-[480px]">
          {/* Scroll indicators/shadow gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex space-x-6 overflow-x-auto pb-6 px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 snap-x snap-mandatory">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex-shrink-0 w-80 snap-start card-glass p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl flex flex-col justify-between min-h-[460px] cursor-pointer"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${cert.bgColor} bg-opacity-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6`}>
                      <cert.icon className={`text-2xl ${cert.color}`} />
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-[10px] md:text-xs text-accent font-medium px-2 py-0.5 bg-accent/10 rounded-full inline-block">
                        {cert.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 justify-end">
                        <FiCalendar className="mr-1 flex-shrink-0" size={11} />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  {cert.certificateImage && (
                    <div className="mb-4 relative aspect-[4/3] rounded-lg overflow-hidden border border-card-border shadow-sm">
                      <img 
                        src={cert.certificateImage} 
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2.5 transition-transform duration-300 translate-y-3 group-hover:translate-y-0">
                          <FiEye className="text-white text-lg" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-accent">
                      <FiUser className="mr-2 flex-shrink-0" size={13} />
                      <span className="truncate font-medium">{cert.issuer}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Footer and verification */}
                <div className="mt-4 pt-2">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-muted rounded-full text-[10px] font-medium text-muted-foreground transition-colors duration-200 group-hover:bg-accent/10 group-hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.verificationLink && cert.verificationLink !== '#' ? (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-sm font-medium transition-all duration-300 hover:from-primary/20 hover:to-accent/20 hover:border-primary/40 hover:shadow-lg text-primary"
                    >
                      <FiExternalLink size={13} />
                      <span>Verify Certificate</span>
                    </a>
                  ) : (
                    <div className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-muted/30 border border-transparent rounded-lg text-sm font-medium text-muted-foreground cursor-default">
                      <FiEye size={13} className="opacity-60" />
                      <span>Certificate Available</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Instruction */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 text-xs text-muted-foreground bg-card-glass px-4 py-2 rounded-full border border-card-border animate-pulse">
            <span>Scroll horizontally to view more certifications</span>
            <FiChevronRight size={14} />
          </div>
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 card-glass p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 opacity-50 pointer-events-none" />
          
          <FiAward className="text-4xl text-accent mx-auto mb-4" />
          
          <h3 className="text-2xl font-bold mb-3 text-gradient">Commitment to Excellence</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            These certifications represent my dedication to continuous learning and staying updated 
            with the latest technologies and industry best practices.
          </p>
          
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-primary">{certifications.length}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-medium">Total Credentials</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-accent">{categories.length - 1}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-medium">Topic Categories</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-success">2025</div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-medium">Latest Updated</div>
            </div>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://drive.google.com/drive/u/1/folders/1RRcuuXe9Zd_YyRo1LenabGwUnJAeFjmd"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-accent to-success text-primary-foreground font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/20"
          >
            <FiExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>View All My Certifications</span>
            <FiChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;