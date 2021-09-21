import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }){
  return (
    <Layout>
      <div className="container">
        <h3 className="text-center">{itemData.name}</h3>
          <div className="row">
            <img className="col-sm" src={itemData.img}/>
            <div className="col">{itemData.description}</div>
          </div>
        <p>Made {itemData.date}</p>
      </div>
    </Layout>
  );
}