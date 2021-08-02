import { connect } from "react-redux";

const Card = (props) => {
  // Adding products to cart
  const handleClick = (data) => {
    let updateCart = [];
    updateCart = props.cart.slice();
    updateCart.push(data);
    const action = { type: "ADD_TO_CART", payload: updateCart };
    props.dispatch(action);
  };

  return (
    <div className="card product-card mx-auto my-2 p-0">
      <div className="card-img mt-1 text-center">
        <img className="card-img-top m-0" src={props.data.image} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title m-0">{props.data.company}</h5>
        <p className="m-0">{props.data.name}.</p>
        <div className="m-0">
          <h6 className="card-price m-0">₹{props.data.price}</h6>
          <span className="card-quantity">{props.data.quantity}</span>
        </div>
        <div className=" card-button text-center">
          <button
            className=" btn btn-sm btn-primary"
            onClick={() => handleClick(props.data)}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};
export default connect(mapStateToProps)(Card);
