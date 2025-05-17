
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const TekIndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="TekIndex (Software Development)"
        description="Custom software solutions tailored to your business requirements"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' },
          { label: 'TekIndex' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">TekIndex Page</h2>
          <p>This is a placeholder for the TekIndex page. This page will detail the software development services offered by Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TekIndexPage;
