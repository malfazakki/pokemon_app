import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// material ui import
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function PokemonTable() {
  const [pokemons, setPokemons] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10");
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // fetching pokemon data
  useEffect(() => {
    setLoading(true);
    const fetchPokemons = async () => {
      const res = await axios.get(currentUrl);
      setPokemons(res.data.results);
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
    };

    fetchPokemons();
    setLoading(false);
  }, [currentUrl]);

  // handle get id pokemon from pokemon.url
  const getPokemonId = (url) => {
    const tempId = url.split("/");
    const id = tempId[6];
    return id;
  };

  // handle previous page
  const goPreviousPage = () => {
    if (previousPage) {
      setLoading(true);
      setCurrentUrl(previousPage);
    }
  };

  // handle next page
  const goNextPage = () => {
    if (nextPage) {
      setLoading(true);
      setCurrentUrl(nextPage);
    }
  };

  // handle see detail pokemon
  const seeDetail = (url) => {
    const id = getPokemonId(url);
    navigate("/pokemon/" + id);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-3 mx-auto flex justify-between mt-[1rem] mb-[10rem]">
      <div className="mx-auto w-full px-3 py-10">
        <Box sx={{ width: "80%", bgcolor: "background.paper", margin: "auto" }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    <span className="font-bold text-lg">Id</span>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span className="font-bold text-lg">Pokemon Name</span>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span className="font-bold text-lg">Action</span>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pokemons.map((pokemon) => (
                  <StyledTableRow key={pokemon.name}>
                    <StyledTableCell component="th" scope="row" align="center">
                      <span className="capitalize">{getPokemonId(pokemon.url)}</span>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <span className="capitalize">{pokemon.name}</span>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <button
                        className="px-3 py-1 bg-cyan-900 text-white rounded-sm hover:bg-cyan-700"
                        onClick={() => seeDetail(pokemon.url)}
                      >
                        Details
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <div className="flex w-full justify-center mt-10 gap-5">
          <button
            className="w-[100px] py-1 bg-green-700 text-white rounded-sm hover:bg-green-500 disabled:bg-slate-400"
            disabled={previousPage === null}
            onClick={() => goPreviousPage()}
          >
            Previous
          </button>
          <button
            className="w-[100px] py-1 bg-green-700 text-white rounded-sm hover:bg-green-500 disabled:bg-slate-400"
            disabled={nextPage === null}
            onClick={() => goNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// Table Styling Material UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
