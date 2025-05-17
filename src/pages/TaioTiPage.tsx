
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const TaioTiPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="TaioTi (IoT & IT Devices)"
        description="Smart devices and IoT solutions transforming businesses through connectivity"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' },
          { label: 'TaioTi' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">TaioTi Page</h2>
          <p>This is a placeholder for the TaioTi page. This page will showcase IoT and IT device solutions offered by Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TaioTiPage;
