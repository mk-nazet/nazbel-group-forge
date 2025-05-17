
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Careers at Nazbel Group"
        description="Join our team of talented professionals and build a rewarding career"
        backgroundImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Careers' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Careers Page</h2>
          <p>This is a placeholder for the Careers page. This page will list job opportunities at Nazbel Group and information about the company culture.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
