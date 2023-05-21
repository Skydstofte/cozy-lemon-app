import Header from '../components/Header';
import InfoBtn from '../components/InfoBtn';
import SmalllBgLemons from '../components/SmallBgLemons';
import React, { useEffect, useState } from "react";

export default function Posters() {

    const [posterInfo, setPosterInfo] = useState([]);
    const [posterContent, setPosterContent] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        async function getPosterInfo() {
            // Fetch all content of content-type "cl_posters_info" from Wordpress REST API
            const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cl_posters_info?_embed");
            const dataInfo = await response.json();
            console.log(posterInfo)
            setPosterInfo(dataInfo)
        }
        getPosterInfo();

        async function getPosterContent() {
            // Fetch all content of content-type "cl_posters" from Wordpress REST API
            const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cl_posters?_embed");
            const dataContent = await response.json();
            console.log(posterContent)
            setPosterContent(dataContent)
        }
        getPosterContent();
    }, []);

    const handleProductClick = (productId) => {
        const product = posterContent.find((p) => p.id === productId);
        setSelectedProduct(product);
        console.log(product)
    }
    
    const handleOverlayClose = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        const overlayBackground = document.querySelector('.overlay-background');
        if (selectedProduct) {
            overlayBackground.style.display ='block'
        } else {
            overlayBackground.style.display ='none'
        }
    }, [selectedProduct]);

    return (
        <section className="posters">
            <SmalllBgLemons />
            <Header />
            <InfoBtn />
            <div className='posters-container'>
                <header className='posters-container-intro'>
                    <h1>{posterInfo[0]?.acf?.poster_header}</h1>
                    <p>{posterInfo[0]?.acf?.poster_info}</p>
                </header>
                
                <main className='posters-container-content'>
                    <ul className='posters-container-content-view'>
                        {posterContent.map((product) => (
                            <li key={product.id} onClick={() => handleProductClick(product.id)} 
                            className='posters-container-content-view-product'>
                                <img src={product?.acf?.poster_img.url} alt="" />
                                <h3>Emne: {product?.acf?.poster_subject}</h3>
                            </li>
                        ))}
                    </ul>

                    {selectedProduct && (
                        <div 
                            product={selectedProduct}
                            onOverlayClose={handleOverlayClose} 
                            className="product-overlay">
                            <div className="product-overlay-content">
                                <button onClick={handleOverlayClose}>
                                    {/* <img src={close} alt="" /> */}
                                    <div class="cross-line-one"></div>
                                    <div class="cross-line-two"></div>
                                </button>
                                <div className="product-overlay-content-image">
                                    <img src={selectedProduct?.acf?.poster_img.url} alt={selectedProduct?.acf?.poster_img.alt} />
                                </div>
                                <ul>
                                    <li>Emne: {selectedProduct?.acf?.poster_subject}</li>
                                    <li>Størrelse: {selectedProduct?.acf?.poster_size}</li>
                                    <li>Papirtype: {selectedProduct?.acf?.poster_paper}</li>
                                    <li>Ramme: {selectedProduct?.acf?.poster_frame}</li>
                                    <li>Pris: {selectedProduct?.acf?.poster_price}</li>
                                    <li>Plakatnummer: {selectedProduct?.acf?.poster_nr}</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className='overlay-background'></div>
                </main>
            </div>
        </section>
    )
}