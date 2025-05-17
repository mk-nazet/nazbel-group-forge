
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const AviationDefense = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Aviation & Defense"
        description="Specialized solutions for aviation and defense sectors with precision and reliability"
        backgroundImage="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' },
          { label: 'Aviation & Defense' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Aviation & Defense Page</h2>
          <p>This is a placeholder for the Aviation & Defense page. This page will showcase the aviation and defense services offered by Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AviationDefense;
