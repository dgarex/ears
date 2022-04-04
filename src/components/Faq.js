import React from 'react';
import {Container} from "react-bootstrap";

const Faq = () => {

    return (
        <div>
           <Container>
               <div className="faq">
               <div className="title__block">
                   FAQ :
               </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Do you use real fur?

                       </div>
                       <div className="faq__description">
                           No, the ears are made with faux fur fabric and we will always use high quality faux fur.
                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Why are all the items sold out or empty?

                       </div>
                       <div className="faq__description">
                           All our items are handmade and available in limited quantity. Items are usually sold via announced releases on instagram. Please keep an eye out on @nina_creations___ for the next release date ♡
                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Payment Method

                       </div>
                       <div className="faq__description">
                           We only accepting Paypal.


                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           How are your artworks priced?


                       </div>
                       <div className="faq__description">
                           Our pieces are priced by skill and by how much time is poured into the particular work. I typically spend many hours per pair of ears, trimming, airbrushing and quality control.


                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Allergies Concerns

                       </div>
                       <div className="faq__description">
                           We own a cat. So for those who may have allergies to cats please take this into consideration.
                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Do you take custom orders?

                       </div>
                       <div className="faq__description">
                           Unfortunately we cannot accept custom orders at the very moment.
                       </div>
                   </div>

               </div>
           </Container>
        </div>
    );
};

export default Faq;