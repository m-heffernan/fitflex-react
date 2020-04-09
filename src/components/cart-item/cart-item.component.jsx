import React from "react"
import { connect } from "react-redux"

import "./cart-item.styles.scss"
import { clearItemFromCart } from "../../redux/cart/cart.actions"

const CartItem = ({ item: { imageUrl, price, name }, item, clearItem }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <div className="remove-button" onClick={() => clearItem(item)}>
      &#10005;
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CartItem)
