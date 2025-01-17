import React from 'react'
import '../App.css';
import checkout_banner from './checkout_banner.png';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from '../StateProvider';

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className="checkout">
        <img className="checkout__ad" src={checkout_banner} alt="CheckoutBanner" />
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout_title">  YOUR SHOPPING BASKET IS EMPTY!</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">YOUR SHOPPING BASKET</h2>
                        {basket.map(item =>{
                            return(
                                <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            );
                        })}
                </div>
            )}      
    </div>
  );
}

export default Checkout;
