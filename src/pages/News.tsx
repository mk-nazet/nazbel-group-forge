
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <PageHeader 
        title="News & Insights"
        description="Stay updated with the latest news, articles, and insights from Nazbel Group"
        backgroundImage="https://images.unsplash.com/photo-1585829365295-ab7cd400c167"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'News & Insights' },
        ]}
      />
      
      <div className="flex-grow py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">News & Insights Page</h2>
          <p>This is a placeholder for the News & Insights page. This page will feature articles, press releases, and industry insights from Nazbel Group.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
