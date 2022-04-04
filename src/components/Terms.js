import React from 'react';
import {Container} from "react-bootstrap";
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const Faq = () => {

    return (
        <div>
           <Container>
               <div className="faq">
               <div className="title__block">
                   Terms of service  :

               </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Account
                       </div>
                       <div className="faq__description">
                           <p>When create an account in our website, you must provide us and make sure the information is accurate, complete, and current at all times.</p>

                           <p> You are responsible for safeguarding the password that you use to access our website and not to disclose your password to any third party.</p>

                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Products

                       </div>
                       <div className="faq__description">
                           All items are handmade and may have small flaws due to human error, airbrushed fur often feels less soft. It’s not a big issue, but something to consider if it matters to you.
                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Color Accuracy


                       </div>
                       <div className="faq__description">
                           We do not guarantee that the color and texture shown on your screen is 100% accurate to the actual product. All items colors and texture may appears slightly different in person than how it’s look on photos due to monitor, device or screen settings.


                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           General


                       </div>
                       <div className="faq__description">
                           We can't be held responsible for any mistakes that not made by us. If you accidentally chosen the wrong item/color, or you made a mistake in your shipping address, you didn't verify the prices and currency or etc.


                       </div>
                   </div>
                   <div className="faq__block">
                       <div className="faq__title">
                           Changes
                       </div>
                       <div className="faq__description">
                           <p>All items prices, photos or availability of the products can be changed at any time and without notice. We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>
                           <p>We reserve the right to cancel any current order(s) and refuse service to anyone at any time if we suspect or found suspicious activities or for any reasons that we could judge valid.</p>
                           <p>By accessing or using the service you are agree to be bound the Terms above. </p>
                       </div>
                   </div>


               </div>
           </Container>
        </div>
    );
};

export default Faq;