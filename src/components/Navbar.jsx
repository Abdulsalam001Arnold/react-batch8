
import { Link } from "react-router-dom"
import { useUserStore } from "../store/userStore"

export default function Navbar() {

    const {isLoggedIn, user} = useUserStore()

    return(
        <nav className="w-full p-4 relative top-0 left-0 bg-amber-900 text-white">
            <ul className="flex items-center justify-center gap-4">
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

                <div>
                    {isLoggedIn ? (
                        <p>Welcome {user?.email}</p>
                    ) : (
                        <div>
                <li>
                    <Link to={"/login"}>
                       Login
                    </Link>
                </li>
                <li>
                    <Link to={"/signup"}>
                       Signup
                    </Link>
                </li>
                        </div>
                    )}
                </div>
            </ul>
        </nav>
    )
}