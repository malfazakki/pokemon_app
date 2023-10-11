import PokemonTable from "../components/PokemonTable";
import Layout from "./Layout";

function PokemonList() {
  return (
    <Layout>
      <div className="h-[100vh] overflow-scroll">
        <PokemonTable />
      </div>
    </Layout>
  );
}

export default PokemonList;
