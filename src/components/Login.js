import React from 'react';
import {Container} from "react-bootstrap";

const Login = () => {
    return (
        <div>

            <div className="admin__form__edit">
            <form>
                <div>
                        <p className={'title__admin'}>Authorization</p>
                  <div> <input type={'text'} placeholder={'login'}/></div>
                    <div>   <input type={'password'} placeholder={'password'}/></div>

                    <div className="btn__cart">
                        <button className="button-37" role="button">Login</button>
                    </div>
                </div>


            </form>
            </div>
        </div>
    );
};

export default Login;