import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

interface TimeZoneClockProps {
  label: string;
  timeZone: string;
}

const TimeZoneClock: React.FC<TimeZoneClockProps> = ({ label, timeZone }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone,
      }).format(now);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="timezone-clock">
      <h3 className="timezone-label">{label}</h3>
      <div className="digital-display">{time || '--:--:--'}</div>
    </div>
  );
};

export const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeZones = [
    { label: 'New York (EST)', timeZone: 'America/New_York' },
    { label: 'London (GMT)', timeZone: 'Europe/London' },
    { label: 'Tokyo (JST)', timeZone: 'Asia/Tokyo' },
    { label: 'Sydney (AEDT)', timeZone: 'Australia/Sydney' },
    { label: 'Dubai (GST)', timeZone: 'Asia/Dubai' },
    { label: 'Los Angeles (PST)', timeZone: 'America/Los_Angeles' },
  ];

  const localTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(currentTime);

  const dateString = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentTime);

  return (
    <div className="digital-clock-container">
      <div className="header">
        <h1>Digital Clock</h1>
        <p className="date">{dateString}</p>
      </div>

      <div className="local-time-section">
        <h2>Local Time</h2>
        <div className="local-time-display">{localTime}</div>
      </div>

      <div className="timezone-section">
        <h2>World Time Zones</h2>
        <div className="timezone-grid">
          {timeZones.map((tz) => (
            <TimeZoneClock
              key={tz.timeZone}
              label={tz.label}
              timeZone={tz.timeZone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
