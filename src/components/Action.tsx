import { ACTIVE_STATE } from "../common/constants";
import useIsActive from "../hooks/useIsActive";


export default function Action() {
  const { active, handleToggleActive } = useIsActive()
  const buttonText = active === ACTIVE_STATE.ON ? "Stop" : "Go!"


  return (
    <button className="btn btn-lg btn-secondary" onClick={handleToggleActive}>{buttonText}</button>
  )
}
