
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Our Services"
        description="Comprehensive solutions across multiple industries"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Services Page</h2>
          <p>This is a placeholder for the Services page. This page will showcase all the services offered by Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
