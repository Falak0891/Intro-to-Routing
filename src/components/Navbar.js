import { Link, NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "red" }
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "red" }
          }
        >
          ABOUT
        </NavLink>
        
        <NavLink
          to="/items"
          style={({ isActive }) =>
            isActive ? { color: "blue" } : { color: "red" }
          }
        >
          ITEMS
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
