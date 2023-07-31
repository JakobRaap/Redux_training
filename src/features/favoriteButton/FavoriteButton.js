import { selectLikedState, clickLikeReducer } from "./favoriteToggleSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteButton({ id }) {
  const isLiked = useSelector(selectLikedState);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(clickLikeReducer(id))}>
      {isLiked[id] ? "👍" : "👎"}
    </button>
  );
}
