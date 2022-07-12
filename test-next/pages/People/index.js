import CardList from "../../components/CardList";
import Layout from "../../layout/Layout"

export default function Foods({ people }) {
  return (
    <Layout>
      <CardList cards={people} />;  
    </Layout>
  )
}

export async function getStaticProps() {
  const server = "http://localhost:1337/people";

  const res = await fetch(server);
  const people = await res.json();

  return {
    props: { people },
  };
}
