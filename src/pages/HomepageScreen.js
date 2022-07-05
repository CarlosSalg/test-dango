import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from '../components/navbar/Navbar';
import { productsData } from '../features/products';
import { ToastContainer } from 'react-toastify';
import { Product } from '../components/product/Product';
import { unsetProductsLoading } from '../action/ui';

export const HomepageScreen = () => {

    let dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let products = productsData;
            setProducts( products );
            setTimeout(() => {
                dispatch( unsetProductsLoading() );
            }, 1500);
        }
        getData()
        // eslint-disable-next-line
    }, [ ]);
    
    return (
        <div className='main__wrapper'>
            <ToastContainer
                position="bottom-right"
                hideProgressBar
            />
            <Navbar />
            <main
                className='content__wrapper' 
            >
                <div className='title'>
                    <h1 style={{margin: 0}}>Productos</h1>
                </div>
                <div
                    className='products__container'
                >
                    {
                        products.map(product => (<Product key={product.id}  {...product}/>))
                    }

                </div>
            </main>
        </div>
    )
}
