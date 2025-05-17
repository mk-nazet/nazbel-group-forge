
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const StoryMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="Our Story & Mission"
        description="The journey of Nazbel Group and our mission for the future"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About Us', link: '/about' },
          { label: 'Our Story & Mission' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Story & Mission Page</h2>
          <p>This is a placeholder for the Our Story & Mission page. This page will contain the detailed history and mission of Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoryMission;
