import { useState, useEffect } from "react";
import { Interval, INTERVAL, STORAGE_KEY_INTERVAL } from "../common/common";


const isIntervalValue = (item: string): item is Interval => item in INTERVAL;

const setLocalStorage = (number: Interval) => localStorage.setItem(STORAGE_KEY_INTERVAL, number)

export function useBreakInterval() {
  const [interval, setInterval] = useState<Interval | undefined>();

  useEffect(() => {
    const currentInterval = localStorage.getItem(STORAGE_KEY_INTERVAL);
    if (currentInterval && isIntervalValue(currentInterval)) {
      setInterval(currentInterval);
    } else {
      setLocalStorage(INTERVAL.TEN);
    }
  }, []);

  const handleChangeInterval = (newInterval: Interval) => {
    setInterval(newInterval);
    setLocalStorage(newInterval);
  };

  return { interval, handleChangeInterval }
}
