
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Values = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Our Values"
        description="The core principles that guide Nazbel Group"
        backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About Us', link: '/about' },
          { label: 'Our Values' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Values Page</h2>
          <p>This is a placeholder for the Our Values page. This page will detail the core values of Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Values;
