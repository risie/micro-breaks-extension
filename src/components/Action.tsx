import { ACTIVE_STATE } from "../common/constants";
import useIsTimerActive from "../hooks/useIsTimerActive";

interface Props {
  active: boolean
  onClick: () => void
}

export default function Action({ active, onClick }: Props) {
  const buttonText = active ? "Stop" : "Go!"

  return (
    <button className="btn btn-lg btn-secondary" onClick={onClick}>{buttonText}</button>
  )
}
