import { NavLink } from 'react-router-dom'
import logo from '../images/clLogo.svg'

export default function Header() {
    return (
        <section className='header'>
            <NavLink to="/" className='logo'>
                <img src={logo} alt="Cozy Lemon logo" />
            </NavLink>
        </section>
    )
}