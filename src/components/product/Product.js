import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { setQuantity } from '../../action/products';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { ProductHeader } from './ProductHeader';
import { ProductBody } from './ProductBody';
import { ProductFooter } from './ProductFooter';
import { ProductLoader } from './ProductLoader';

export const Product = ({title, imageUrl, description, price}) => {
    
    let dispatch = useDispatch();

    const { quantity } = useSelector( state => state.products );
    const { productsLoading } = useSelector( state => state.ui );

    const [{ quantityInput }, handleInputChange, reset ] = useForm({ quantityInput: ''});

    const [ changeTitleInput, setChangeTitleInput ] = useState(title);
    const [ titleSize, setTitleSize ] = useState(20);

    const handleChangeTitleInput = e => setChangeTitleInput( e.target.value );
    const handleTitleRange = e => setTitleSize(e.target.value);

    const handleAddToCart = () => {
        if(quantityInput > 0 && quantityInput <= 1000){
            let newQuantity = parseInt(quantity) + parseInt(quantityInput);
            dispatch( setQuantity(newQuantity) );
            toast.success(`Se agregaron ${ quantityInput } ${changeTitleInput}`);
            reset();
        }else if(quantityInput > 1000){
            toast.warn('No puedes elegir mas de 1,000 productos');
        }else{
            toast.warn('Debe seleccionar una cantidad');
        }
    }

    if(productsLoading){
        return (<ProductLoader />)
    }

    return (
        <div className='product__card'>
            <div className='producto__input-control'>
                <input
                    className='input__text'
                    type="text"
                    name='changeTitleInput'
                    value={changeTitleInput}
                    onChange={handleChangeTitleInput}
                    maxLength="130"
                />
                <input
                    className='input__range'
                    type="range"
                    onChange={handleTitleRange}
                    defaultValue="20"
                />
            </div>

            <ProductHeader
                imageUrl={imageUrl}
                titleSize={parseInt(titleSize)}
                changeTitleInput={changeTitleInput}
            />

            <ProductBody
                price={price}
                quantityInput={quantityInput}
                handleInputChange={handleInputChange}
                description={description}
            />

            <ProductFooter
                handleAddToCart={handleAddToCart}
            />
        </div>
    )
}

Product.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
};