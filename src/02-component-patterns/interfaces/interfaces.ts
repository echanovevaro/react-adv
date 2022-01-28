import { ReactElement } from 'react';

export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface PropsProductContext {
	product: Product;
	increaseBy: (value: number) => void;
	counter: number;
}

export interface PropsProductCardHOC {
	({ children, product }: ProductCardProps): JSX.Element;
	Buttons: () => JSX.Element;
	Image: ({ img }: { img?: string }) => JSX.Element;
	Title: ({ title }: { title?: string }) => JSX.Element;
}
