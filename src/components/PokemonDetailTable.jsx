import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonDetailTable() {
  const [name, setName] = useState("");
  const [ability, setAbility] = useState([]);
  const [tempAbility, setTempAbility] = useState([]);
  const [baseExp, setBaseExp] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [thumb, setThumb] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // fetch pokemon data
    const fetchPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
      setName(res.data.name);
      setTempAbility(res.data.abilities);
      setBaseExp(res.data.base_experience);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setThumb(res.data.sprites.other);
    };

    fetchPokemon();
  }, [id]);

  // get ability useEffect
  useEffect(() => {
    getAbility();
    getImage();
  }, [tempAbility, thumb]);

  // get ability
  const getAbility = () => {
    let arr = [];
    for (let i = 0; i < tempAbility.length; i++) {
      let name = tempAbility[i]?.ability.name;
      arr.push(name);
    }
    setAbility(arr);
  };

  // get image
  const getImage = () => {
    const tempImage = thumb["official-artwork"];
    setImage(tempImage?.front_default);
  };

  return (
    <div className="px-3 mx-auto w-full h-full flex justify-between pt-[1rem] pb-[8rem]">
      <div className="mx-auto w-full px-3 py-10 flex flex-col justify-center items-center">
        <div className="bg-white p-10">
          {/* image */}
          <div className="">
            <img src={image} alt={name} className="w-[500px] h-[500px] object-cover" />
          </div>
          {/* image end */}

          {/* name */}
          <div className="flex gap-10">
            <p>Name:</p>
            <p className="capitalize">{name}</p>
          </div>
          {/* name end */}

          {/* ability */}
          <div className="flex gap-10">
            <p>Ability:</p>
            {ability.map((a, index) => (
              <p key={index}>{a}</p>
            ))}
          </div>
          {/* ability end */}

          {/* base exp */}
          <div className="flex gap-10">
            <p>Base Exp:</p>
            <p className="capitalize">{baseExp}</p>
          </div>
          {/* base exp end */}

          {/* base exp */}
          <div className="flex gap-10">
            <p>Height:</p>
            <p className="capitalize">{height}</p>
          </div>
          {/* base exp end */}

          {/* base exp */}
          <div className="flex gap-10">
            <p>Weight:</p>
            <p className="capitalize">{weight}</p>
          </div>
          {/* base exp end */}
          <div className="flex justify-start w-full">
            <button
              className="mt-[3rem] px-4 ml-[-20px] mb-[-10px] py-1 bg-green-700 text-white rounded-s-2xl hover:bg-green-500"
              onClick={() => navigate("/pokemon")}
            >
              Back to Pokemon List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
