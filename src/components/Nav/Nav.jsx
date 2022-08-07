import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <Link to="/signUp">
                    <li>SignUp</li>
                </Link>
                <Link to="/Login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav