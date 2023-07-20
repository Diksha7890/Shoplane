import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import FavouriteItems from "../Components/FavouriteItems";
const FavouritePage = () => {
  const item = useSelector((state) => state.Favourite.items);
  return (
    <>
      <Header />
      <Navbar />
      <div className="row">
        {item.length === 0 ? (
          <div className="emptyCart">
            <h1>No items in your Favourites</h1>
            <h1 className="bi bi-emoji-frown" style={{ fontSize: "50px" }}></h1>
          </div>
        ) : (
          item.map((product, index) => (
            <FavouriteItems key={index} data={product} />
          ))
        )}
      </div>
    </>
  );
};
export default FavouritePage;
