import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiUser,
  FiMessageSquare,
  FiCheck,
} from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAIL_SERVICE_ID = "service_pw19wee";
  const EMAIL_TEMPLATE_ID = "template_mzg9u09";
  const EMAIL_PUBLIC_KEY = "kq1bfNFHEJWUwVgz0";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "katare2004@gmail.com",
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );

      toast({
        title: "✅ Message Sent Successfully!",
        description:
          "Your message has been delivered to katare2004@gmail.com. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "❌ Failed to Send",
        description:
          "Something went wrong. Try again or email me directly at katare2004@gmail.com",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "katare2004@gmail.com",
      href: "mailto:katare2004@gmail.com",
      color: "text-red-400",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 7067512315",
      href: "tel:+917067512315",
      color: "text-green-400",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Gwalior, Madhya Pradesh, India",
      href: "#",
      color: "text-blue-400",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      href: "https://github.com/27Naman2004",
      color: "hover:text-white",
      username: "@27Naman2004",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/naman-katare-916214300",
      color: "hover:text-blue-400",
      username: "naman-katare-916214300",
    },
    {
      icon: FiMail,
      name: "Email",
      href: "mailto:katare2004@gmail.com",
      color: "hover:text-red-400",
      username: "katare2004@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-float will-change-gpu pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-float-delayed will-change-gpu pointer-events-none" />

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
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 will-change-gpu"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on
                interesting projects, or simply have a conversation about
                technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 card-glass rounded-xl hover:border-accent transition-all duration-300 group select-none"
                >
                  <div
                    className={`p-3 rounded-xl bg-card-secondary border border-card-border ${info.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      {info.title}
                    </div>
                    <div className="font-bold group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links - Optimized static list */}
            <div className="space-y-4 pt-4 border-t border-card-border">
              <h4 className="text-lg font-bold text-gradient">
                Connect on Social
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 card-glass rounded-xl transition-all duration-300 group hover:border-accent ${social.color}`}
                  >
                    <div className="p-3 rounded-xl bg-card-secondary border border-card-border group-hover:scale-110 transition-transform duration-300">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">{social.name}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 will-change-gpu"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                    <FiUser className="mr-2 text-accent" size={16} />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                    <FiMail className="mr-2 text-primary" size={16} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                  <FiMessageSquare className="mr-2 text-accent" size={16} />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                  <FiMessageSquare className="mr-2 text-primary" size={16} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none text-foreground"
                  placeholder="Tell me more about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-hero flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed will-change-gpu shadow-md font-bold"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="card-glass p-8 will-change-gpu">
            <FiCheck className="text-4xl text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm currently open to new opportunities and exciting projects.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:katare2004@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-hero inline-flex items-center gap-2 will-change-gpu shadow-md"
              >
                <FiMail size={20} />
                Email Me Directly
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Naman_Katare_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary inline-flex items-center gap-2 will-change-gpu"
              >
                <FiUser size={20} />
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
