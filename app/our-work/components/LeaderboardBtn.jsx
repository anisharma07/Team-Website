import React from "react";

const LeaderboardBtn = ({ leaderLink }) => {
  return (
    <a href={leaderLink} className="cursor-pointer">
      {" "}
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.2697 15.0747C30.4341 15.0495 30.5753 14.9442 30.6463 14.7938L33.1839 9.41421L33.184 9.41426L33.1884 9.40436C33.2176 9.33885 33.2652 9.28321 33.3253 9.24416C33.3855 9.20511 33.4556 9.18433 33.5273 9.18433C33.5991 9.18433 33.6692 9.20511 33.7294 9.24416C33.7895 9.28321 33.8371 9.33885 33.8662 9.40436L33.8661 9.40441L33.8708 9.4144L36.4113 14.7939C36.4823 14.9443 36.6234 15.0495 36.7877 15.0747L42.4603 15.9429C42.4603 15.9429 42.4604 15.9429 42.4604 15.9429C42.7567 15.9884 42.9334 16.417 42.6711 16.6836L42.6703 16.6843L38.5665 20.8718C38.4551 20.9856 38.4045 21.1455 38.4302 21.3026L39.3988 27.2144C39.3988 27.2145 39.3988 27.2146 39.3988 27.2147C39.4293 27.4036 39.3518 27.558 39.2356 27.6465C39.1219 27.7331 38.9812 27.7522 38.844 27.6766L38.8436 27.6763L33.7683 24.8847C33.6183 24.8021 33.4364 24.8021 33.2864 24.8847L28.2114 27.6762C28.0758 27.7507 27.9344 27.7322 27.8196 27.645C27.7028 27.5564 27.6256 27.4026 27.6559 27.2147C27.6559 27.2146 27.6559 27.2145 27.6559 27.2144L28.6245 21.3026C28.6502 21.1455 28.5996 20.9856 28.4882 20.8718L24.3844 16.6843L24.3827 16.6826C24.1202 16.4173 24.2965 15.9883 24.5919 15.9428L30.2697 15.0747ZM56.9773 58.4316H42.4023V50.8358C42.4023 50.5242 42.5261 50.2253 42.7465 50.005C42.9668 49.7846 43.2657 49.6608 43.5773 49.6608H56.9773C57.289 49.6608 57.5878 49.7846 57.8082 50.005C58.0285 50.2253 58.1523 50.5242 58.1523 50.8358V57.2566C58.1523 57.5683 58.0285 57.8671 57.8082 58.0875C57.5878 58.3078 57.289 58.4316 56.9773 58.4316ZM41.4023 50.8358V58.4316H25.6523V45.2525V35.4816C25.6523 35.17 25.7761 34.8711 25.9965 34.6508C26.2168 34.4304 26.5157 34.3066 26.8273 34.3066H40.2273C40.539 34.3066 40.8378 34.4304 41.0582 34.6508C41.2785 34.8711 41.4023 35.17 41.4023 35.4816V50.8358ZM24.6523 45.2525V58.4316H10.0773C9.76571 58.4316 9.46685 58.3078 9.24649 58.0875C9.02614 57.8671 8.90234 57.5683 8.90234 57.2566V45.2525C8.90234 44.9408 9.02614 44.642 9.24649 44.4216C9.46685 44.2013 9.76571 44.0775 10.0773 44.0775H23.4773C23.789 44.0775 24.0878 44.2013 24.3082 44.4216C24.5285 44.642 24.6523 44.9408 24.6523 45.2525Z"
          fill="url(#paint0_linear_1738_112)"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1738_112"
            x1="8.40234"
            y1="8.68433"
            x2="58.6523"
            y2="82.5486"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFA800" />
            <stop offset="1" stopColor="#990000" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};

export default LeaderboardBtn;
