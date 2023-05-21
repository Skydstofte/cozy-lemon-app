import React, { useState } from 'react'
import tooltip from '../images/tooltip.svg'

export default function InfoBtn() {
    const [info_container_class, setInfoContainerClass] = useState("info-container hidden")
    const [info_overlay_class, setInfoOverlayClass] = useState("info-overlay info-overlay-hidden")
    const [isInfoClicked, setIsInfoClicked] = useState(false)

    const updateInfo = () => {
        if(!isInfoClicked) {
            setInfoContainerClass("info-container info-visible")
            setInfoOverlayClass("info-overlay info-overlay-visible")
        }
        else {
            setInfoContainerClass("info-container hidden")
            setInfoOverlayClass("info-overlay info-overlay-hidden")
        }
        setIsInfoClicked(!isInfoClicked)
    }

    return (
        <section className='InfoBtn'>
            <button className='tooltip-btn' onClick={updateInfo} >
                <img src={tooltip} alt="Informationsknap" />
            </button>
            <div className={info_container_class}>
                <h2>Bestilling</h2>
                <p>Når du bestiller en vare hos mig, 
                    vil den først være godkendt, når 
                    jeg er sikker på, at jeg har alle 
                    de informationer jeg skal bruge, 
                    for at lave netop det produkt du ønsker.</p>
                <h2>Betaling</h2>
                <p>Betaling forgår over Mobilpay. 
                    Du vil få nummeret sammen med 
                    bekræftigelsesmailen. Betalingen 
                    sendes til mig, under navnet Cozy Lemon. </p>
                <h2>Plakatnummer</h2>
                <p>Hvis du har en specifik plakat i 
                    tankerne, kan du bruge plakatnummeret 
                    til at angive hvilken plakat 
                    du henviser til. </p>
            </div>
            <div className={info_overlay_class}></div>
        </section>
    )
}

