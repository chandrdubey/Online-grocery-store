import { connect } from "react-redux";
import CartCard from "./CartCard";
 

const Cart = (props) => {
//Buy products
  const handleSubmit = ()=>{
      alert("Order successfully placed");
  }
  let total_amount = 0;
// Calculating Total Amount
  for(let i = 0; i < props.cart.length; i++){
     total_amount += parseInt(props.cart[i].price);
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-7 cart-page p-0 ">
          <h3 className="text-center">Your Cart</h3>
          {props.cart && props.cart.length>0 ?(props.cart.map((data) => (
            <CartCard data={data} key={data.id} />
          ))):(
            <div className="text-center my-2">
              <hr/>
              <h5>your cart is empty</h5> 
              </div>
          )}
           {props.cart && props.cart.length>0 && (
               <div className="text-center my-2">
               <button className="btn btn-primary" onClick={handleSubmit}> Buy</button>
             </div>
           )}
        </div>
        <div className="col-4 ">
          
          <div className="card">
            <h5 className="card-header">Price Details</h5>
            <div className="card-body">
              <p className="card-text">
              Price({props.cart.length} items) = {total_amount}
              </p>
              <hr/>
              <h6 className="">Total Amount = {total_amount}</h6> 
            </div>
          </div>
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

export default connect(mapStateToProps)(Cart);
