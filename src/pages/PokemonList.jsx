import { useEffect } from "react";
import PokemonTable from "../components/PokemonTable";
import Layout from "./Layout";

function PokemonList() {
  useEffect(() => {
    document.title = "Pokemon List";
  }, []);
  return (
    <Layout>
      <div className="h-[100vh] overflow-scroll">
        <PokemonTable />
      </div>
    </Layout>
  );
}

export default PokemonList;
