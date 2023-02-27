import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <Link to="/"><button>HOME</button></Link>
        <Link to="/about"><button>ABOUT</button></Link>
        <Link to="/items"><button>ITEMS</button></Link>
        </>
    )
}

export default Navbar;