import {
	ProductButton,
	ProductImage,
	ProductTitle,
	ProductCard,
} from './index';

import '../styles/custom.styles.css';

const product = {
	id: '1',
	title: 'Coffee Mug - Car',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
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
				<ProductCard
					product={product}
					className='bg-dark text-white'>
					<ProductImage className='custom-image' />
					<ProductTitle className='custom-image' />
					<ProductButton className='custom-buttons' />
				</ProductCard>

				<ProductCard
					product={product}
					className='bg-dark text-white'>
					<ProductCard.Image
						className='custom-image'
						style={{
							boxShadow: '10px 10px 10px  rgba(0,0,0,0.2)',
						}}
					/>
					<ProductCard.Title className='custom-image' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>

				<ProductCard
					product={product}
					style={{
						backgroundColor: '#70D1F8',
					}}>
					<ProductImage
						style={{
							boxShadow: '10px 10px 10px  rgba(0,0,0,0.2)',
						}}
					/>
					<ProductTitle
						style={{
							fontWeight: 'bold',
						}}
					/>
					<ProductButton
						style={{
							display: 'flex',
							justifyContent: 'end',
						}}
					/>
				</ProductCard>
			</div>
		</div>
	);
};
