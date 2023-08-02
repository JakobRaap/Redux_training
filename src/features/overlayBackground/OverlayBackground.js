import { useDispatch, useSelector } from "react-redux";
import { showModalReducer, visibleModalState } from "../modal/modalSlice";
import { backgroundOverlayReducer } from "./overlayBackgroundSlice";

export default function OverlayBackground() {
  const dispatch = useDispatch();
  const currentVisibleModal = useSelector(visibleModalState);
  function handleCloseOverlay() {
    dispatch(showModalReducer({ isVisible: false, id: currentVisibleModal }));
    dispatch(backgroundOverlayReducer(false));
  }
  return (
    <>
      <div
        onClick={() => handleCloseOverlay()}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(2, 2, 2, 0.4)",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      ></div>
    </>
  );
}
