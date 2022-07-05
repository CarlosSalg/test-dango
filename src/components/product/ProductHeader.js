import React from 'react'
import PropTypes from 'prop-types';

export const ProductHeader = ({imageUrl, titleSize, changeTitleInput }) => {

    return (
        <div className='product__card-header'>
            <img
                src={imageUrl}
                alt={changeTitleInput}
                className="product__image"
                loading="lazy"
            />
            <h2 style={{ fontSize: `${titleSize}px` }}>{changeTitleInput}</h2>
        </div>
    )
}

ProductHeader.propTypes = {
    imageUrl: PropTypes.string,
    titleSize: PropTypes.number,
    changeTitleInput: PropTypes.string,
};