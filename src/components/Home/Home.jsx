import storeData from '../../constants/storeData';
import Card from "../productCard/Card";
const Home = () => {
  return (
    <div className=" container">
      <h2 className="text-center home-header">All Products</h2>
      <hr />
      {
        <div className="row mx-auto home">
          {storeData.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      }
    </div>
  );
};
export default Home;
