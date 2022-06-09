import { Cart } from "./Cart.js";
import { Card } from "./Card.js";

const Product = ({ item }) => {
  //이런 식으로도 가능
  const result = [];
  item.forEach((item) => {
    result.push(<Card goods={item} key={item.id} />);
  });
  return (
    <main class="product">
      <ul class="product-list">{result}</ul>
      <Cart />
    </main>
  );
};

export default Product;
