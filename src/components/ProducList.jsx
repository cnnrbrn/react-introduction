import { products } from "../data/products";
import Product from "./Product";

export default function ProductList() {
	return (
		<ul>
			{products.map((product) => {
				const { id, title } = product;

				return <Product key={id} title={title} />;
			})}
		</ul>
	);
}
