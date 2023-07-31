import "./App.css";
import React from "react";
import { useGetBreweriesWithLimitQuery } from "./features/restaurants/restaurantApiSlice";
import RestaurantCard from "./components/RestaurantCard";
import { overlayState } from "./features/overlayBackground/overlayBackgroundSlice";
import { useSelector } from "react-redux";
import OverlayBackground from "./features/overlayBackground/OverlayBackground";
import { Pagination } from "./components/Pagination";
import { useState } from "react";

function App() {
  const { data, isLoading } = useGetBreweriesWithLimitQuery(55);
  const isOverlay = useSelector(overlayState);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  function paginate(page = 1) {
    setCurrentPage(page);
  }
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;

  if (isLoading) return "Loading.....";
  const restaurantsToShow = data.slice(indexOfFirstCard, indexOfLastCard);
  console.log(restaurantsToShow);
  return (
    <>
      {isOverlay && <OverlayBackground />}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      ></Pagination>
      <h2>current page: {currentPage}</h2>
      {restaurantsToShow.map((restaurant) => (
        <RestaurantCard key={restaurant.id} r={restaurant} />
      ))}
    </>
  );
}

export default App;
