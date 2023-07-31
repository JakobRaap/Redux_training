import { useDispatch, useSelector } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  selectCount,
  incrementByX,
} from "./counterSlice";
import { useState } from "react";
export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => dispatch(decrementByOne())}>-</button>
      <button onClick={() => dispatch(incrementByOne())}>+</button>
      <h2>{count}</h2>
      <input
        type="number"
        onChange={(event) => setNumber(Number(event.target.value))}
        value={number}
      ></input>{" "}
      <button onClick={() => dispatch(incrementByX(number))}>add</button>
    </>
  );
}
