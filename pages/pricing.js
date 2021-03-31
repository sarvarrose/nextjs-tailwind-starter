import Head from 'next/head';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';

function pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Pricing />
      <Features />
    </>
  );
}

export default pricing;
