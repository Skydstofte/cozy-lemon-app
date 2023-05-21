import Header from '../components/Header';
import InfoBtn from '../components/InfoBtn';
import lemon from '../images/bgLemon.png'
import SmalllBgLemons from '../components/SmallBgLemons';
import React, { useEffect, useState } from "react";

export default function AboutUs() {

    const [frontpageIntroData, setFrontpageIntroData] = useState([]);

    useEffect(() => {
        async function getData() {
            // Fetch all content of content-type "cozy_lemon" from Wordpress REST API
            const frontpageIntro = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cozy_lemon?_embed");
            const fpData = await frontpageIntro.json();
            // console.log(frontpageIntroData)
            setFrontpageIntroData(fpData[0])
        }
        getData();
    }, []);

    const renderPostContent = () => {
        // Check if postData exists and has a content property
        if (frontpageIntroData && frontpageIntroData.content) {
          // Replace HTML entities with their corresponding characters
          const decodedContent = frontpageIntroData.content.rendered.replace(/&#(\d+);/g, (match, dec) => {
            return String.fromCharCode(dec);
          });
    
          // Render the decoded content as HTML
          return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
        }
        // Render a loading message if postData is not available yet
        return <p>Loading...</p>;
      };

    return (
        <section className="AboutUs">
            <SmalllBgLemons />
            <Header />
            <InfoBtn />
            <div className='AboutUs-container'>
                <h1>Cozy Lemon</h1>
                <img className='AboutUs-container-intro-img' src={frontpageIntroData?.acf?.frontpage_image.url} alt={frontpageIntroData?.acf?.frontpage_image.alt} />
                <div className='AboutUs-container-intro-text'>
                    <h2>Velkommen til <img src={lemon} alt="" /></h2>
                    {/* <p>{frontpageIntroData?.content?.rendered}</p> */}
                    <p>{renderPostContent()}</p>
                </div>
            </div>
        </section>
    )
}