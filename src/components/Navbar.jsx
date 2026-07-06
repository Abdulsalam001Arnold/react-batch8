
import { Link } from "react-router-dom"

export default function Navbar() {

    return(
        <nav className="w-full p-4 relative top-0 left-0 bg-amber-900 text-white">
            <ul className="flex justify-between">
                <li>
                    <Link to={"/"}>
                       Home
                    </Link>
                </li>
                <li>
                    <Link to={"/about"}>
                       About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}