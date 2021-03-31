import Head from 'next/head';
import CallToAction from '../components/sections/CallToAction';
import Companies from '../components/sections/Companies';
import CompanyInfo from '../components/sections/CompanyInfo';
import Content from '../components/sections/Content';

function about_us() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <CompanyInfo />
      <Content />
      <Companies />
      <CallToAction />
    </>
  );
}

export default about_us;
