import logoNoText from '../images/bgLemon.png'
import poster from '../images/postericon.png'
import crochet from '../images/crocheticon.png'
import contact from '../images/contacticon.png'
import instragram from '../images/Instagram_Glyph_Black.svg'
import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function Menu() {

    const [menu_class, setMenuClass] = useState("burger-menu-cross-line unclicked")
    const [menu_container_class, setMenuContainerClass] = useState("burger-menu-container hidden")
    const [overlay_class, setOverlayClass] = useState("overlay overlay-hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenuClass("burger-menu-cross-line clicked")
            setMenuContainerClass("menu-container visible")
            setOverlayClass("overlay overlay-visible")
        }
        else {
            setMenuClass("burger-menu-cross-line unclicked")
            setMenuContainerClass("menu-container hidden")
            setOverlayClass("overlay overlay-hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <section className='burger-menu'>
            <button className='burger-menu-cross' aria-label='Menu' onClick={updateMenu}>
                <div className={menu_class}></div>
                <div className={menu_class}></div>
                <div className={menu_class}></div>
            </button>
            <ul className={menu_container_class}>
                <li className='burger-menu-container-item'>
                    <NavLink to="/Plakater" className="burger-menu-container-item-navLink">
                        <img id='posterIcon' src={poster} alt="Citat Plakater" />
                        <p>Citat plakater</p>
                    </NavLink>
                </li>
                <li className='burger-menu-container-item'>
                    <NavLink to="/HækledeBlomster" className="burger-menu-container-item-navLink">
                        <img id='crochetIcon' src={crochet} alt="Hæklede Blomster" />
                        <p>Hæklede blomster</p>
                    </NavLink>
                </li>
                <li className='burger-menu-container-item'>
                    <NavLink to="/KontaktBestil" className="burger-menu-container-item-navLink">
                        <img id='contactIcon' src={contact} alt="Kontakt" />
                        <p>Kontakt/Bestil</p>
                    </NavLink>
                </li>
                <li className='burger-menu-container-item'>
                    <NavLink to="/OmCozyLemon" className="burger-menu-container-item-navLink">
                        <img id='aboutIcon' src={logoNoText} alt="Cozy Lemon logo" />
                        <p>Om Cozy Lemon</p>
                    </NavLink>
                </li>
                <div className='burger-menu-container-line'></div>
                <div className='burger-menu-container-bottomInfo'>
                    <h5>Betaling</h5>
                    <p>Betaling foregår med mobilpay. Nummeret sendes sammen med bekræftigelsesmailen.</p>
                    <p>Stand hos DesignHub: </p>
                    <address>Bredgade 45, 7400 Herning</address>
                    <p id='email'>Email: <a href = "mailto: cozy.lemon1@gmail.com">cozy.lemon1@gmail.com</a></p>
                    <h4>Af Maria St. Christiansen</h4>
                </div>
                <a className='burger-menu-container-soMe' href="https://www.instagram.com/cozy_lemon_/">
                    <img src={instragram} alt="Instagram" />
                </a>
            </ul>
            <div className={overlay_class}></div>
        </section>
    )
}