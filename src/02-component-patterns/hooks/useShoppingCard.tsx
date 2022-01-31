import {
	Product,
	ProductInCard,
} from '../interfaces/interfaces';
import { useState } from 'react';

export const useShoppingCard = () => {
	const [shopingCard, setShopingCard] = useState<{
		[key: string]: ProductInCard;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		count: number;
		product: Product;
	}) => {
		setShopingCard((oldShopingCard) => {
			if (count === 0) {
				// console.log(oldShopingCard);
				delete { ...oldShopingCard }[product.id];
				const { [product.id]: toDelete, ...rest } =
					oldShopingCard;
				// console.log(toDelete);
				// console.log(rest);
				return rest;
			}

			return {
				...oldShopingCard,
				[product.id]: { ...product, count },
			};
		});
	};

	return { onProductCountChange, shopingCard };
};
