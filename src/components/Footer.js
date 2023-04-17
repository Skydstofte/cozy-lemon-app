import instragram from '../images/Instagram_Glyph_White.svg'

export default function Nav() {
    return (
        <footer>
            <div>
                <p>Kontakt</p>
            </div>
            <h4>Af Maria Storgaard Christiansen</h4>
            <a className='soMe' href="https://www.instagram.com/cozy_lemon_/">
                <img src={instragram} alt="Instagram" />
                <p>Instagram</p>
            </a>
        </footer>
    )
}