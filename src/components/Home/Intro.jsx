'use client'

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Intro() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-orange-800     sm:text-6xl">
              This is a right place for Full Stack Developers and DSA Enthusiast.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here the Repo's will clear your under the hood concepts of the technologies and  will give you reason to love coding
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to='Login'
                  className={(isActive) =>
                  `block py-2 pr-4 pl-3 duration-200 
                  ${isActive ? "text-orange-700" : "text-gray-700"}
                  rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`
                  }
                >
                View docs
                </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/SignUp'
                    className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`
                    }
                  >
                  Get Started
                  </NavLink>
                </li>
            </ul>
              {/* <button
                type="button"
                onClick={() => { window.location.href = '/login'; }}
                className="rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Docs
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = '/SignUp'; }}
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
