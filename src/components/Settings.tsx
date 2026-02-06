import { useState, useEffect, ChangeEvent } from 'react';

export default function Settings() {
  const [breakTime, setBreakTime] = useState('');

  // Load the saved break time from local storage when the component mounts
  useEffect(() => {
    const savedTime = localStorage.getItem('breakTime');
    if (savedTime) {
      setBreakTime(savedTime);
    }
  }, []);

  // Function to handle change in radio button selection
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setBreakTime(value);
    localStorage.setItem('breakTime', value);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full h-full flex flex-col items-center justify-center p-4">
        <p className="label mb-2">How often would you like to take a break?</p>
        <div className="join w-full flex justify-between">
          <input
            className="join-item btn flex-1"
            type="radio"
            name="options"
            value="5"
            aria-label="5 min"
            checked={breakTime === '5'}
            onChange={handleChange}
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="options"
            value="10"
            aria-label="10 min"
            checked={breakTime === '10'}
            onChange={handleChange}
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="options"
            value="15"
            aria-label="15 min"
            checked={breakTime === '15'}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </div>
  );
}
