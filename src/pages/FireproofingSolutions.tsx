
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const FireproofingSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Fireproofing Solutions"
        description="Comprehensive passive fire protection systems ensuring safety and compliance"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' },
          { label: 'Fireproofing Solutions' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Fireproofing Solutions Page</h2>
          <p>This is a placeholder for the Fireproofing Solutions page. This page will detail the fireproofing services offered by Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FireproofingSolutions;
