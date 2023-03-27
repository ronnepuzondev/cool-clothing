import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block"></div>
                <span>Description</span>
                <div className="header-block"></div>
                <span>Quantity</span>
                <div className="header-block"></div>
                <span>Price</span>
                <div className="header-block"></div>
                <span>Remove</span>
                <div className="header-block"></div>
            </div>
                {cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
                }
                <span className='total'>Total: 0</span>
        </div>
    )
}

export default Checkout