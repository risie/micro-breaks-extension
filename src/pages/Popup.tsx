import Heading from '../components/Heading';
import Stats from '../components/Stats';
import Action from '../components/Action';
import useInterval from '../hooks/useInterval';
import useIsTimerActive from '../hooks/useIsTimerActive';
import Settings from '../components/Settings';
import Layout from '../layouts/Layout';


export default function Popup() {
  const { interval, handleChangeInterval } = useInterval()
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
