import { useState } from "react";
import FavoriteButton from "../features/favoriteButton/FavoriteButton";
import RestaurantOverlay from "../features/modal/Modal";
import { backgroundOverlayReducer } from "../features/overlayBackground/overlayBackgroundSlice";
import { useDispatch, useSelector } from "react-redux";
import { showModalReducer, showModalState } from "../features/modal/modalSlice";
export default function RestaurantCard({ r }) {
  const { name, city ,id} = r;
  const dispatch = useDispatch();
  const isModalVisible = useSelector(showModalState)
  function handleOpenOverlay() {
    dispatch(showModalReducer({isVisible: true, id:id}))
    dispatch(backgroundOverlayReducer(true));
  }
  console.log(isModalVisible)
  return (
    <>
    
      <section style={{ border: "2px solid black", margin: "20px" }}>
        {isModalVisible[id] && (
          <>
            <RestaurantOverlay  restaurant={r} />
          </>
        )}
        <h4> {name}</h4>
        <p>{city}</p> <FavoriteButton id={r.id} />
        <button onClick={handleOpenOverlay}>show more info!</button>
      </section>
    </>
  );
}
