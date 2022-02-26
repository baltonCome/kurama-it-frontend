import React from 'react';
import Header from '../components/Header';
import ForEmployers from '../components/ForEmployers';
import Skills from '../components/Skills';
import ForSeekers from '../components/ForSeekers';
import WhyKurama from '../components/WhyKurama';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <ForEmployers />
      <Skills/>
      <ForSeekers/>
      <WhyKurama />
      <Feedbacks />
      <Footer />
    </>
  )
}

export default Home;