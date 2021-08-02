import { connect } from "react-redux";
 const CartCard = (props)=> {
    //  Removing product from the cart
     const removeProduct = (id)=>{
         let newCart = props.cart.filter(data => data.id !== id);
         console.log(newCart);
         const action = {type:"REMOVE_FROM_CART", payload: newCart};
         props.dispatch(action);
    }
    return (
        <div className="card cart-card">
            <div className="row g-0">
              <div className="col-md-2 text-center mt-2">
                <img src={props.data.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title m-0">{props.data.company}</h5>
                  <span className="card-quantity"><button className="btn btn-primary" onClick={()=>removeProduct(props.data.id)}>Remove</button> </span>
                  <p className="card-text m-0">
                    {props.data.name}
                  </p>
                  <p className="card-text m-0">
                     {props.data.quantity}
                  </p>
                  <h6> ₹{props.data.price}</h6>
                </div>
              </div>
            </div>
          </div>
    )
}
const mapStateToProps = ({ cart }) => {
    return {
      cart,
    };
  };
export default connect(mapStateToProps)(CartCard);
