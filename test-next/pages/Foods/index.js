import CardList from "../../components/CardList";
import Layout from "../../layout/Layout"

export default function Foods({ foods }) {
  return (
    <Layout>
      <CardList cards={foods} />;  
    </Layout>
  )
}

export async function getStaticProps() {
  const server = "http://localhost:1337/foods";

  const res = await fetch(server);
  const foods = await res.json();

  return {
    props: { foods },
  };
}
