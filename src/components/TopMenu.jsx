import React from 'react';
import { Container,  Navbar, } from "react-bootstrap";
import { Link, Outlet} from "react-router-dom";
import Logo from '../assets/img/logo.png';
import Cart from '../assets/img/cart.png';
import {useState} from "react";
const TopMenu = () => {
 function   scrollToTop() {

         window.scroll({ top: 0, left: 0, behavior: "smooth" });

    }

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <Container>
                <Navbar expanded={expanded} collapseOnSelect expand="lg"  variant="light">

                        <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")}   aria-controls="responsive-navbar-nav"/> <Link  className={'nav-link m'} to="/cart">  <img src={Cart} alt={'img'} className={'svg_cart'}/></Link>

                        <Navbar.Collapse id="responsive-navbar-nav">

                                <div className="nav__left">
                                <Link   className={'nav-link'} onClick={() => {setExpanded(false);scrollToTop();}} to="/">SHOP</Link>
                                <Link  className={'nav-link'} onClick={() => {setExpanded(false);scrollToTop();}} to="/contact">CONTACT</Link>

                                    <Link  className={'nav-link'}onClick={() => {setExpanded(false);scrollToTop();}} to="/terms">TERMS OF SERVICE</Link>
                                </div>
                                <div className="nav__center">
                                    <Link  className={'nav-link'} to="/"> <img src={Logo} alt={'img'} /></Link>
                                </div>
                                <div className="nav__right">
                                <Link  className={'nav-link'} onClick={() => {setExpanded(false);scrollToTop();}} to="/reviews">REVIEWS</Link>
                                <Link  className={'nav-link'} onClick={() => {setExpanded(false);scrollToTop();}} to="/contests">  CONTESTS</Link>
                                    <Link  className={'nav-link'} onClick={() => {setExpanded(false);scrollToTop();}} to="/faq">FAQ</Link>
                                    <Link  className={'nav-link l'} onClick={() => {setExpanded(false);scrollToTop();}} to="/cart">  <img src={Cart} className={'svg_cart'} alt={'img'}/></Link>

                                </div>


                        </Navbar.Collapse>

                </Navbar>
        </Container>
<Outlet /><Container>
            <footer><div className="footer">
                <div className="footer__link">
                    <div className="nav__center__footer">
                        <Link  className={'nav-link'} to="/">  <img src={Logo} alt={'img'}/></Link>
                    </div>
                    <Link  className={'nav-link'} onClick={scrollToTop}  to="/terms">Terms of service</Link>
                    <Link  className={'nav-link'} onClick={scrollToTop}  to="/faq">FAQ</Link>
                    <Link  className={'nav-link'} onClick={scrollToTop}  to="/contests">Contests</Link>
                    <Link  className={'nav-link'}  onClick={scrollToTop}  to="/about"> About Us</Link>
                    <Link  className={'nav-link'}  onClick={scrollToTop} to="/contact">Contacts</Link>
                </div>
            </div>
            </footer>
        </Container>

        </div>

    );
};

export default TopMenu;