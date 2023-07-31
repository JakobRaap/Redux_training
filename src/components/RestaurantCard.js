import { useState } from "react";
import FavoriteButton from "../features/favoriteButton/FavoriteButton";
import RestaurantOverlay from "./RestaurantOverlay";
import { backgroundOverlayReducer } from "../features/overlayBackground/overlayBackgroundSlice";
import { useDispatch } from "react-redux";
export default function RestaurantCard({ r }) {
  const { name, city } = r;
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  function handleOpenOverlay() {
    setIsVisible(true);
    dispatch(backgroundOverlayReducer(true));
  }
  return (
    <>
      <section style={{ border: "2px solid black", margin: "20px" }}>
        {isVisible && (
          <>
            <RestaurantOverlay setIsVisible={setIsVisible} restaurant={r} />
          </>
        )}
        <h4> {name}</h4>
        <p>{city}</p> <FavoriteButton id={r.id} />
        <button onClick={handleOpenOverlay}>show more info!</button>
      </section>
    </>
  );
}
