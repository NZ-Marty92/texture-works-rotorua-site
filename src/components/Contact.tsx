import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Rotorua, Bay of Plenty\nNew Zealand",
      link: "https://maps.google.com/?q=Rotorua,New+Zealand"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "0800 83 83 83",
      link: "tel:0800838383"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@textureworks.co.nz",
      link: "mailto:info@textureworks.co.nz"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Ready to transform your space? Contact us for a free consultation 
              and discover how our premium finishes can elevate your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-up">
              <Card className="shadow-elegant border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-input focus:ring-earth-warm focus:border-earth-warm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-input focus:ring-earth-warm focus:border-earth-warm"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-input focus:ring-earth-warm focus:border-earth-warm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="border-input focus:ring-earth-warm focus:border-earth-warm"
                        placeholder="Tell us about your project, preferred finish type, timeline, and any specific requirements..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-earth-warm hover:bg-earth-warm/90 text-white py-6 text-lg transition-smooth shadow-soft"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 fade-up">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-soft border-border hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-earth-warm text-white p-3 rounded-lg flex-shrink-0">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-charcoal-light hover:text-earth-warm transition-smooth whitespace-pre-line"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-charcoal-light whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="shadow-soft border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal mb-4">Find Us in Rotorua</h3>
                  <div className="bg-earth-subtle rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-earth-warm mx-auto mb-3" />
                      <p className="text-charcoal-light">Interactive Map</p>
                      <p className="text-sm text-charcoal-light mt-1">
                        Serving Rotorua & Bay of Plenty
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;