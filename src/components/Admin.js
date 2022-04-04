import React from 'react';
import {Container} from "react-bootstrap";
import  { useEffect, useState } from "react";

import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

const Admin = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    function Confirm(){
      window.confirm('Delete?')
    }
    return (

        <div>
            <Container>
                <button  className={'button-37'} onClick={() => setShowAdd(true)}>
                  Add
                </button>



                <div className="table">
                    <table className="shop_table"
                           width="900">

                        <thead  >
                        <tr border="1">
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">Photo</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-delete"></th>

                        </tr>
                        </thead>
                        <tbody>

                        <tr className="woocommerce-cart-form__cart-item cart_item">

                            <td className="product-remove">
                                <button  className={'button-37'} onClick={() => setShowEdit(true)}>
                                    edit
                                </button>
                                <div className="product-delete"><button  className={'button-37'} onClick={() => setShowDelete(true)}>
                                    delete
                                </button></div>
                            </td>

                            <td className="product-thumbnail">
                                <img src={'https://images.squarespace-cdn.com/content/v1/5ef75c3f38ce954fac614087/1642952879872-C37IPFGX438FZJHAET7P/07531EF7-CC87-49A7-87B5-8A3C54661E33.jpg'} />

                            </td>

                            <td className="product-name" data-title="Товар">
                                <p>Coco Body Oil</p></td>

                            <td className="product-price" data-title="Цена">
                               <span className="woocommerce-Price-amount amount"><bdi>60,00&nbsp;<span
                                   className="woocommerce-Price-currencySymbol">₽</span></bdi></span></td>

                            <td className="product-delete" data-title="Количество">

                            </td>


                        </tr>


                        <tr>

                        </tr>

                        </tbody>
                    </table>
                <div className="admin__form">

                </div>
                </div>
            </Container>
            <ModalAdd active={showAdd} SetActive={setShowAdd} > <div className="admin__form__add"> <form>
                <div>
                    <p className={'title__admin'}> Add product</p>
                    <input  type={'text'} placeholder={'Title'}/></div>
                <div> <input  type={'text'} placeholder={'Description'}/></div>
                <div><input  type={'number'} placeholder={'price'}/></div>



                <div className="example-2">
                    <div className="form-group">
                        <input type="file" name="file" id="file" className="input-file"/>
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <i className="icon fa fa-check"></i>
                            <span className="js-fileName">Add Photo</span>
                        </label>
                    </div>
                </div>
                <div className="btn__cart">
                    <button className="button-37" role="button">Add</button>
                </div>
            </form></div></ModalAdd>
            <ModalEdit active={showEdit} SetActive={setShowEdit} >
                <div className="admin__form__edit">
                    <form>
                        <div>
                            <p className={'title__admin'}> Edit product</p>
                            <input type={'text'} placeholder={'Title'}/></div>
                        <div><input type={'text'} placeholder={'Description'}/></div>
                        <div><input type={'number'} placeholder={'price'}/></div>


                        <div className="example-2">
                            <div className="form-group">
                                <input type="file" name="file" id="file" className="input-file"/>
                                <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                                    <i className="icon fa fa-check"></i>
                                    <span className="js-fileName">Add Photo</span>
                                </label>
                            </div>
                            <div className="btn__cart">
                                <button className="button-37" role="button">Edit</button>
                            </div>
                        </div>


                    </form>
                </div></ModalEdit>
            <ModalDelete active={showDelete} SetActive={setShowDelete}><div className={'delete'}>Delete?
            <p>Do you confirm the deletion?</p></div>
                <div className="flex">
            <form>    <div className="btn__cart">
                <button className="button-37" role="button">Cancel</button>

            </div></form>
                <form>    <div className="btn__cart">
                    <button className="button-37" role="button">Delete</button>

                </div></form></div></ModalDelete>
        </div>
    );
};

export default Admin;