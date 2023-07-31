import { useDispatch } from "react-redux";
import { backgroundOverlayReducer } from "../features/overlayBackground/overlayBackgroundSlice";

export default function RestaurantOverlay({ restaurant, setIsVisible }) {
  const dispatch = useDispatch();
  function handleCloseOverlay() {
    setIsVisible(false);
    dispatch(backgroundOverlayReducer(false));
  }
  return (
    <>
      <div
        style={{
          border: "5px solid black",
          width: "400px",
          height: "200px",
          position: "fixed",
          backgroundColor: "white",
          marginLeft: "20%",
          zIndex: "100",
        }}
      >
        <button onClick={handleCloseOverlay}>close overlay</button>
        <h2>{restaurant.phone}</h2>
        <p>{restaurant.name}</p>
        <a href={restaurant.website_url}>Visit our website!</a>
      </div>
    </>
  );
}
