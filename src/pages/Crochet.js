import Header from '../components/Header';
import InfoBtn from '../components/InfoBtn';
import SmalllBgLemons from '../components/SmallBgLemons';
import close from '../images/close.svg'
import React, { useEffect, useState } from "react";
// import { NavLink } from 'react-router-dom';

export default function Crochet() {

    const [flowerInfo, setFlowerInfo] = useState([]);
    const [flowerContent, setFlowerContent] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        async function getFlowerInfo() {
            // Fetch all content of content-type "cl_flowers_info" from Wordpress REST API
            const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cl_flowers_info?_embed");
            const dataInfo = await response.json();
            console.log(flowerInfo)
            setFlowerInfo(dataInfo)
        }
        getFlowerInfo();

        async function getFlowerContent() {
            // Fetch all content of content-type "cl_flowers" from Wordpress REST API
            const response = await fetch("https://react-pf-api.skydstofte.site/wp-json/wp/v2/cl_flowers?_embed");
            const dataContent = await response.json();
            console.log(flowerContent)
            setFlowerContent(dataContent)
        }
        getFlowerContent();
    }, []);

    const handleProductClick = (productId) => {
        const product = flowerContent.find((p) => p.id === productId);
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
        <section className="flowers">
            <SmalllBgLemons />
            <Header />
            <InfoBtn />
            
            <div className='flowers-container'>
                <header className='flowers-container-intro'>
                    <h1>{flowerInfo[0]?.acf?.flower_header}</h1>
                    <p>{flowerInfo[0]?.acf?.flower_info}</p>
                </header>
                
                <main className='flowers-container-content'>
                    <ul className='flowers-container-content-view'>
                        {flowerContent.map(flower => (
                            <li key={flower.id} onClick={() => handleProductClick(flower.id)} 
                            className='flowers-container-content-view-product'>
                                <img src={flower?.acf?.flower_img.url} alt={flower?.acf?.flower_img.alt} />
                                <h3>{flower?.acf?.flower_info}</h3>
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
                                    <img src={close} alt="" />
                                </button>
                                <div className="product-overlay-content-image">
                                    <img src={selectedProduct?.acf?.flower_img.url} alt={selectedProduct?.acf?.flower_img.alt} />
                                </div>
                                <ul>
                                    <li>Emne: {selectedProduct?.acf?.flower_info}</li>
                                    <li>Størrelse: {selectedProduct?.acf?.flower_size}</li>
                                    <li>Materiale: {selectedProduct?.acf?.flower_material}</li>
                                    <li>Pris: {selectedProduct?.acf?.flower_price}</li>
                                </ul>
                            </div>
                        </div>
                    )}   
                </main>
            </div>
            <div className='overlay-background'></div>
        </section>
    )
}