import CardList from "../../components/CardList";
import Layout from "../../layout/Layout"

export default function Foods({ places }) {
  return (
    <Layout>
      <CardList cards={places} />;  
    </Layout>
  )
}

export async function getStaticProps() {
  const server = "http://localhost:1337/places";

  const res = await fetch(server);
  const places = await res.json();

  return {
    props: { places },
  };
}
