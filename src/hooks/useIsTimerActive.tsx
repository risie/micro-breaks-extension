import { useState, useEffect } from "react";
import { ACTIVE_STATE, ActiveState, STORAGE_KEY_ACTIVE } from "../common/constants";

const isStateValue = (item: string): item is ActiveState => item in ACTIVE_STATE;

const setLocalStorage = (state: ActiveState) => localStorage.setItem(STORAGE_KEY_ACTIVE, state)

export default function useIsTimerActive() {
  const [active, setActive] = useState<ActiveState>(ACTIVE_STATE.OFF);

  useEffect(() => {
    const currentActiveState = localStorage.getItem(STORAGE_KEY_ACTIVE);
    if (currentActiveState && isStateValue(currentActiveState)) {
      setActive(currentActiveState);
    } else {
      setLocalStorage(ACTIVE_STATE.OFF);
    }
  }, []);

  const handleToggleActive = () => {
    const newActiveState = active === ACTIVE_STATE.OFF ? ACTIVE_STATE.ON : ACTIVE_STATE.OFF;
    setActive(newActiveState);
    setLocalStorage(newActiveState);
  };

  const isActive = active === ACTIVE_STATE.ON

  return { isActive, handleToggleActive }
}
