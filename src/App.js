import "./App.css";
import React from "react";
import { useGetBreweriesWithLimitQuery } from "./features/restaurants/restaurantApiSlice";
import RestaurantCard from "./components/RestaurantCard";
import { overlayState } from "./features/overlayBackground/overlayBackgroundSlice";
import { useSelector } from "react-redux";
import OverlayBackground from "./features/overlayBackground/OverlayBackground";
import { Pagination } from "./components/Pagination";
import { useState } from "react";
import { visibleModalState } from "./features/modal/modalSlice";

function App() {
  const { data, isLoading } = useGetBreweriesWithLimitQuery(55);
  const isOverlay = useSelector(overlayState);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  function paginate(page = 1) {
    setCurrentPage(page);
  }
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const modalState = useSelector(visibleModalState);
  if (isLoading) return "Loading.....";
  const restaurantsToShow = data.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      {isOverlay && <OverlayBackground />}
      <h4>current active modal:{modalState}</h4>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      ></Pagination>
      <h2>current page: {currentPage}</h2>
      {restaurantsToShow.map((restaurant) => (
        <RestaurantCard key={restaurant.id} r={restaurant} />
      ))}
      <button onClick={() => setItemsPerPage(itemsPerPage + 3)}>
        show more restaurants
      </button>
    </>
  );
}

export default App;
