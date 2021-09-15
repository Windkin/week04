import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
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

/*export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <img src={itemData.name} alt="stuff"/>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
        </div>
      </article>
    </Layout>
  );
}*/

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