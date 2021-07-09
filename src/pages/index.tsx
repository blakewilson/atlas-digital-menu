import Layout from 'components/layout';
import Meals from 'components/meals';
import Header from 'components/header';
import Footer from 'components/footer';
import Sides from 'components/sides';
import Drinks from 'components/drinks';
import { client } from 'client';
import { useEffect } from 'react';
import { GetStaticPropsContext } from 'next';
import { getNextStaticProps } from '@faustjs/next';

export default function Index() {
  const { useQuery, useRefetch } = client;
  const refetch = useRefetch();
  const meals = useQuery().meals()?.nodes;
  const drinks = useQuery().drinks()?.nodes;
  const sides = useQuery().sides()?.nodes;

  useEffect(() => {
    const interval = setInterval(() => {
      refetch(meals);
      refetch(drinks);
      refetch(sides);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div style={{ marginTop: `0` }}>
        <Header />
      </div>

      <div>
        <Meals meals={meals} />

        <div className="flex">
          <div className="box w-1/2 p-4 mr-2">
            <Sides sides={sides} />
          </div>

          <div className="box w-1/2 p-4 ml-2">
            <Drinks drinks={drinks} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: `0` }}>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Index,
    client,
  });
}
