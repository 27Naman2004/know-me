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

  const EMAIL_SERVICE_ID = "service_eapechi";
  const EMAIL_TEMPLATE_ID = "template_mzg9u09";
  const EMAIL_PUBLIC_KEY = "hKeakPMxIXKcCf2ZB";

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
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float-delayed" />

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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
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
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 card-glass rounded-xl hover:border-accent transition-all duration-300 group"
                >
                  <div
                    className={`p-3 rounded-xl bg-card-secondary border border-card-border ${info.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">
                      {info.title}
                    </div>
                    <div className="font-semibold group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gradient">
                Connect on Social
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`flex items-center space-x-4 p-4 card-glass rounded-xl transition-all duration-300 group ${social.color}`}
                  >
                    <div className="p-3 rounded-xl bg-card-secondary border border-card-border group-hover:scale-110 transition-transform duration-300">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label className="flex items-center text-sm font-medium mb-2">
                    <FiUser className="mr-2" size={16} />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label className="flex items-center text-sm font-medium mb-2">
                    <FiMail className="mr-2" size={16} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="flex items-center text-sm font-medium mb-2">
                  <FiMessageSquare className="mr-2" size={16} />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="flex items-center text-sm font-medium mb-2">
                  <FiMessageSquare className="mr-2" size={16} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me more about your project or idea..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-hero flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card-glass p-8">
            <FiCheck className="text-4xl text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm currently open to new opportunities and exciting projects.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:katare2004@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero inline-flex items-center gap-2"
              >
                <FiMail size={20} />
                Email Me Directly
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Naman_Katare_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
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
