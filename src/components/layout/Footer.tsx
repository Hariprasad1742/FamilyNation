import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/1FamilyNation"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/FamilyNation/61567746781108/"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/familynation"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#"
    }
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">FN</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">FamilyNation</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Supporting families through challenges with professional guidance, 
              community support, and evidence-based resources.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>San Francisco, CA, United States</p>
              <p>California</p>
              <p>Phone: +1 925-984-3173</p>
              <p>Email: johnspitters@familynation.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FamilyNation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;