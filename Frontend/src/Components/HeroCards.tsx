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
              <h5 className="text-lg font-bold mb-2">Career Progress</h5>

              {/* Career Analysis Progress */}
              <div className="mb-2">
                <h6 className="text-sm text-gray-500">Career Analysis</h6>
                <div className="h-1.5 w-full bg-gray-200 rounded-md">
                  <div
                    className="h-full bg-pink-400 rounded-md"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>

              {/* Skill Development Progress */}
              <div className="mb-2">
                <h6 className="text-sm text-gray-500">Skill Development</h6>
                <div className="h-1.5 w-full bg-gray-200 rounded-md">
                  <div
                    className="h-full bg-teal-400 rounded-md"
                    style={{ width: '50%' }}
                  />
                </div>
              </div>

              {/* Job Readiness Progress */}
              <div>
                <h6 className="text-sm text-gray-500">Job Readiness</h6>
                <div className="h-1.5 w-full bg-gray-200 rounded-md">
                  <div
                    className="h-full bg-blue-500 rounded-md"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom left floating box */}
            <div className="absolute bottom-[-12px] left-0 md:left-[-24px] shadow-lg rounded-lg p-4 bg-white z-10 text-center">
              <h6 className="font-bold">Your Progress</h6>
              <p className="text-sm text-gray-400 mb-2">Career Goal Completion</p>
              <div className="relative h-[85px] w-[85px] mx-auto flex items-center justify-center">
                <h4 className="text-green-400  text-4xl font-bold">80%</h4>
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
            <h2 className="text-4xl md:text-4xl font-bold leading-tight ml-0 md:ml-4 mt-2 mb-6">
              Make your{' '}
              <span className="text-primary relative inline-block text-textmain">
                Career Journey
                <span className="absolute top-12 left-2 transform rotate-3">
                  <img
                    src="/headline-curve.svg"
                    alt="Headline curve"
                    className="w-[175px] h-auto"
                  />
                </span>
              </span>{' '}
              Exciting
            </h2>

            <p className="text-gray-500 mb-6 ml-0 md:ml-4">
              Tailor your career growth at your own pace with our AI-driven platform. Experience personalized learning and guidance to make your career journey exciting and fruitful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-2">
              {/* Card 1: Easy Access to Career Insights */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-chart-line"></i> {/* Career insights icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold mb-1 text-textsecond">
                    Easy Access to Career Insights
                  </h6>
                  <p className="text-sm text-gray-500">
                    Get up-to-date career trends and insights to stay ahead in the competitive job market.
                  </p>
                </div>
              </div>

              {/* Card 2: Affordable Learning Resources */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-dollar-sign"></i> {/* Affordable cost icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold mb-1 text-textsecond">
                    Affordable Learning Resources
                  </h6>
                  <p className="text-sm text-gray-500">
                    Access a wide range of affordable courses to develop your skills and advance your career.
                  </p>
                </div>
              </div>

              {/* Card 3: Flexible Study Schedule */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-clock"></i> {/* Flexible time icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold mb-1 text-textsecond">
                    Flexible Study Schedule
                  </h6>
                  <p className="text-sm text-gray-500">
                    Learn at your own pace with flexible study schedules that fit your lifestyle.
                  </p>
                </div>
              </div>

              {/* Card 4: 1-on-1 Mentor Guidance */}
              <div className="shadow-md rounded-lg p-4 flex items-center space-x-4">
                <div className="bg-primary text-white rounded-full p-2">
                  <i className="fas fa-user"></i> {/* Mentor icon */}
                </div>
                <div>
                  <h6 className="text-base font-semibold mb-1 text-textsecond">
                    1-on-1 Mentor Guidance
                  </h6>
                  <p className="text-sm text-gray-500">
                    Receive personalized mentorship from industry experts to guide your career decisions.
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
