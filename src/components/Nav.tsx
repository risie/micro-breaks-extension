import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function Nav({ children }: Props) {
  return (
    <div className="navbar justify-between p-6">
      {children}
    </div >
  )
}

