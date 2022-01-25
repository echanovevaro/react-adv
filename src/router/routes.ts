import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage3 } from '../01-lazyLoad/pages';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component:
		| LazyExoticComponent<JSXComponent>
		| JSXComponent;

	name: string;
}

const Lazy1 = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyPage1"*/ '../01-lazyLoad/pages/LazyPage1'
		),
);
const Lazy2 = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyPage2"*/ '../01-lazyLoad/pages/LazyPage2'
		),
);
const Lazy3 = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyPage3"*/ '../01-lazyLoad/pages/LazyPage3'
		),
);

export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'Lazy1',
		Component: Lazy1,
		name: 'Lazy-1',
	},
	{
		to: '/lazy2',
		path: 'Lazy2',
		Component: Lazy2,
		name: 'Lazy-2',
	},
	{
		to: '/lazy3',
		path: 'Lazy3',
		Component: Lazy3,
		name: 'Lazy-3',
	},
];
