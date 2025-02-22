import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Mission from './components/Mission';
import BreadCrumb from './components/BreadCrumb';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Mission />
      <BreadCrumb />
      <Footer />
    </div>
  );
};

export default App;