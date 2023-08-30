import { age, name } from "./data.js";
import 작명 from "./hi.js";
export default function Cart() {
  return (
    <div>
      <작명></작명>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명 {age}</p>
        <p>$40 {name}</p>
        <p>1개</p>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
