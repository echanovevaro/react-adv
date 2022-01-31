import {
	ProductButton,
	ProductImage,
	ProductTitle,
	ProductCard,
} from './index';

import '../styles/custom.styles.css';
import { products } from '../data/products';
import { useShoppingCard } from '../hooks/useShoppingCard';

export const ShoppingPage = () => {
	const { onProductCountChange, shopingCard } =
		useShoppingCard();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}>
				{products.map((product) => (
					<ProductCard
						product={product}
						className='bg-dark text-white'
						key={product.id}
						onChange={onProductCountChange}
						value={shopingCard[product.id]?.count || 0}>
						<ProductImage className='custom-image' />
						<ProductTitle className='custom-image' />
						<ProductButton className='custom-buttons' />
					</ProductCard>
				))}
			</div>
			{/* 
			<input...
			value={counter}
			onChange={(e) => {setCounter(e.target.value)}
			/> 
			*/}
			<div className='shopping-card '>
				{Object.entries(shopingCard).map(([key, product]) => (
					<ProductCard
						product={product}
						key={key}
						className='bg-dark text-white'
						style={{ width: '100px' }}
						onChange={onProductCountChange}
						value={product.count}>
						<ProductImage className='custom-image' />

						<ProductButton
							className='custom-buttons'
							style={{ display: 'flex', justifyContent: 'center' }}
						/>
					</ProductCard>
				))}
			</div>
			{/* <div>{JSON.stringify(shopingCard, null, 5)}</div> */}
		</div>
	);
};
