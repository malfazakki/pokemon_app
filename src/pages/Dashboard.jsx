import { useEffect } from "react";
import Chart from "../components/Chart";
import Layout from "./Layout";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div>
      <Layout>
        <Chart />
      </Layout>
    </div>
  );
}

export default Dashboard;
