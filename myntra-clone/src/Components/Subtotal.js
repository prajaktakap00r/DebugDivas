import React from 'react'
import "../App.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
        {/* Total Price */}
        <CurrencyFormat 
            renderText = {(value) => (
                <>
                    <p>
                              Subtotal ({basket.length} items): <strong> {value} </strong>
                    </p>
                </>
            )}

            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"Rs."}
        />
        <button> Proceed to Pay </button>
    </div>
  )
}

export default Subtotal
