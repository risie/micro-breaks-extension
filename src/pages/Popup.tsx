import Heading from '../components/Heading';
import Layout from '../Layouts/Layout';
import Settings from '../components/Settings';
import Stats from '../components/Stats';
import Action from '../components/Action';
import useInterval from '../hooks/useInterval';
import useIsTimerActive from '../hooks/useIsTimerActive';


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
