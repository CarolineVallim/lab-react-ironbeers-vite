import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <Link to={'/'}>
                HomePage
            </Link>
        </nav>
    )
}

export default NavBar;