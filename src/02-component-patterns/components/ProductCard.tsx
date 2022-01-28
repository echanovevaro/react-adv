import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ReactElement } from 'react';

import {
	Product,
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
export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
}: Props) => {
	const { counter, increaseBy } = useProduct();
	// console.log(styles);
	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}>
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
