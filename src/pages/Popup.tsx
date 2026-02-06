import Heading from '../components/Heading';
import Layout from '../Layouts/Layout';
import Settings from '../components/Settings';
import Stats from '../components/Stats';
import Action from '../components/Action';
import useInterval from '../hooks/useInterval';


export default function Popup() {
  const { interval, handleChangeInterval } = useInterval()
  return (
    <Layout>
      <Heading />
      <Settings interval={interval} onChange={handleChangeInterval} />
      <Stats />
      <Action />
    </Layout>

  );
}
