import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    return (
        <section>
            <ul>
                <Link to="/signUp">
                    <li>SignUp</li>
                </Link>
                <Link to="/Login">
                    <li>Login</li>
                </Link>
            </ul>
        </section>
    )
}

export default Nav