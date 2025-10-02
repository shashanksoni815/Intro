import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function GetInTouch() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shashanksoni815@gmail.com",
      link: "mailto:shashanksoni815@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 88390 80214",
      link: "tel:+918839080214"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Indore, Madhya Pradesh",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-7 h-7" />,
      label: "GitHub",
      link: "https://github.com/yourusername",
      color: "hover:bg-blue-500/20 hover:text-blue-400"
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-500/20 hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-7 h-7" />,
      label: "Twitter",
      link: "https://twitter.com/yourusername",
      color: "hover:bg-purple-500/20 hover:text-purple-400"
    }
  ];

  return (
    <div id="getInTouch" className="w-full text-white px-6 py-20 relative">
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Let's build something amazing together! Feel free to reach out for collaborations, 
            opportunities, or just a friendly chat about web development.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {contact.link ? (
                <a
                  href={contact.link}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="text-center space-y-6">
          <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
            Connect With Me
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-xl hover:border-blue-500/50 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Optional: Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="mailto:shashank.soni@example.com"
            className="inline-block group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10">Send Me a Message</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </a>
        </div>

      </div>
    </div>
  );
}