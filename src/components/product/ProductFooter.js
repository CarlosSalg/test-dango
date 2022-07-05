import React from 'react'
import PropTypes from 'prop-types';

export const ProductFooter = ({handleAddToCart}) => {
    return (
        <div className='product__card-footer'>
            <button className='button button__primary button__block' onClick={handleAddToCart}>
                Add to cart
            </button>
            <button style={{marginTop: '.75rem'}} className='button button__secondary button__block'>
                Learn More
            </button>
        </div>
    )
}

ProductFooter.propTypes = {
    handleAddToCart: PropTypes.func
};