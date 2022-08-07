import './NavHome.css'
import { Link } from 'react-router-dom'
const NavHome = ({ islogin }) => {
    console.log(islogin)
    return (
        <nav className="nav">
            <ul>

                {islogin ? undefined : <Link to="/signUp"><li>SignUp</li></Link>}
                {islogin ? undefined : <Link to="/Login"><li>Login</li></Link>}
                <Link to="/createpost">
                    <li>CreatePost</li>
                </Link>
            </ul>

            {islogin ? <button>logout</button> : undefined}

        </nav>
    )
}

export default NavHome