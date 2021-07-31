const Card = ({ data }) => {
  return (
    <div className="card mx-auto my-2 p-0" key={data.id}>
      <div className="card-img mt-1 text-center">
        <img className="card-img-top m-0" src={data.image} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title m-0">{data.compnay}</h5>
        <p className="m-0">{data.name}.</p>
        <div className="m-0">
          <p className="card-price m-0">₹{data.price}</p>
          <span className="card-quantity">{data.quantity}</span>
        </div>
        <div className="cart-button">
          <button className=" btn btn-primary ">Add Item</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
