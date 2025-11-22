import React, { useState, useEffect } from 'react';
export function ProfileCard({ name, profession ,age}) {
  const [activeTime, setActiveTime] = useState(0);
  const [job, setJob] = useState(profession);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return <div>
    <h2>{name}</h2>
    <p>Profession: {job}</p>
    <p>Age: {age}</p>
    <p>Active Time: {activeTime} seconds</p>
  </div>;
}
