import Link from 'next/link';

function Hero1() {
  return (
    <section className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Beautiful Pages to</span>
                <span className="block text-indigo-600 xl:inline">
                  Tell Your Story!
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                It's never been easier to build beautiful websites that convey
                your message and tell your story.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <Link href="/contact-us">
                  <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </Link>
                <Link href="/pricing">
                  <a className="flex items-center px-6 py-3 text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Pricing
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img
                alt=""
                src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero1;
