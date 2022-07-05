import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const { quantity } = useSelector( state => state.products )

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img
                    alt="dango-logo"
                    src="/assets/img/logo.png"
                />
            </div>
            <div className='navbar__info'>
                <span>Total productos: { quantity } </span>
            </div>
        </div>
    )

}
