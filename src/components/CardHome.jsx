import React from 'react';

const CardHome = (props) => {
    return (
        <div>

                <div className={"itemCard"}>
                    <div className="itemBody">
                        <div className={"itemCardImage"}>
                            <img src={props.post.imgUrl}  alt={'img'}/>
                        </div>
                        <div className="itemCardText">
                            <span className={"priceTag"}>{props.post.price}</span>
                            <h4>{props.post.title}</h4>
                            <p>{props.post.description}</p>
                            <div className="buttons">
                                <button className={"openLink"}>
                                    <a href={'/product-card'}> Learn more</a>
                                </button>
                                <button className={"addToCart"}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CardHome;