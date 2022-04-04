import React, {useState} from 'react';
import {Container} from "react-bootstrap";

const Cart = () => {
    const [value,SetValue] = useState(1)
    function AddValue(){
        SetValue(value+1)
    }
    function DelValue(){
        if(value >1){
        SetValue(value-1)}
    }
    return (
        <div>

               <Container>
    <div className="table">
                   <table className="shop_table"
                          width="900">

                       <thead  >
                       <tr border="1">
                           <th className="product-remove">&nbsp;</th>
                           <th className="product-thumbnail">Photo</th>
                           <th className="product-name">Product</th>
                           <th className="product-price">Price</th>
                           <th className="product-quantity">Quantity</th>
                           <th className="product-subtotal">Summary</th>
                       </tr>
                       </thead>
                       <tbody>

                       <tr className="woocommerce-cart-form__cart-item cart_item">

                           <td className="product-remove">
                              </td>

                           <td className="product-thumbnail">
                               <img alt={'img'} src={'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1642952879872-C37IPFGX438FZJHAET7P/07531EF7-CC87-49A7-87B5-8A3C54661E33.jpg'} />

                           </td>

                           <td className="product-name" data-title="Товар">
                               <p>Coco Body Oil</p></td>

                           <td className="product-price" data-title="Цена">
                               <span className="woocommerce-Price-amount amount"><bdi>60,00&nbsp;<span
                                   className="woocommerce-Price-currencySymbol">₽</span></bdi></span></td>

                           <td className="product-quantity" data-title="Количество">
                               <div className="quantity">

                                       <button aria-label="decrement" className="cart-row-qty-dec css-191r5bv"
                                               color="inherit" tabIndex="0" onClick={DelValue}><span className={"css-2vo577"}>-</span></button>
                                       <input color="inherit"

                                              className="cart-row-qty-input css-16jtuum" data-test="quantity-input"
                                                 value={value} min={0} tabIndex="0" onChange={e => SetValue(e.target.value)}/>
                                           <button aria-label="increment" className={"cart-row-qty-inc css-jo6zlx"}
                                                   color="inherit" tabIndex="0" onClick={AddValue}><span className="css-2vo577">+</span></button>

                               </div>
                           </td>

                           <td className="product-subtotal" data-title="Подытог">
                               <span className="woocommerce-Price-amount amount"><bdi>60,00&nbsp;<span
                                   className="woocommerce-Price-currencySymbol">₽</span></bdi></span></td>
                       </tr>


                       <tr>

                       </tr>

                       </tbody>
                   </table>
                   <div className="btn__cart">
                   <button className="button-37" >Arrange</button>
                   </div>
    </div>
               </Container>
        </div>
    );
};

export default Cart;