import Head from 'next/head';
import Companies from '../components/sections/Companies';
import Hero1 from '../components/sections/Hero1';
import Pricing from '../components/sections/Pricing';
import Questions from '../components/sections/Questions';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import GetStarted from '../components/sections/GetStarted';
import Features from '../components/sections/Features';
import Content from '../components/sections/Content';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero1 />
      <Companies />
      <Content />
      <Features />
      <GetStarted />
      <Testimonials />
      <Questions />
      <Pricing />
      <CallToAction />
    </>
  );
}
