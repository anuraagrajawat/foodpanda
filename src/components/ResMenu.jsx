import { useEffect, useState } from "react";
import { API_MENU } from "../utils/url";  
import { useParams } from "react-router";

const ResMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();
  console.log(`Fetching data from: ${API_MENU}${resId}`);

  const fetchMenuData = async (resId) => {
    try {
      const api_data = await fetch(`${API_MENU}${resId}`);
      const json = await api_data.json();
      console.log(json);
      setMenu(json); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (resId) {
      fetchMenuData(resId);
    }
  }, [resId]);

  if (!menu) {
    return <h2 className="text-center text-xl font-bold text-swiggyOrange">Loading...</h2>;
  }

  const restaurantDetails = menu.data.cards[2]?.card?.card?.info || {};
  const categories = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="p-6 bg-gray-100">
      {/* Restaurant Details */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-swiggyOrange">{restaurantDetails.name || "Restaurant Name"}</h1>
        <h3 className="text-xl mt-2">Ratings: ⭐ {restaurantDetails.avgRating || "N/A"}</h3>
        <h3 className="text-xl">Cost for Two: ₹{restaurantDetails.costForTwo / 100 || "N/A"}</h3>
        <h3 className="text-xl">Cuisines: {restaurantDetails.cuisines?.join(", ") || "N/A"}</h3>
        <h3 className="text-xl">Delivery Time: {restaurantDetails.sla?.deliveryTime || "N/A"} mins</h3>
      </div>

      {/* Menu Categories */}
      <div>
        {categories.map((category, index) => {
          const categoryTitle = category.card.card.title;
          const menuItems = category.card.card.itemCards || [];

          return (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-swiggyOrange mb-4">{categoryTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {menuItems.map((item) => (
                  <div
                    key={item.card.info.id}
                    className="w-full p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={item.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item.card.info.imageId}` : "https://via.placeholder.com/150"}
                      alt={item.card.info.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-lg text-gray-800">{item.card.info.name}</h3>
                    <p className="text-sm text-gray-600">₹{item.card.info.price / 100 || "N/A"}</p>
                    <button
                      className="mt-4 bg-swiggyOrange text-white text-lg py-2 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300"
                      onClick={() => alert(`Added ${item.card.info.name} to cart`)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
