import React from 'react';
import {Container} from "react-bootstrap";


const Сontests = () => {

    return (

        <div>
            <Container>
            <div className="contest__title">Contests</div>

                <div className="flex_2">
                    <div className="img_con"> <img alt={'img'} src={"https://ae01.alicdn.com/kf/HTB1B9VFac_vK1Rjy0Foq6xIxVXaG.jpg"} /></div>
                <div className="contest__info">

                  <div className="contest__title__block">
                      Competition for the best ears!
                  </div>
                    <div className="contest__description__block">
                        A contest for the cutest ears made by your hands! The winner will receive a 30% discount in my store


                    </div>
                    <div className="contest__doc__block">

                        <div className="example-2">
                            <div className="form-group">
                                <input type="file" name="file" id="file" className="input-file" />
                                <label htmlFor="file" className="btn btn-tertiary js-labelFile" >
                                    <i className="icon fa fa-check"></i>
                                    <span className="js-fileName">Upload a file</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

            </Container>
        </div>
    );
};

export default Сontests;