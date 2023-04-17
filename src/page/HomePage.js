import Header from '../components/Header';
import Menu from '../components/Menu';
import BgLemons from '../components/BgLemons';
// import maria from '../images/maria.jpg'
import arrowRight from '../images/arrowright.svg'
import { useEffect, useState } from "react";

export default function HomePage() {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        async function getData() {
            // Fetch all content of content-type "cozy_lemon" from Wordpress REST API
            const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cozy_lemon?_embed");
            const data = await response.json();
            console.log(allData)
            setAllData(data[0])
        }
        getData();
    }, []);

    return (
        <section>
            <BgLemons />
            <Header />
            <Menu />
            <main className='homePage'>
                <h1 className='homePage-header'>Cozy Lemon</h1>
                {/* <img className='homePage-img-Maria' src={maria} alt="Ejeren Maria" /> */}
                <img className='homePage-img-Maria' src={allData.acf.frontpage_image.url} alt="Ejeren Maria" />
                <div className='homePage-text-container'>
                    <h2>Hvem er jeg?</h2>
                    <p>{allData?.acf?.frontpage_intro}</p>
                </div>
                <button className='homePage-RM-btn'>
                    Læs mere
                    <img src={arrowRight} alt="Pil til højre" />    
                </button>
            </main>
        </section>
    )
}