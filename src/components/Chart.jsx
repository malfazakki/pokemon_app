import axios from "axios";
import { useEffect, useState } from "react";

import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";

export default function Chart() {
  const [berry, setBerry] = useState("");

  useEffect(() => {
    const fetchBerry = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/2");
      setBerry(res.data);
    };

    fetchBerry();
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col justify-center w-full h-full items-center">
        <Box sx={{ width: "80%", bgcolor: "background.paper", margin: "auto", paddingBottom: "3rem" }}>
          <h1 className="text-3xl mt-5 text-center mb-10">Berry Chart</h1>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: berry.max_harvest, label: "Max Harvest" },
                  { id: 1, value: berry.natural_gift_power, label: "Natural Gift Power" },
                  { id: 2, value: berry.size, label: "Size" },
                  { id: 3, value: berry.smoothness, label: "Smoothness" },
                  { id: 4, value: berry.soil_dryness, label: "Soil Dryness" },
                  { id: 5, value: berry.growth_time, label: "Growth Time" },
                ],
              },
            ]}
            width={800}
            height={300}
          />
        </Box>
      </div>
    </div>
  );
}
