import { ACTIVE_STATE } from "../common/constants";
import useIsTimerActive from "../hooks/useIsTimerActive";


export default function Action() {
  const { active, handleToggleActive } = useIsTimerActive()
  const buttonText = active === ACTIVE_STATE.ON ? "Stop" : "Go!"

  return (
    <button className="btn btn-lg btn-secondary" onClick={handleToggleActive}>{buttonText}</button>
  )
}
