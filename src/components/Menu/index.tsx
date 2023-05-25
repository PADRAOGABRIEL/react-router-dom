import { Link } from 'react-router-dom'
import './style.css'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/post'>Posts</Link>
                </li>
                <li>
                    <Link to='/post/10'>Post 10</Link>
                </li>
                <li>
                    <Link to='/redirect'>Redirect</Link>
                </li>
            </ul>
        </nav>
    )
}