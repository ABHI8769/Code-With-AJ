import React from 'react'
import java from '../../assets/Java.webp'
import react from '../../assets/react.jpg'
import node from '../../assets/Node.png'
import mongo from '../../assets/MognoDb.png'
import express from '../../assets/express.webp'
import sql from '../../assets/mysql.png'

export function TechStack() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 md:px-0">
        <div className="my-4">
          <h1 className="inline-flex w-full items-center justify-center text-3xl text-orange-700">Technical Stack </h1>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={java}
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-semibold text-white">Java</h1>
                <h6 className="text-base text-white">Programming Language</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={react}
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-semibold text-white">React JS</h1>
                <h6 className="text-base text-white">Frontend Developement</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={node}
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-semibold text-white">Node JS</h1>
                <h6 className="text-base text-white">Backend Development</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={express}
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-semibold text-white">Express JS</h1>
                <h6 className="text-base text-white">Backend Developement</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={mongo}
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-semibold text-white">MongoDB</h1>
                <h6 className="text-base text-white">Database</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-start">
            <div
              className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                src={sql}
                alt=""
                className="z-0 h-full w-full rounded-[10px] object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h1 className="text-xl font-semibold text-white">MYSQL</h1>
                <h6 className="text-base text-white">Database</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStack
