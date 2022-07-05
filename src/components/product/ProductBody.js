import React from 'react'
import PropTypes from 'prop-types';

export const ProductBody = ({price, quantityInput, handleInputChange, description}) => {

    return (
        <div className='product__card-body'>
            <div className='product__control'>
                <h3>${price}</h3>
                <input
                    type="number"
                    min={0}
                    max={1000}
                    name='quantityInput'
                    value={quantityInput}
                    onChange={handleInputChange}
                    placeholder="0"
                />
            </div>
            <p>{description}</p>
        </div>
    )
}

ProductBody.propTypes = {
    price: PropTypes.string,
    quantityInput: PropTypes.string,
    handleInputChange: PropTypes.func,
    description: PropTypes.string,
};