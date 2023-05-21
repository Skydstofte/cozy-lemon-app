import Header from '../components/Header';
import InfoBtn from '../components/InfoBtn';
import SmalllBgLemons from '../components/SmallBgLemons';
import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function ContactOrOrder() {
    
    const FORM_ENDPOINT = "https://public.herotofu.com/v1/458043a0-f251-11ed-b2e2-c10354b56774";
    const [submitted, setSubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    };

    const handleSubmit = () => {
        setTimeout( () => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <section className='contactform-submitted'>
                <SmalllBgLemons />
                <Header />
                <InfoBtn />

                <section className='contactform-submitted-content'>
                    <h2>Tak for din henvendelse</h2>
                    <p>Du vil høre fra mig snarest muligt.</p>
                    <p>Gå tilbage til forsiden</p>
                    <NavLink to='/'>
                        Tilbage
                    </NavLink>
                </section>
            </section>
        );
    }

    return (
        <section className="ContactOrOrder">
            <SmalllBgLemons />
            <Header />
            <InfoBtn />

            <form 
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target='_blank'
                className='contact-container'
            >
                <h1>Bestil og Kontakt</h1>

                <select name="emne" id="choose-subject" onChange={handleOptionChange} required>
                    <option value="" disabled selected>Vælg et emne</option>
                    <option value="order">Bestilling</option>
                    <option value="question">Spørgsmål</option>
                    <option value="other">Andet</option>
                </select>
                
                {selectedOption === 'order' && (
                    <div className='contact-container-chosen-subject'>
                        <input type="text" placeholder='Dit navn'  name='name' required />
                        <input type="email" placeholder='Din e-mail'  name='email' required />
                        <input type="text" placeholder='Adresse'  name='address' required />
                        <div id='city-info'>
                            <input id='zip-code' type="text" placeholder='Postnr.'  name='zip-code' required />
                            <input type="text" placeholder='By'  name='city' required />
                        </div>
                        <textarea type="text" placeholder='Skriv din besked her' name='message' required />
                        <button type='submit'>Send</button>
                    </div>
                )}
                
                {selectedOption === 'question' && (
                    <div className='contact-container-chosen-subject'>
                        <input type="text" placeholder='Dit navn'  name='name' required />
                        <input type="email" placeholder='Din e-mail'  name='email' required />
                        <textarea type="text" placeholder='Skriv din besked her' name='message' required />
                        <button type='submit'>Send</button>
                    </div>
                )}

                {selectedOption === 'other' && (
                    <div className='contact-container-chosen-subject'>
                        <input type="text" placeholder='Dit navn'  name='name' required />
                        <input type="email" placeholder='Din e-mail'  name='email' required />
                        <textarea type="text" placeholder='Skriv din besked her' name='message' required />
                        <button type='submit'>Send</button>
                    </div>
                )}
            </form>            
        </section>
    )
}