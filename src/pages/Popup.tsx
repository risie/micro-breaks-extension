import { Action } from "../components/Action";
import { Heading } from "../components/Heading";
import { Settings } from "../components/Settings";
import { Stats } from "../components/Stats";
import { useBreakInterval } from "../hooks/useBreakInterval";
import { useIsTimerActive } from "../hooks/useIsTimerActive";
import { Layout } from "../layouts/Layout";


export default function Popup() {
  const { interval, handleChangeInterval } = useBreakInterval()
  const { isActive, handleToggleActive } = useIsTimerActive()
  return (
    <Layout>
      <Heading />
      <Settings interval={interval} onChange={handleChangeInterval} />
      <Stats />
      <Action active={isActive} onClick={handleToggleActive} />
    </Layout>

  );
}
