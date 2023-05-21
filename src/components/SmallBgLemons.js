import BgLemon from '../images/bgLemon.png'

export default function SmallBgLemons() {
    return (
        <section className='smallBackgroundLemons'>
            <div className='smallBackgroundLemons-one'>
                <img src={BgLemon} alt="Citroner" />
            </div>
            <div className='smallBackgroundLemons-two'>
                <img src={BgLemon} alt="Citroner" />
            </div>
            <div className='smallBackgroundLemons-three'>
                <img src={BgLemon} alt="Citroner" />
            </div>
            <div className='smallBackgroundLemons-four'>
                <img src={BgLemon} alt="Citroner" />
            </div>
        </section>
    )
}