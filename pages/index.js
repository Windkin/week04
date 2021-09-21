import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getFood } from '../lib/data';


export async function getStaticProps() {
  const allData = getFood();
  return {
    props: {
      allData
    }
  }
}

export default function Home({ allData }) {
  return (
    <Layout home>
      <h2 className="text-center">Menu Items</h2>
        <div className="container text-center">
          <div className="row">
            {allData.map(({ id, food, img }) => (
              <div key={id} className="col-4 mt-20">
                <Link href={`/${id}`}>
                  <a>
                    <img src={img}/><br/>
                      {food}
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
