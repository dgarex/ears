import React from 'react';
import {Container} from "react-bootstrap";

const ProductCard = () => {
    return (
        <div>
            <Container>
            <div className="product__card">

                <div className="product__card__left">
                    <img alt={'img'} src={'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1647796188794-LTFJHJXRH6ABPP7VF66P/IMG_9811.jpg?format=1000w'} />
                </div>
                <div className="product__card__right">
                    <div className="itemCardText">
                        <div><span className={"priceTag"}>250$</span></div>
                        <div><h4>Blushing White Bunny</h4></div>
                        <div><p>Short description. Very short description. Very very short description.</p></div>


                        <div className="buttons">
                            <button className={"addToCart"}>
                                Add to cart
                            </button>
                </div>
                    </div>
                </div>

            </div>
            </Container>
        </div>
    );
};

export default ProductCard;