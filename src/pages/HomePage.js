import Header from '../components/Header';
import BgLemons from '../components/BgLemons';
import InfoBtn from '../components/InfoBtn';
import arrowRight from '../images/arrowright.svg'
import poster from '../images/postericon.png'
import crochet from '../images/crocheticon.png'
import contact from '../images/contacticon.png'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {

    const [frontpageIntroData, setFrontpageIntroData] = useState([]);
    const [frontpagePosterData, setFrontpagePosterData] = useState([]);
    const [frontpageFlowerData, setFrontpageFlowerData] = useState([]);

    useEffect(() => {
        async function getData() {
            // Fetch all content of content-type "cozy_lemon" from Wordpress REST API
            const frontpageIntro = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cozy_lemon?_embed");
            const fpData = await frontpageIntro.json();
            // console.log(frontpageIntroData)
            setFrontpageIntroData(fpData[0])
            
            const frontpagePosterIntro = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cl_posters_info?_embed");
            const fpPosterData = await frontpagePosterIntro.json();
            setFrontpagePosterData(fpPosterData[0])
            // console.log(frontpagePosterData)
            
            const frontpageFlowerIntro = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cl_flowers_info?_embed");
            const fpFlowerData = await frontpageFlowerIntro.json();
            setFrontpageFlowerData(fpFlowerData[0])
            // console.log(frontpageFlowerData)
        }
        getData();
    }, []);

    return (
        <section className='container'>
            <BgLemons />
            <Header />
            <InfoBtn />
            <main className='homePage'>

                {/* Section for "About us" content */}
                <section className='homePage-intro'>
                    <h1>Velkommen til</h1>
                    <img className='homePage-intro-img-Maria' src={frontpageIntroData?.acf?.frontpage_image.url} alt={frontpageIntroData?.acf?.frontpage_image.alt} />
                    <div className='homePage-intro-text-container'>
                        <p>{frontpageIntroData?.acf?.frontpage_intro}</p>
                        <p>{frontpageIntroData?.acf?.frontpage_intro_secondline}</p>
                    </div>
                    <NavLink to='/OmCozyLemon' className='homePage-intro-readMore-btn'>
                        Læs mere
                        <img src={arrowRight} alt="Pil til højre" />    
                    </NavLink>
                </section>

                {/* Section for "Posters" content */}
                <section className='homePage-poster'>
                    <img className='homePage-poster-img-icon' id='posterIcon' src={poster} alt={frontpagePosterData?.acf?.poster_info_image.alt} />
                    <h1 className='homePage-poster-header'>{frontpagePosterData?.acf?.poster_header}</h1>
                    <div className='homePage-poster-text-container'>
                        {/* <h2></h2> */}
                        <p>{frontpagePosterData?.acf?.poster_info}</p>
                    </div>
                    <NavLink 
                    to='/Plakater' className='homePage-poster-readMore-btn'>
                        Se mere
                        <img src={arrowRight} alt="Pil til højre" />    
                    </NavLink>
                </section>

                {/* Section for "Crochet flowers" content */}
                <section className='homePage-flower'>
                    <img className='homePage-flower-img-icon' id='flowerIcon' src={crochet} alt={frontpageFlowerData?.acf?.flower_image.alt} />
                    <h1 className='homePage-flower-header'>{frontpageFlowerData?.acf?.flower_header}</h1>
                    <div className='homePage-flower-text-container'>
                        {/* <h2></h2> */}
                        <p>{frontpageFlowerData?.acf?.flower_info}</p>
                    </div>
                    <NavLink to='/HækledeBlomster' className='homePage-flower-readMore-btn'>
                        Se mere
                        <img src={arrowRight} alt="Pil til højre" />    
                    </NavLink>
                </section>

                {/* Section for "Contact" content */}
                <section className='homePage-contact'>
                    <img className='homePage-contact-img-icon' id='contactIcon' src={contact} alt="Kontakt ikon" />
                    <h1 className='homePage-contact-header'>Bestil og Kontakt</h1>
                    <div className='homePage-contact-text-container'>
                        <p>Har du et spørgsmål eller et ønske, så skriv endelig.</p>
                    </div>
                    <NavLink to='/KontaktBestil' className='homePage-contact-readMore-btn'>
                        Se mere
                        <img src={arrowRight} alt="Pil til højre" />    
                    </NavLink>
                </section>
            </main>
        </section>
    )
}