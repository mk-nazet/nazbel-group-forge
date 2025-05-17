
import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Lightbulb, Users } from 'lucide-react';
import Card3D from '../components/Card3D';

const AboutPage = () => {
  const companyOverviewRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Observer for fade-in-up animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const createObserver = (ref: React.RefObject<HTMLElement>, animationClass: string) => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      }, observerOptions);
      
      observer.observe(ref.current);
      observers.push(observer);
    };
    
    if (companyOverviewRef.current) {
      createObserver(companyOverviewRef, 'animate-fade-in');
    }
    
    if (valuesRef.current) {
      createObserver(valuesRef, 'animate-fade-in');
    }
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col perspective-1000">
      <NavBar />
      
      <PageHeader 
        title="About Nazbel Group"
        description="A leading engineering conglomerate delivering innovative solutions across multiple industries."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About Us' },
        ]}
      />
      
      {/* Company Overview */}
      <section className="py-20" ref={companyOverviewRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transform hover:scale-105 transition-transform duration-500">
              <Card3D>
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                  alt="Nazbel Group Headquarters" 
                  className="rounded-lg shadow-xl"
                />
              </Card3D>
            </div>
            <div className="transform hover:-translate-y-2 transition-all duration-500">
              <SectionTitle 
                title="Our Story"
                subtitle="Founded in 2005, Nazbel Group has grown to become a leading engineering conglomerate in Bangladesh."
                alignment="left"
              />
              <p className="text-gray-600 mb-6">
                What started as a small engineering firm has evolved into a diversified conglomerate with expertise in
                Fireproofing Solutions, IoT & IT Devices, Software Development, and Aviation & Defense. Our commitment
                to quality, innovation, and customer satisfaction has been the driving force behind our success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card3D className="bg-white p-4 rounded-lg shadow-lg" intensity={10}>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-nazbel-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Our Mission</h4>
                      <p className="text-sm text-gray-600">To deliver innovative engineering solutions that meet the highest standards of safety and quality.</p>
                    </div>
                  </div>
                </Card3D>
                <Card3D className="bg-white p-4 rounded-lg shadow-lg" intensity={10}>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-nazbel-green mr-2 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Our Vision</h4>
                      <p className="text-sm text-gray-600">To be the leading engineering conglomerate in South Asia, recognized for excellence and innovation.</p>
                    </div>
                  </div>
                </Card3D>
              </div>
              <div className="flex space-x-4">
                <Button asChild className="btn-primary transform hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                  <Link to="/about/story-mission">Read Our Full Story</Link>
                </Button>
                <Button asChild className="btn-outline transform hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-gray-50" ref={valuesRef}>
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide our business and define our culture."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card3D className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-nazbel-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-nazbel-red" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-600">
                Safety is our top priority in all operations, ensuring the wellbeing of our employees, clients, and the environment.
              </p>
            </Card3D>
            
            <Card3D className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-nazbel-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-nazbel-red" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek innovative solutions to address complex challenges and drive industry advancements.
              </p>
            </Card3D>
            
            <Card3D className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-nazbel-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-nazbel-red" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, delivering the highest quality solutions to our clients.
              </p>
            </Card3D>
            
            <Card3D className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-nazbel-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-nazbel-red" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards, honesty, and transparency.
              </p>
            </Card3D>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-secondary transform hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
              <Link to="/about/values">Learn More About Our Values</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto">
          <SectionTitle 
            title="Meet Our Leadership"
            subtitle="Experienced professionals leading Nazbel Group towards continuous growth and innovation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card3D className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="CEO" 
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Mohammed Rahman</h3>
              <p className="text-nazbel-red mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 mb-4">
                With over 25 years of industry experience, Mohammed leads Nazbel Group with a vision for innovation and excellence.
              </p>
            </Card3D>
            
            <Card3D className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="COO" 
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Fatima Ahmed</h3>
              <p className="text-nazbel-red mb-3">Chief Operating Officer</p>
              <p className="text-gray-600 mb-4">
                Fatima oversees operations across all business units, ensuring efficiency and quality in service delivery.
              </p>
            </Card3D>
            
            <Card3D className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                  alt="CTO" 
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Karim Hussain</h3>
              <p className="text-nazbel-red mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 mb-4">
                Karim drives technological innovation at Nazbel Group, leading our digital transformation initiatives.
              </p>
            </Card3D>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="btn-primary transform hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
              <Link to="/about/leadership">View Full Leadership Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
