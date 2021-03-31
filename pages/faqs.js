import Head from 'next/head';
import CallToAction from '../components/sections/CallToAction';
import Questions from '../components/sections/Questions';

function faqs() {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>
      <Questions />
      <CallToAction />
    </>
  );
}

export default faqs;
