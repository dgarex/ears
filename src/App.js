import React from 'react';



import TopMenu from "./components/TopMenu";
import {
    Routes,
    Route,


} from 'react-router-dom';

import Home from "./components/Home";
import Contact from "./components/Contact";

import Faq from "./components/Faq";
import Terms from "./components/Terms";
import Reviews from './components/Reviews';
import Cart from "./components/Cart";
import Сontests from './components/Сontests';
import Login from "./components/Login";
import Admin from "./components/Admin";
import ProductCard from "./components/ProductCard";

const App = () => {

    return (
        <div className={'rootin'} id={'rootin'}>
                <Routes>
            <Route path="/" element={<TopMenu />    }>
                <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contests" element={<Сontests />} />
                <Route  path="/faq" element={<Faq />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/product-card" element={<ProductCard />} />
            </Route>

        </Routes>

        </div>
    );
};

export default App;