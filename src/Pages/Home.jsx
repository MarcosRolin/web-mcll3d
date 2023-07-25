import React from 'react'
import  {Hero}  from '../components/Hero/Hero';
import  {Footer}  from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Section } from '../components/Section/Section';

export const Home = () => {
  return (
    <div>
    <Header />
    <Section />
    <Hero />
    <Footer />
    </div>
  )
}

export default  Home;