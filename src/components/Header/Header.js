import React from 'react';
import ButtonAdd from "./ButtonAdd";
import ButtonHistory from "./ButtonHistory";

function Header() {
    return (
        <div className='header'>
            <div className="headerBlock">
                <ButtonAdd />
            </div>
            <div className="headerBlock">
                <ButtonHistory />
            </div>
        </div>
    );
}

export default Header;
