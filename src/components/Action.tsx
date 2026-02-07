interface Props {
  active: boolean
  onClick: () => void
}

export function Action({ active, onClick }: Props) {
  const buttonText = active ? "Stop" : "Go!"

  return (
    <button className="btn btn-lg btn-secondary" onClick={onClick}>{buttonText}</button>
  )
}
