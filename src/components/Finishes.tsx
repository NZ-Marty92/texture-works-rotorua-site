import { Sparkles, Layers, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Finishes = () => {
  const finishes = [
    {
      icon: Sparkles,
      title: "Polished Plaster",
      description: "Smooth, lustrous finish with depth and character",
      details: "Our signature polished plaster creates stunning feature walls with a mirror-like finish that reflects light beautifully. Perfect for modern interiors seeking sophisticated elegance.",
      features: ["High durability", "Water resistant", "Easy maintenance", "Luxury appearance"]
    },
    {
      icon: Layers,
      title: "Micro Cement",
      description: "Seamless, contemporary finish for walls and floors",
      details: "Ultra-thin micro cement coating provides a seamless, industrial-chic finish. Ideal for bathrooms, kitchens, and modern living spaces where continuity is key.",
      features: ["Seamless application", "Waterproof", "Anti-slip options", "Versatile colors"]
    },
    {
      icon: Palette,
      title: "Custom Textures",
      description: "Bespoke artistic finishes tailored to your vision",
      details: "From subtle textures to bold artistic statements, our custom finishes are created specifically for your space. Let us bring your unique vision to life.",
      features: ["Unlimited creativity", "Artistic patterns", "Color matching", "Personal consultation"]
    }
  ];

  return (
    <section id="finishes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">
              Our Signature <span className="text-gradient">Finishes</span>
            </h2>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Each finish is meticulously crafted to bring texture, depth, and 
              sophisticated beauty to your space.
            </p>
          </div>

          {/* Finishes Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {finishes.map((finish, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-elegant transition-smooth fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-warm text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <finish.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-charcoal">
                    {finish.title}
                  </CardTitle>
                  <CardDescription className="text-charcoal-light">
                    {finish.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-charcoal-light leading-relaxed">
                    {finish.details}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {finish.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="text-charcoal-light text-sm flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-earth-warm rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-up">
            <p className="text-charcoal-light mb-6">
              Not sure which finish is right for your project?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-earth-warm text-white rounded-lg hover:bg-earth-warm/90 transition-smooth shadow-soft"
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finishes;