import { useState } from "react";
import { CounterStyle } from "./Counter.style";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux";
import { remove } from "../../redux/storeSlice";

type CounterProps = {
 name?: string;
 price?: number;
};

export function Counter(props: CounterProps) {
 let getCounter = useSelector((state: StoreState) =>
  state.store.map((item) =>
   item.order.reduce((amount: number, itens) => (amount = itens.amount), 0)
  )
 );

 let totalAmount = getCounter.reduce((amount) => amount);

 let [count, setCount] = useState(totalAmount);

 const dispatch = useDispatch();

 function handleClick() {
  dispatch(remove({}));
 }

 return (
  <CounterStyle className={props.name}>
   {count === 1 ? (
    <HiOutlineTrash onClick={handleClick}></HiOutlineTrash>
   ) : (
    <GrFormSubtract
     onClick={() => setCount((count) => count - 1)}
    ></GrFormSubtract>
   )}
   <p>{count}</p>
   <GrFormAdd onClick={() => setCount((count) => count + 1)}></GrFormAdd>
  </CounterStyle>
 );
}
