import Layout from "./Layout";
import PokemonDetailTable from "../components/PokemonDetailTable";
import { useEffect } from "react";

function PokemonDetail() {
  useEffect(() => {
    document.title = "Detail Page";
  }, []);
  return (
    <Layout>
      <div className="h-[100vh] overflow-scroll">
        <PokemonDetailTable />
      </div>
    </Layout>
  );
}

export default PokemonDetail;
