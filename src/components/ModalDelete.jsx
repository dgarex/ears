import React from 'react';
import '../assets/css/style.css';

const ModalAdd = ({active,SetActive, children}) => {
    return (
        <div>
<div className={active ? "modal active" : 'modal'} onClick={() => SetActive(false)}>
    <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
    </div>
</div>
        </div>
    );
};

export default ModalAdd;