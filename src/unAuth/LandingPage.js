import React from 'react';
import './LandingPage.css';
import NavBar from './componets/NavBar';
import Bumpups from './componets/Bumpups';
import Timestamp from './componets/Timestamp';
import Footer from './componets/Footer';

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="landing-content">
        <h1 className="landing-title">Hello Landing Page</h1>
        <Bumpups />
        <Timestamp />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
