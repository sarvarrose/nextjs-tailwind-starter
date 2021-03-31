import Head from 'next/head';
import CallToAction from '../components/sections/CallToAction';
import GetStarted from '../components/sections/GetStarted';

function contact_us() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <GetStarted />
      <CallToAction />
    </>
  );
}

export default contact_us;
