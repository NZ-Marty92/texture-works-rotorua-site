import { Award, Users, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">
              About <span className="text-gradient">Texture Works</span>
            </h2>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Bringing European artisanal techniques to New Zealand homes with 
              precision, passion, and uncompromising quality.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-up">
              <h3 className="text-2xl font-semibold text-charcoal mb-6">
                Craftsmanship Meets Innovation
              </h3>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                At Texture Works, we specialize in premium venetian plaster and micro cement 
                applications that transform ordinary spaces into extraordinary experiences. 
                Our team combines traditional European techniques with modern innovations 
                to deliver finishes that are both timeless and contemporary.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Based in the heart of Rotorua, we serve clients throughout the Bay of Plenty 
                region, bringing luxury finishes to residential and commercial projects 
                of all scales.
              </p>
            </div>

            {/* Stats */}
            <div className="fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-earth-warm text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-charcoal mb-2">50+</h4>
                  <p className="text-charcoal-light">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="bg-earth-warm text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-charcoal mb-2">100%</h4>
                  <p className="text-charcoal-light">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="bg-earth-warm text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-charcoal mb-2">5+</h4>
                  <p className="text-charcoal-light">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-elegant fade-up">
            <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
              Why Choose Texture Works?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-charcoal mb-3">Premium Materials</h4>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  We use only the finest imported materials and eco-friendly products 
                  for lasting beauty and sustainability.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal mb-3">Expert Application</h4>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Our skilled artisans bring years of experience and meticulous 
                  attention to detail to every project.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal mb-3">Custom Solutions</h4>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Every project is unique. We work closely with you to create 
                  bespoke finishes that reflect your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;