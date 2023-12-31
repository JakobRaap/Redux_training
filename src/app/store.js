import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import isLikedReducer from "../features/favoriteButton/favoriteToggleSlice";
import { breweryApi } from "../features/restaurants/restaurantApiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import backgroundOverlayReducer from "../features/overlayBackground/overlayBackgroundSlice";
import  showModalReducer  from "../features/modal/modalSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isLiked: isLikedReducer,
    backgroundOverlay: backgroundOverlayReducer,
    modal: showModalReducer,
    [breweryApi.reducerPath]: breweryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(breweryApi.middleware);
  },
});
setupListeners(store.dispatch);
export default store;
