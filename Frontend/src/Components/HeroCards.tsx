import React from 'react';

const HomeCards: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 relative">
            <img
              src="/home-feature.png"
              width={650}
              height={678}
              alt="Feature img"
              className="relative z-0"
            />

            {/* Top right floating box */}
            <div className="absolute top-[-36px] right-0 md:right-[-36px] shadow-lg rounded-lg p-4 bg-white z-10 w-[190px]">
              <h5 className="text-lg font-bold mb-2">Lorem ipsum dolor</h5>

              {/* UI/UX Design Progress */}
              <div className="mb-2">
                <h6 className="text-sm text-gray-500">UI/UX Design</h6>
                <div className="h-1.5 w-full bg-gray-200 rounded-md">
                  <div
                    className="h-full bg-pink-400 rounded-md"
                    style={{ width: '65%' }}
                  />
                </div>
              </div>

              {/* Mobile Development Progress */}
              <div className="mb-2">
                <h6 className="text-sm text-gray-500">Mobile Development</h6>
                <div className="h-1.5 w-full bg-gray-200 rounded-md">
                  <div
                    className="h-full bg-teal-400 rounded-md"
                    style={{ width: '40%' }}
                  />
                </div>
              </div>

              {/* Web Development Progress */}
              <div>
                <h6 className="text-sm text-gray-500">Web Development</h6>
                <div className="h-1.5 w-full bg-gray-200 rounded-md">
                  <div
                    className="h-full bg-blue-500 rounded-md"
                    style={{ width: '50%' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom left floating box */}
            <div className="absolute bottom-[-12px] left-0 md:left-[-24px] shadow-lg rounded-lg p-4 bg-white z-10 text-center">
              <h6 className="font-bold">Lorem ipsum</h6>
              <p className="text-sm text-gray-400 mb-2">Lorem ipsum</p>
              <div className="relative h-[85px] w-[85px] mx-auto flex items-center justify-center">
                <h4 className="text-green-400  text-4xl font-bold">75%</h4>
                <div
                  className="absolute h-[85px] w-[85px] border-2 border-gray-300 rounded-full"
                  style={{ transform: 'rotate(-96deg)' }}
                />
                <div
                  className="absolute h-[85px] w-[85px] border-2 border-green-400 rounded-full"
                  style={{ transform: 'rotate(96deg)' }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight ml-0 md:ml-4 mt-2 mb-6">
              Make your{' '}
              <span className="text-primary relative inline-block text-textmain">
                Learning
                <span className="absolute top-12 left-2 transform rotate-3">
                  <img
                    src="/headline-curve.svg"
                    alt="Headline curve"
                    className="w-[175px] h-auto"
                  />
                </span>
              </span>{' '}
              Enjoyable
            </h2>

            <p className="text-gray-500 mb-6 ml-0 md:ml-4">
              Set the way of learning according to your wishes with some of the benefits that we provide, ensuring you enjoy the lessons we offer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-2">
              {/* Card 1: Easy Accessible */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-book"></i> {/* Replace with icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold  mb-1 text-textsecond">
                    Easy Accessible
                  </h6>
                  <p className="text-sm text-gray-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </p>
                </div>
              </div>

              {/* Card 2: More Affordable Cost */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-dollar-sign"></i> {/* Replace with icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold  mb-1 text-textsecond">
                    More Affordable Cost
                  </h6>
                  <p className="text-sm text-gray-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </p>
                </div>
              </div>

              {/* Card 3: Flexible Study Time */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-clock"></i> {/* Replace with icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold  mb-1 text-textsecond">
                    Flexible Study Time
                  </h6>
                  <p className="text-sm text-gray-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </p>
                </div>
              </div>

              {/* Card 4: Consultation with Mentor */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-user"></i> {/* Replace with icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold  mb-1 text-textsecond">
                    Consultation with Mentor
                  </h6>
                  <p className="text-sm text-gray-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
