import Layout from "./Layout";
import PokemonDetailTable from "../components/PokemonDetailTable";

function PokemonDetail() {
  return (
    <Layout>
      <div className="h-[100vh] overflow-scroll">
        <PokemonDetailTable />
      </div>
    </Layout>
  );
}

export default PokemonDetail;
