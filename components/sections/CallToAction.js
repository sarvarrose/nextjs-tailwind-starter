import Link from 'next/link';

function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
          The New Standard for Design
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Use our award-winning tools to help you maximize your profits. We've
          uncovered the correct recipe for converting visitors into customers.
        </p>
        <div className="flex justify-center mt-8 space-x-3">
          <Link href="/contact-us">
            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-700">
              Contact Us Today
            </a>
          </Link>
          <Link href="/about-us">
            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200">
              About Us
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
