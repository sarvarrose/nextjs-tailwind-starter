import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <nav className="relative z-50 h-24 select-none">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <Link href="/">
            <a className="inline-block py-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-gray-900">
                <span>tails</span>
                <span className="text-indigo-600">.</span>
              </span>
            </a>
          </Link>
        </div>
        <div
          className={`top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex ${
            showMenu ? 'flex fixed' : 'hidden'
          }`}
        >
          <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            <Link href="/">
              <a className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">
                tails<span className="text-indigo-600">.</span>
              </a>
            </Link>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <Link href="/">
                <a
                  className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${
                    router.asPath == '/'
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  Home
                </a>
              </Link>
              <Link href="/pricing">
                <a
                  className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${
                    router.asPath == '/pricing'
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  Pricing
                </a>
              </Link>
              <Link href="/about-us">
                <a
                  className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${
                    router.asPath == '/about-us'
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  About Us
                </a>
              </Link>
              <Link href="/contact-us">
                <a
                  className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${
                    router.asPath == '/contact-us'
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <Link href={`tel:${process.env.NEXT_PUBLIC_TFN}`}>
                <a className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">
                  {process.env.NEXT_PUBLIC_TFN}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
        >
          <svg
            className={`w-6 h-6 text-gray-700  ${showMenu ? 'hidden' : ''}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            className={`w-6 h-6 text-gray-700 ${showMenu ? '' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
