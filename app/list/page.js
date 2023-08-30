import Image from "next/image";
import 작명 from "/public/food0.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let arr = [2, 3, 4];
  let b = arr.map((a, i) => {
    console.log(i + 1);
    return 10;
  });
  console.log(b);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
