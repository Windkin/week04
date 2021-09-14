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
      <h2 class="text-center">Menu Items</h2>
        <div className="container text-center">
          <div class="row">
            {allData.map(({ id, food, img }) => (
              <div class="col-4 mt-20">
                <Link key={id} href={`/${id}`}>
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
