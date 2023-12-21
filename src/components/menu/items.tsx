import { Home, Products, PrivateRecipes, PageNotFound } from "../pages";

export interface IMenuItem {
	title: string,
	classname: string,
	route: string,
	picture: string,
	alt: string,
	page: ()=>JSX.Element,
	privat: boolean,
}

export const menuItems: IMenuItem[] = [
	{
		title: "Home",
		classname: "menuItem",
		route: "/",
		picture: "",
		alt: "home",
		page: () => <Home />,
		privat: false,
	},
	{
		title: "Products",
		classname: "menuItem",
		route: "/products",
		picture: "",
		alt: "products",
		page: () => <Products />,
		privat: false,
	},
	{
		title: "Recipes",
		classname: "menuItem",
		route: "/privaterecipes",
		picture: "",
		alt: "privaterecipes",
		page: () => <PrivateRecipes />,
		privat: true,
	},
	{
		title: "404",
		classname: "menuItem",
		route: "/anyPage",
		picture: "",
		alt: "404",
		page: () => <PageNotFound />,
		privat: false,
	},
];
