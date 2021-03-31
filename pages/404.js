import Link from 'next/link';

function Custom404() {
  return (
    <section className="px-2 pt-5 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            404{' '}
            <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">
              Page Not Found
            </span>
          </span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          The page you are looking for does not exist!
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <Link href="/">
            <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Custom404;
