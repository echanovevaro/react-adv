import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyLoad/pages/NoLazy';
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

const Lazylayout = lazy(
	() =>
		import(
			/* webpackChunkName: "Lazylayout"*/ '../01-lazyLoad/layout/LazyLayout'
		),
);

export const routes: Route[] = [
	{
		path: '/LazyLoad/*',
		to: 'LazyLoad',
		Component: Lazylayout,
		name: 'LazyLayout Dash',
	},
	{
		to: 'no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No Lazy',
	},
];
