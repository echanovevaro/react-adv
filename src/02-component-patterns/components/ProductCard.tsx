import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import {
	ProductCardProps,
	PropsProductContext,
} from '../interfaces/interfaces';

export const ProductContext = createContext(
	{} as PropsProductContext,
);

const { Provider } = ProductContext;

// interface ProductButtonProps {
// 	increaseBy: (value: number) => void;
// 	counter: number;
// }

export const ProductCard = ({
	children,
	product,
}: ProductCardProps) => {
	const { counter, increaseBy } = useProduct();
	// console.log(styles);
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={styles.productCard}>
				{children}
				{/* <ProductImage img={product.img} />
			<ProductTitle title={product.title} />
			<ProductButton
				increaseBy={increaseBy}
				counter={counter}
			/> */}
			</div>
		</Provider>
	);
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Button = ProductButton;
