import * as React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
// other imports

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header />
      <Hero />
      <WhyUs />
      <Services />
      {/* Rest of your page content */}
    </main>
  );
};

export default IndexPage;