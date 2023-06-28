import React, { useState, useEffect } from "react";
import Fetching from "../API/Fetching";

import LoaderUI from "./LoaderUI";
const MyComponent = () => {
  const [accessToken, setAccessToken] = useState("");
  const [bonuses, setBonuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const config = require("../API/config.json");
  const accessTokenUrl = config.accessTokenUrl;
  const bonusUrl = config.bonusesUrl;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessTokenData = await Fetching.getAccessToken(accessTokenUrl);
        const accessToken = accessTokenData.accessToken;
        setAccessToken(accessToken);

        if (accessToken) {
          const bonusesData = await Fetching.getBonuses(
            `${bonusUrl}${accessToken}`
          );
          setBonuses(bonusesData.data);
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const newDate = (str) => {
    const date = new Date(str);
    const day = String(date.getDate()).padStart(2, "0"); // Получаем день и добавляем ведущий ноль, если число меньше 10
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Получаем месяц и добавляем ведущий ноль, если число меньше 10
    const formattedDate = `${day}.${month} сгорит`;
    return formattedDate;
  };
  return (
    <div className="bonuses">
      <div className={isLoading === true ? "bonuses__block" : "hidden"}>
        <div className="bonuses__content">
          <h1>
            {bonuses ? `${bonuses.currentQuantity} бонусов` : "нет данных"}
          </h1>
          <div className="bonuses__content_box">
            <div>{bonuses ? newDate(bonuses.dateBurning) : "нет данных"} </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
              >
                <g clipPath="url(#clip0_1_48)">
                  <path
                    d="M3.6533 11.4134C2.46742 9.43863 3.13318 5.24933 5.83783 3.80468C6.55744 3.52587 7.14003 2.97078 7.45967 2.25937C7.7793 1.54796 7.81029 0.737409 7.54592 0.00299072C7.54592 0.00299072 9.82304 1.54372 8.73182 5.10783C7.6406 8.67194 9.58585 9.24959 9.58585 9.24959C9.14308 8.67691 8.93882 7.951 9.01684 7.22731C9.07406 6.72254 9.23962 6.23667 9.50185 5.80388C9.76408 5.3711 10.1166 5.0019 10.5346 4.72239C9.72838 7.61169 13.001 9.05211 13.001 12.5001C13.001 15.948 9.3955 17.003 9.3955 17.003C9.39635 16.3675 9.25093 15.7405 8.97081 15.1721C8.69068 14.6037 8.28362 14.1096 7.78208 13.7293C6.07399 12.4768 6.64402 9.54002 6.64402 9.54002C4.4595 12.7662 5.55282 17.004 5.55282 17.004C5.55282 17.004 4.55626 15.608 3.60756 15.4633C2.65885 15.3186 2.13664 13.9701 2.13664 13.9701C2.15057 14.4998 2.29186 15.0181 2.54823 15.4797C2.8046 15.9413 3.16828 16.3323 3.60756 16.6186C-3.74597 13.1517 2.42166 7.99819 2.42166 7.99819C1.70909 10.7396 3.6533 11.4134 3.6533 11.4134Z"
                    fill="url(#paint0_linear_1_48)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_48"
                    x1="6.99978"
                    y1="6.00006"
                    x2="6.99978"
                    y2="17.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB258" />
                    <stop offset="1" stopColor="#C71515" />
                  </linearGradient>
                  <clipPath id="clip0_1_48">
                    <rect width="13" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>{" "}
            <div>{bonuses ? `${bonuses.forBurningQuantity} бонусов` : ""}</div>{" "}
          </div>
        </div>
      </div>
      <div className={isLoading === true ? "more" : "hidden"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <circle cx="17.5" cy="17.5" r="17" stroke="#D4343F" />
          <g clipPath="url(#clip0_1_51)">
            <path
              d="M15.7716 23.1948L21.2284 17.5"
              stroke="#D4343F"
              strokeLinecap="round"
            />
            <path
              d="M15.7716 11.8052L21.2284 17.5"
              stroke="#D4343F"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_51">
              <rect
                width="7"
                height="13"
                fill="white"
                transform="translate(15 11)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={isLoading === true ? "hidden" : "visible"}>
        <LoaderUI />
      </div>
    </div>
  );
};

export default MyComponent;
