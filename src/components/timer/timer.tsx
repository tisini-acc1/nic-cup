"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days, hours, minutes, seconds };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((difference / (1000 * 60)) % 60);
  const secs = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mins < 10 ? `0${mins}` : mins.toString();
  seconds = secs < 10 ? `0${secs}` : secs.toString();

  return { days, hours, minutes, seconds };
};

const Timer = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  return (
    <div className="mt-10 flex justify-center lg:justify-start gap-3">
      <span className="flex flex-col justify-center items-center bg-black text-sky-400 text-3xl lg:text-5xl w-32 py-3 shadow-lg rounded">
        {timeLeft.days}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Days
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-sky-400 text-3xl lg:text-5xl w-32 py-3 shadow-lg rounded">
        {timeLeft.hours}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Hours
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-sky-400 text-3xl lg:text-5xl w-32 py-3 shadow-lg rounded">
        {timeLeft.minutes}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Minutes
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-sky-400 text-3xl lg:text-5xl w-32 py-3 shadow-lg rounded">
        {timeLeft.seconds}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Seconds
        </small>
      </span>
    </div>
  );
};

export default Timer;
