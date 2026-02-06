import Heading from '../components/Heading';
import Layout from '../Layouts/Layout';
import Settings from '../components/Settings';
import Stats from '../components/Stats';
import Action from '../components/Action';


export default function Popup() {
  return (
    <Layout>
      <Heading />
      <Settings />
      <Stats />
      <Action />
    </Layout>

  );
}
