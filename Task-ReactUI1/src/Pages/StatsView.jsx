import React from "react";

const StatsView = () => {
  return (
    <div className="w-full py-20 px-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-4 justify-center gap-100">
        {/* PROJECT Stat */}
        <div className="flex flex-col items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15"
              y="20"
              width="50"
              height="40"
              rx="2"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
            <circle cx="20" cy="26" r="1.5" fill="#35b8b2" />
            <circle cx="26" cy="26" r="1.5" fill="#35b8b2" />
            <circle cx="32" cy="26" r="1.5" fill="#35b8b2" />
            <line
              x1="15"
              y1="32"
              x2="65"
              y2="32"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
            <path
              d="M55 50 L65 60 L70 55"
              stroke="#35b8b2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-white text-sm font-medium tracking-widest uppercase">
            PROJECT
          </p>
          <p className="text-[#35b8b2] text-5xl font-bold">300+</p>
        </div>

        {/* PLEASURE Stat */}
        <div className="flex flex-col items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15"
              y="50"
              width="10"
              height="15"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
            <rect
              x="30"
              y="40"
              width="10"
              height="25"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
            <rect
              x="45"
              y="30"
              width="10"
              height="35"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
            <rect
              x="60"
              y="20"
              width="10"
              height="45"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
            <line
              x1="10"
              y1="68"
              x2="75"
              y2="68"
              stroke="#35b8b2"
              strokeWidth="2.5"
            />
          </svg>
          <p className="text-white text-sm font-medium tracking-widest uppercase">
            PLEASURE
          </p>
          <p className="text-[#35b8b2] text-5xl font-bold">8,9</p>
        </div>

        {/* CUSTOMER Stat */}
        <div className="flex flex-col items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="30" r="12" stroke="#35b8b2" strokeWidth="2.5" />
            <path
              d="M20 65 C20 50, 30 45, 40 45 C50 45, 60 50, 60 65"
              stroke="#35b8b2"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-white text-sm font-medium tracking-widest uppercase">
            CUSTOMER
          </p>
          <p className="text-[#35b8b2] text-5xl font-bold">3000+</p>
        </div>

        {/* TEAM MEMBERS Stat */}
        <div className="flex flex-col items-center gap-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="25" r="8" stroke="#35b8b2" strokeWidth="2.5" />
            <circle cx="25" cy="32" r="7" stroke="#35b8b2" strokeWidth="2.5" />
            <circle cx="55" cy="32" r="7" stroke="#35b8b2" strokeWidth="2.5" />
            <path
              d="M28 60 C28 50, 33 45, 40 45 C47 45, 52 50, 52 60"
              stroke="#35b8b2"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M15 60 C15 53, 18 48, 25 48"
              stroke="#35b8b2"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M65 60 C65 53, 62 48, 55 48"
              stroke="#35b8b2"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-white text-sm font-medium tracking-widest uppercase">
            TEAM MEMBERS
          </p>
          <p className="text-[#35b8b2] text-5xl font-bold">23</p>
        </div>
      </div>
    </div>
  );
};

export default StatsView;
