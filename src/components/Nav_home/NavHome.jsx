import './NavHome.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavHome = ({ islogin }) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('auth-token');
        navigate('/login');
    }
    // console.log(islogin);
    return (
        <nav className="nav">
            <ul>
                <Link to="/signUp"><li>SignUp</li></Link>
                <Link to="/Login"><li>Login</li></Link>
                <Link to="/createpost">
                    <li>CreatePost</li>
                </Link>
            </ul>

            {islogin ? <button onClick={logout}>logout</button> : undefined}

        </nav>
    )
}

export default NavHome