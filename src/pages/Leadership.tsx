
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Leadership Team"
        description="Meet the experienced professionals leading Nazbel Group"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About Us', link: '/about' },
          { label: 'Leadership Team' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Leadership Team Page</h2>
          <p>This is a placeholder for the Leadership Team page. This page will showcase the management team of Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Leadership;
