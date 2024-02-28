// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      let total = 0
      cartList.map(each => {
        total += each.quantity * each.price
        return total
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-con1">
            <h1 className="cart-p1">
              Order Total : <span className="cart-span">Rs {total} /-</span>
            </h1>
            <p className="cart-p2">{cartLength} items in cart</p>
            <button className="cart-button" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
