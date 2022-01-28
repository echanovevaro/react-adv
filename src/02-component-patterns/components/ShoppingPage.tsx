import {
	ProductButton,
	ProductImage,
	ProductTitle,
	ProductCard,
} from './index';

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
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButton />
				</ProductCard>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title={'Cafelate'} />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	);
};
