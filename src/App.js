import "./App.css";
import React from "react";
import { useGetBreweriesWithLimitQuery } from "./features/restaurants/restaurantApiSlice";
import RestaurantCard from "./components/RestaurantCard";
import { overlayState } from "./features/overlayBackground/overlayBackgroundSlice";
import { useSelector } from "react-redux";
import OverlayBackground from "./features/overlayBackground/OverlayBackground";

function App() {
  const { data, isLoading } = useGetBreweriesWithLimitQuery(50);

  const isOverlay = useSelector(overlayState);

  return (
    <>
      {isOverlay && <OverlayBackground />}

      {isLoading
        ? "loading"
        : data.map((restaurant) => (
            <RestaurantCard key={restaurant.id} r={restaurant} />
          ))}
    </>
  );
}

export default App;
