import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

function formatWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function DateTimeDifference() {
  const targetDate = new Date('2023-03-17T12:00:00');
  const currentDate = new Date();

  const [timeDifference, setTimeDifference] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate the difference in milliseconds
    const difference = Math.abs(currentDate - targetDate);

    // Calculate the time units
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(difference / (1000 * 60));
    const seconds = Math.floor(difference / 1000);

    setTimeDifference({
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
    });
  }, [currentDate]);

  return (
    <div className="app-container">
      <h1 className="header">How long ago was March 17, 2023?</h1> {/* Centered Header */}
      <div className="container">
        <div className="result">
          <p className="label">Months</p>
          <p className="unit-value">{formatWithCommas(timeDifference.months)}</p>
        </div>
        <div className="result">
          <p className="label">Weeks</p>
          <p className="unit-value">{formatWithCommas(timeDifference.weeks)}</p>
        </div>
        <div className="result">
          <p className="label">Days</p>
          <p className="unit-value">{formatWithCommas(timeDifference.days)}</p>
        </div>
        <div className="result">
          <p className="label">Hours</p>
          <p className="unit-value">{formatWithCommas(timeDifference.hours)}</p>
        </div>
        <div className="result">
          <p className="label">Minutes</p>
          <p className="unit-value">{formatWithCommas(timeDifference.minutes)}</p>
        </div>
        <div className="result">
          <p className="label">Seconds</p>
          <p className="unit-value">{formatWithCommas(timeDifference.seconds)}</p>
        </div>
      </div>
    </div>
  );
  
}



export default DateTimeDifference;
