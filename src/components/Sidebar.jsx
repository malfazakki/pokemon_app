import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[300px] min-w-[200px] min-h-[100vh] bg-[#022b3a] text-white top-0 left-0">
      {/* profile */}
      <div className="pt-[2em] pl-[2em]">
        <img
          src="https://pokeapi.co/static/pokeapi_256.3fa72200.png"
          alt="profile picture"
          className="w-[4em] h-[4em] object-contain"
        />
        <p className="mt-4 text-base font-normal">John Doe</p>
        <p className="text-xs font-light">Author</p>
      </div>
      {/* profile end */}

      {/* navigation link */}
      <div className="flex items-center mt-[3em] h-[5vh]">
        <NavLink
          to={"/dashboard"}
          style={({ isActive }) => ({
            paddingLeft: "2.1em",
            height: "5vh",
            lineHeight: "5vh",
            background: isActive ? "#01131a" : "",
            borderLeft: isActive ? "5px solid white" : "",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          })}
        >
          Dashboard
        </NavLink>
      </div>
      {/* navigation link end */}

      {/* navigation link */}
      <div className="flex items-center h-[5vh]">
        <NavLink
          to={"/pokemon"}
          style={({ isActive }) => ({
            paddingLeft: "2.1em",
            height: "5vh",
            lineHeight: "5vh",
            background: isActive ? "#01131a" : "",
            borderLeft: isActive ? "5px solid white" : "",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          })}
        >
          Pokemon
        </NavLink>
      </div>
      {/* navigation link end */}
    </div>
  );
}
