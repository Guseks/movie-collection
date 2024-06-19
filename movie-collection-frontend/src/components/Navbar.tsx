import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 flex justify-center w-full border-b-4 border-black py-7">
      <ul className="flex gap-5 lg:gap-8 justify-center items-center text-lg lg:text-3xl">
        <li className="font-bold">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { textDecoration: "underline" } : {};
            }}
            className="nav-link underline-offset-8"
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="font-bold underline-offset-8">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { textDecoration: "underline" } : {};
            }}
            className="nav-link"
            to="/discover"
          >
            Discover
          </NavLink>
        </li>
        <li className="font-bold">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { textDecoration: "underline" } : {};
            }}
            className="nav-link underline-offset-8"
            to="/myMovies"
          >
            My movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
