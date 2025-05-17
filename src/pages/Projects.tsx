
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Our Projects"
        description="Explore our successful projects across various industries"
        backgroundImage="https://images.unsplash.com/photo-1664574654529-b60630f33fdb"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Projects' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Projects Page</h2>
          <p>This is a placeholder for the Projects page. This page will showcase the portfolio of projects completed by Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
