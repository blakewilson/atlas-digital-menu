import Layout from 'components/layout';
import Meals from 'components/meals';
import Header from 'components/header';
import Footer from 'components/footer';
import Sides from 'components/sides';
import Drinks from 'components/drinks';

export default function Index() {
  return (
    <Layout>
      <div style={{ marginTop: `0` }}>
        <Header />
      </div>

      <div>
        <Meals />

        <div className="flex">
          <div className="box w-1/2 p-4 mr-2">
            <Sides />
          </div>

          <div className="box w-1/2 p-4 ml-2">
            <Drinks />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: `0` }}>
        <Footer />
      </div>
    </Layout>
  );
}
