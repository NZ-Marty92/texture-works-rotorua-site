import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/textureworks",
      label: "Follow us on Facebook"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/textureworks",
      label: "Follow us on Instagram"
    },
    {
      icon: Mail,
      href: "mailto:info@textureworks.co.nz",
      label: "Email us"
    },
    {
      icon: Phone,
      href: "tel:+647xxxxxxx",
      label: "Call us"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Texture<span className="text-earth-light"> Works</span>
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Premium venetian plaster and micro cement specialists 
                serving Rotorua and the Bay of Plenty region.
              </p>
              <p className="text-white/60 text-sm">
                Transform your space with artisanal finishes that blend 
                traditional techniques with modern innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a 
                  href="#about" 
                  className="block text-white/80 hover:text-earth-light transition-smooth text-sm"
                >
                  About Us
                </a>
                <a 
                  href="#finishes" 
                  className="block text-white/80 hover:text-earth-light transition-smooth text-sm"
                >
                  Our Finishes
                </a>
                <a 
                  href="#gallery" 
                  className="block text-white/80 hover:text-earth-light transition-smooth text-sm"
                >
                  Portfolio
                </a>
                <a 
                  href="#contact" 
                  className="block text-white/80 hover:text-earth-light transition-smooth text-sm"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 mb-6">
                <p className="text-white/80 text-sm">
                  <span className="font-medium">Location:</span><br />
                  Rotorua, New Zealand
                </p>
                <p className="text-white/80 text-sm">
                  <span className="font-medium">Email:</span><br />
                  info@textureworks.co.nz
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 hover:bg-earth-warm p-2 rounded-lg transition-smooth"
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Texture Works. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <button
                  onClick={scrollToTop}
                  className="text-white/60 hover:text-earth-light transition-smooth text-sm"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;