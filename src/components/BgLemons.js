import BgLemon from '../images/bgLemon.png'

export default function BgLemons() {
    return (
        <section className='backgroundLemons'>
            <div className='backgroundLemons-top'>
                <img src={BgLemon} alt="Citroner" />
            </div>
            <div className='backgroundLemons-bottom'>
                <img src={BgLemon} alt="Citroner" />
            </div>
        </section>
    )
}